import { CREATE_ANNOUNCEMENT } from "@/lib/apolloClient/mutation/announcementMutation";
import { useMutation } from "@apollo/client";

interface CreateAnnouncementVariables {
  subject: string;
  description: string;
  attachment: string;
  shop_id?: string;
  type: string;
}

interface CreateAnnouncementResponse {
  insert_announcements_one: {
    id: string;
    subject: string;
    description: string;
    attachment: string;
    shop_id?: string;
    type: string;
  };
}

export const useCreateAnnouncement = () => {
  const [
    createAnnouncementMutation,
    { loading: loadingCreateAnnouncement, error: errorCreateAnnouncement },
  ] = useMutation<CreateAnnouncementResponse, CreateAnnouncementVariables>(
    CREATE_ANNOUNCEMENT
  );

  const createAnnouncement = async (variables: CreateAnnouncementVariables) => {
    try {
      const response = await createAnnouncementMutation({
        variables,
      });
      return response?.data?.insert_announcements_one;
    } catch (err) {
      console.error("Error creating announcement:", err);
      throw err;
    }
  };

  return {
    createAnnouncement,
    loadingCreateAnnouncement,
    errorCreateAnnouncement,
  };
};
