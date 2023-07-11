import { memo } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { optionList } from "./optionList";
import { APP_PATH } from "../../utils/path";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const Page = ({ option, handleChangeOption, handleRedirect, location }) => {
  const { pathname } = location;
  return (
    <Box>
      <BottomNavigation showLabels value={option} onChange={handleChangeOption}>
        {optionList.map(({ label, icon, redirect }) => (
          <BottomNavigationAction
            key={label}
            icon={icon}
            label={label}
            disabled={pathname === APP_PATH.root}
            onClick={() => handleRedirect(redirect)}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

Page.propTypes = {
  option: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
  handleRedirect: PropTypes.func.isRequired,
  handleChangeOption: PropTypes.func.isRequired,
};

export default memo(Page);
