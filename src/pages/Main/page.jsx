import { memo } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Page = ({ title, optionList, handleRedirect }) => (
  <Box>
    <Box mt={1}>
      <Typography variant="h3" component="h1">
        {title}
      </Typography>
    </Box>
    <Box className="flex flex-col items-center mt-40">
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
  title: PropTypes.string.isRequired,
  optionList: PropTypes.array.isRequired,
  handleRedirect: PropTypes.func.isRequired,
};

export default memo(Page);
