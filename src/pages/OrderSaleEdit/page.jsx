import { memo } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

const Page = ({
  state,
  loading,
  handleSubmit,
  handleChange,
  statusOptions,
}) => {
  const { status, trackingInfo } = state;
  return (
    <Box className="h-full">
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        className="h-full flex flex-col align-center justify-center"
      >
        <TextField
          select
          required
          name="status"
          margin="dense"
          label="Status"
          value={status}
          onChange={handleChange}
        >
          {statusOptions.map(({ value }) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          margin="dense"
          name="trackingInfo"
          value={trackingInfo}
          label="Tracking Info"
          onChange={handleChange}
        />
        <Box mt={2} className="flex justify-center">
          {!loading ? (
            <Button fullWidth size="large" type="submit" variant="outlined">
              Update
            </Button>
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Box>
    </Box>
  );
};

Page.propTypes = {
  loading: PropTypes.bool.isRequired,
  state: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  statusOptions: PropTypes.arrayOf(PropTypes.object),
};

export default memo(Page);
