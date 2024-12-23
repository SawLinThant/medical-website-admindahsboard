import { DELETE_PRODUCT_TAG } from '@/lib/apolloClient/mutation/productMutation';
import { useMutation } from '@apollo/client';

interface UseDeleteProductTagReturn {
  deleteProductTag: (product_id: string, tag_id:string) => Promise<void>;
  loading: boolean;
  error: Error | undefined;
}

export const useDeleteProductTag = (): UseDeleteProductTagReturn => {
  const [deleteMutation, { loading, error }] = useMutation(DELETE_PRODUCT_TAG);

  const deleteProductTag = async (product_id: string, tag_id:string) => {
    try {
      await deleteMutation({
        variables: {
            product_id: product_id,
            tag_id: tag_id
         },
      });
    } catch (err) {
      console.log(err)
    }
  };

  return { deleteProductTag, loading, error };
};
