import Page from "./page";
import { memo, useCallback } from "react";
import { optionList } from "./optionList";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const handleRedirect = useCallback((path) => navigate(path), []);
  return (
    <Page
      title="Home"
      optionList={optionList}
      handleRedirect={handleRedirect}
    />
  );
};

export default memo(Main);
