import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: "http://159.89.161.11:8000/v1/graphql", //add hasura cloud url
});

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
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret":
            "Secret@2024Medical",
     // ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
});

export const createApolloClient = () =>
  new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
  });
