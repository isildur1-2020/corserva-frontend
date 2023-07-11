import Page from "./page";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, memo } from "react";

const BottomNavigator = () => {
  const navigate = useNavigate();
  const [option, setOption] = useState(-1);
  const handleChangeOption = useCallback((ev, newValue) => {
    setOption(newValue);
  }, []);
  const handleRedirect = useCallback((path) => navigate(path), []);
  return (
    <Page
      option={option}
      handleRedirect={handleRedirect}
      handleChangeOption={handleChangeOption}
    />
  );
};

export default memo(BottomNavigator);
