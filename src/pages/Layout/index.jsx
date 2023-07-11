import { useContext } from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { MainContext } from "../../context/MainContext";
import BottomNavigator from "../../components/BottomNavigator";

const Layout = () => {
  const { state } = useContext(MainContext);
  return (
    <Box className="h-screen bg-slate-300 flex items-center justify-center">
      <Box
        style={{ maxHeight: 580 }}
        className="w-96 h-full bg-white flex flex-col justify-end rounded-md pb-1 drop-shadow-2xl p-4"
      >
        <Box className="h-full flex flex-col">
          <Typography variant="h3" component="h2">
            {state.title}
          </Typography>
          <Outlet />
        </Box>
        <BottomNavigator />
      </Box>
    </Box>
  );
};

export default Layout;
