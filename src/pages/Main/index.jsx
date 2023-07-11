import Page from "./page";
import { memo, useCallback } from "react";
import { optionList } from "./optionList";
import { useNavigate } from "react-router-dom";
import { useSetTitle } from "../../hooks/useSetTitle";

const Main = () => {
  useSetTitle("Home");
  const navigate = useNavigate();
  const handleRedirect = useCallback((path) => navigate(path), []);
  return <Page optionList={optionList} handleRedirect={handleRedirect} />;
};

export default memo(Main);
