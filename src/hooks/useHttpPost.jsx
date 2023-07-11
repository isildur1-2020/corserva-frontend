import { useState } from "react";
import { swalSuccess, swalError } from "../swal";

export const useHttpPost = ({ service, body, setState, initState }) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (ev) => {
    try {
      setLoading(true);
      ev.preventDefault();
      const { data } = await service(body);
      setState(initState);
      swalSuccess(data.message);
    } catch (err) {
      console.log(err);
      swalError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return { handleSubmit, loading };
};
