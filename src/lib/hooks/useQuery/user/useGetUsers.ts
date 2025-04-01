import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import {
  GET_USER_BY_ID,
  GET_USER_BY_SHOP_ID,
  GET_USER_BY_PHONE,
} from "@/lib/apolloClient/query/userQuery";

interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  role: string;
  shop_id?: string;
  delivery_addresses?: {
    firstname: string;
    lastname: string;
    address: string;
    phone: string;
    email: string;
  }[];
}

interface GetUserByIdResponse {
  users: User[];
}

interface GetUserByShopIdResponse {
  users: User[];
}

interface GetUserByPhoneResponse {
  users: User[];
}

export const useGetUserById = (id: string) => {
  const { data, loading, error } = useQuery<GetUserByIdResponse>(GET_USER_BY_ID, {
    variables: { id },
    fetchPolicy: "network-only",
  });

  const user = data?.users[0] || null;

  return {
    user,
    loading,
    error,
  };
};

export const useGetUserByShopId = (shopId: string) => {
  const { data, loading, error } = useQuery<GetUserByShopIdResponse>(
    GET_USER_BY_SHOP_ID,
    {
      variables: { shop_id: shopId },
      fetchPolicy: "network-only",
    }
  );

  const users = data?.users || [];

  return {
    users,
    loading,
    error,
  };
};

export const useGetUserByPhone = (phone: string) => {
  const { data, loading, error } = useQuery<GetUserByPhoneResponse>(
    GET_USER_BY_PHONE,
    {
      variables: { phone },
      fetchPolicy: "network-only",
    }
  );

  const users = data?.users || [];

  return {
    users,
    loading,
    error,
  };
}; 