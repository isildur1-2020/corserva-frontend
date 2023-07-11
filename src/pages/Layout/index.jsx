import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import BottomNavigator from "../../components/BottomNavigator";

const Layout = () => (
  <Box className="h-screen bg-slate-300 flex items-center justify-center">
    <Box className="w-96 h-3/4 bg-white flex flex-col justify-end rounded-md pb-1 drop-shadow-2xl p-4">
      <Box className="h-full flex flex-col">
        <Outlet />
      </Box>
      <BottomNavigator />
    </Box>
  </Box>
);

export default Layout;
