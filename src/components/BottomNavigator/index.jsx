import Page from "./page";
import { APP_PATH } from "../../utils/path";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useCallback, memo, useEffect } from "react";

const BottomNavigator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [option, setOption] = useState(-1);
  const handleChangeOption = useCallback((ev, newValue) => {
    setOption(newValue);
  }, []);
  const handleRedirect = useCallback((path) => navigate(path), []);
  useEffect(() => {
    const { pathname } = location;
    const { products, orderSales } = APP_PATH;
    const isValidPath = pathname !== products && pathname !== orderSales;
    if (isValidPath) setOption(-1);
  }, [location]);
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
