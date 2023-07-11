import { memo } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Page = ({ optionList, handleRedirect }) => (
  <Box className="h-full">
    <Box className="h-full flex flex-col items-center justify-center">
      {optionList.map((option) => {
        const { label, redirect, marginTop, icon } = option;
        return (
          <Box key={label} mt={marginTop}>
            <Button
              size="large"
              className="w-56"
              variant="contained"
              endIcon={icon}
              onClick={() => handleRedirect(redirect)}
            >
              {label}
            </Button>
          </Box>
        );
      })}
    </Box>
  </Box>
);

Page.propTypes = {
  optionList: PropTypes.array.isRequired,
  handleRedirect: PropTypes.func.isRequired,
};

export default memo(Page);
