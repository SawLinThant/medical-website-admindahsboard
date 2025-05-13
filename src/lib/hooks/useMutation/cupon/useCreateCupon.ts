import { CREATE_CUPON } from "@/lib/apolloClient/mutation/cupon";
import { useMutation } from "@apollo/client";

interface Cupon {
  cupon_number?: string;
  type?: string;
  expired_date?: string;
  id?: string;
  value?: string;
}

export const useCreateCupon = () => {
  const [
    createCuponMutation,
    { loading: loadingCreateCupon, error: errorCreateCupon },
  ] = useMutation<{ insert_cupons: Cupon[] }, Cupon>(CREATE_CUPON);

  const createCupon = async (variables: Cupon) => {
    try {
      const response = await createCuponMutation({
        variables,
      });
      return response?.data?.insert_cupons[0];
    } catch (err) {
      console.error("Error creating cupon:", err);
      throw err;
    }
  };

  return { createCupon, loadingCreateCupon, errorCreateCupon };
};