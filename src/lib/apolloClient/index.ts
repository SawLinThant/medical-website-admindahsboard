import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
const httpLink = new HttpLink({
  uri: "https://api.natsay.com.mm/v1/graphql", //add hasura cloud url
});

const wsLink = new GraphQLWsLink(
  createClient({
    url:
      process.env.NEXT_PUBLIC_GRAPHQL_WS_ENDPOINT ||
      "wss://api.natsay.com.mm/v1/graphql",
    connectionParams: () => {
      const token = localStorage.getItem("token"); // Get token from localStorage
      return {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      };
    },
  })
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log("[graphQLErrors]", graphQLErrors);
    graphQLErrors.forEach(({ extensions }) => {
      if (extensions?.code === "invalid-jwt") {
        localStorage.removeItem("token");
        alert("Session Expired, Please Sign In With Your Credentials Again");
      }
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
    alert("Network connection problem");
  }
});

const authLink = setContext((_, { headers }) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return {
    headers: {
      ...headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
});

const httpLinkWithMiddleware = ApolloLink.from([errorLink, authLink, httpLink]);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLinkWithMiddleware
);

export const createApolloClient = () =>
  new ApolloClient({
    // link: ApolloLink.from([errorLink, authLink, httpLink]),
    link: splitLink,
    cache: new InMemoryCache(),
  });
