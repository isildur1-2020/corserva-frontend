import { memo } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

const Page = ({ state, handleSubmit, handleChange, loading }) => {
  const { name, price, stock } = state;
  return (
    <Box className="h-full">
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        className="h-full flex flex-col align-center justify-center"
      >
        <TextField
          required
          name="name"
          label="Name"
          value={name}
          margin="dense"
          onChange={handleChange}
        />
        <TextField
          required
          type="number"
          name="price"
          label="Price"
          value={price}
          margin="dense"
          onChange={handleChange}
        />
        <TextField
          required
          name="stock"
          type="number"
          label="Stock"
          value={stock}
          margin="dense"
          onChange={handleChange}
        />
        <Box mt={2} className="flex justify-center">
          {!loading ? (
            <Button type="submit" fullWidth size="large" variant="outlined">
              Crear
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
};

export default memo(Page);
