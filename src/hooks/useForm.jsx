import { useState, useCallback } from "react";

export const useForm = (initState) => {
  const [state, setState] = useState(initState);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return { state, setState, handleChange };
};
