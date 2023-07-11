import Page from "./page";
import { useState, useCallback, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNavigator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [option, setOption] = useState(-1);
  const handleChangeOption = useCallback((ev, newValue) => {
    setOption(newValue);
  }, []);
  const handleRedirect = useCallback((path) => navigate(path), []);
  return (
    <Page
      option={option}
      location={location}
      handleRedirect={handleRedirect}
      handleChangeOption={handleChangeOption}
    />
  );
};

export default memo(BottomNavigator);
