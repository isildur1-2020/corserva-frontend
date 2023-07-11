import { useState } from "react";
import { swalSuccess, swalError } from "../swal";

export const useHttpDelete = (service) => {
  const [loading, setLoading] = useState(false);
  const deleteEntity = async (id) => {
    try {
      setLoading(true);
      const { data } = await service(id);
      swalSuccess(data.message);
    } catch (err) {
      console.log(err);
      swalError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return { deleteEntity, loading };
};
