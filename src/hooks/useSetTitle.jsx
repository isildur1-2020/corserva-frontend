import { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";

export const useSetTitle = (title) => {
  const { state, setState } = useContext(MainContext);
  useEffect(() => {
    setState({ ...state, title });
  }, []);
  return null;
};
