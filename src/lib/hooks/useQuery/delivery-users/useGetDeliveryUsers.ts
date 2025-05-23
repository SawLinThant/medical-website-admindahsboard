import { GET_DELIVERY_USER_BY_ID, GET_DELIVERY_USER_BY_PHONE_AND_UID, GET_DELIVERY_USER_BY_UID, GET_FILTERED_DELIVERY_USERS } from "@/lib/apolloClient/query/deliveryUserQuery";
import { SUBSCRIBE_DELIVERY_USERS } from "@/lib/apolloClient/subscription/deliveryUser";
import { useQuery, useSubscription } from "@apollo/client";
import { useMemo, useState } from "react";

export interface DeliveryUser {
  id: string;
  uid: string;
  name: string;
  age: number;
  phone: string;
  contact_address: string;
  status: string;
}

export const useGetDeliveryUsers = () => {
  const [filters, setFilters] = useState<{
    name?: string;
    age?: number;
    phone?: string;
    contact_address?: string;
    uid?: string;
    status?: string;
  }>({});
  const [page, setPage] = useState<number>(1);
  const [take, setTake] = useState<number>(10);

  const skip = useMemo(() => (page - 1) * take, [page, take]);

  const where = useMemo(() => {
    const conditions: any = {};
    if (filters.name) {
      conditions.name = { _ilike: `%${filters.name}%` };
    }
    if (filters.age) {
      conditions.age = { _eq: filters.age };
    }
    if (filters.phone) {
      conditions.phone = { _ilike: `%${filters.phone}%` };
    }
    if (filters.contact_address) {
      conditions.contact_address = { _ilike: `%${filters.contact_address}%` };
    }
    if (filters.uid) {
      conditions.uid = { _eq: filters.uid };
    }
    if (filters.status) {
      conditions.status = { _eq: filters.status };
    }

    return Object.keys(conditions).length > 0 ? conditions : undefined;
  }, [filters]);

  const { data, loading, error } = useQuery(GET_FILTERED_DELIVERY_USERS, {
    variables: {
      where,
      offset: skip,
      limit: take,
    },
    fetchPolicy: "network-only",
  });

  const deliveryUsers = data?.delivery_users || [];
  const totalCount = data?.delivery_users_aggregate?.aggregate?.count || 1;

  return {
    deliveryUsers,
    loading,
    error,
    filters,
    setFilters,
    page,
    setPage,
    take,
    setTake,
    totalCount,
  };
};



interface SubscribeDeliveryUsersResponse {
  delivery_users: DeliveryUser[];
}

export const useSubscribeDeliveryUsers = () => {
  const { data, loading, error } = useSubscription<SubscribeDeliveryUsersResponse>(
    SUBSCRIBE_DELIVERY_USERS,
    {
      fetchPolicy: "network-only",
    }
  );

  const deliveryUsers = data?.delivery_users || [];

  return {
    deliveryUsers,
    loading,
    error,
  };
};

interface GetDeliveryUserResponse {
  delivery_users: DeliveryUser[];
}

interface GetDeliveryUserVariables {
  phone: string;
  uid: string;
}

export const useGetDeliveryUserByPhoneAndUid = (phone: string, uid: string) => {
  const { data, loading, error } = useQuery<GetDeliveryUserResponse, GetDeliveryUserVariables>(
    GET_DELIVERY_USER_BY_PHONE_AND_UID,
    {
      variables: { phone, uid },
      fetchPolicy: "network-only",
      skip: !phone || !uid, // Skip query if phone or uid is empty
    }
  );

  const deliveryUser = data?.delivery_users?.[0] || null;

  return {
    deliveryUser,
    loading,
    error,
  };
};

interface GetDeliveryUserByUidVariables {
  uid: string;
}

export const useGetDeliveryUserByUid = () => {
  const uid = typeof window !== "undefined" ? localStorage.getItem("userUid") || "" : "";
  const { data, loading, error } = useQuery<GetDeliveryUserResponse, GetDeliveryUserByUidVariables>(
    GET_DELIVERY_USER_BY_UID,
    {
      variables: { uid },
      fetchPolicy: "network-only",
      skip: !uid,
    }
  );

  const deliveryUser = data?.delivery_users?.[0] || null;

  return {
    deliveryUser,
    loading,
    error,
  };
};

interface GetDeliveryUserByIdVariables {
  id: string;
}

export const useGetDeliveryUserById = (id:string) => {
  const { data, loading, error } = useQuery<GetDeliveryUserResponse, GetDeliveryUserByIdVariables>(
    GET_DELIVERY_USER_BY_ID,
    {
      variables: { id },
      fetchPolicy: "network-only",
      skip: !id,
    }
  );

  const deliveryUser = data?.delivery_users?.[0] || null;

  return {
    deliveryUser,
    loading,
    error,
  };
};