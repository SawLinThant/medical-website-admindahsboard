import { GET_ANNOUCEMENTS } from "@/lib/apolloClient/query/annoucementsQuery";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";

import { useState } from "react";

interface Announcement {
  id: string;
  subject: string;
  description: string;
  attachment: string;
  created_at: string;
}

interface GetAnnouncementsResponse {
  annoucements: Announcement[];
}

export const useGetAnnouncements = () => {
    const [filters, setFilters] = useState<{
      shop_id?: string | string[];
    }>({});
    const [page, setPage] = useState<number>(1);
    const [take, setTake] = useState<number>(10);
  
    const skip = useMemo(() => (page - 1) * take, [page, take]);
  
    const where = useMemo(() => {
      const conditions: any = {};
      if (filters.shop_id) {
        if (Array.isArray(filters.shop_id)) {
          conditions.shop_id = { _in: filters.shop_id };
        } else {
          conditions.shop_id = { _eq: filters.shop_id };
        }
      }
  
      return Object.keys(conditions).length > 0 ? conditions : undefined;
    }, [filters]);
  
    const { data, loading, error } = useQuery(GET_ANNOUCEMENTS, {
      variables: {
        where,
        offset: skip,
        limit: take,
      },
      fetchPolicy: "network-only",
    });
  
    const announcements = data?.announcements || [];
    const totalCount = data?.announcements_aggregate?.aggregate?.count || 1;
  
    return {
      announcements,
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
  };;
