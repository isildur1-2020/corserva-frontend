import { useState } from "react";
import { swalSuccess, swalError } from "../swal";

export const useHttpPatch = (service) => {
  const [loading, setLoading] = useState(false);
  const updateEntity = (id, body) => async (ev) => {
    try {
      setLoading(true);
      ev.preventDefault();
      delete body.id;
      const { data } = await service(id, body);
      swalSuccess(data.message);
    } catch (err) {
      console.log(err);
      swalError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return { updateEntity, loading };
};
