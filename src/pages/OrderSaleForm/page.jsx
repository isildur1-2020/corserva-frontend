import { memo } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Page = ({
  state,
  loading,
  dataProducts,
  handleSubmit,
  handleChange,
  productState,
  statusOptions,
  productsByName,
  handleAddProduct,
  handleDeleteProduct,
  handleProductChange,
}) => {
  const { quantity, discount, addDisabled } = productState;
  const { status, products, trackingInfo, submitDisabled, productSelected } =
    state;
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
          size="small"
          name="status"
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
          size="small"
          margin="dense"
          name="trackingInfo"
          value={trackingInfo}
          label="Tracking Info"
          onChange={handleChange}
        />
        <Box mt={2}>
          <TextField
            select
            fullWidth
            size="small"
            margin="dense"
            label="Products"
            name="productSelected"
            value={productSelected}
            onChange={handleChange}
          >
            <MenuItem value={0}>
              <em>None</em>
            </MenuItem>
            {dataProducts.map(({ id, name }) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box className="flex items-center gap-x-2">
          <TextField
            size="small"
            type="number"
            margin="dense"
            name="quantity"
            value={quantity}
            label="Quantity"
            onChange={handleProductChange}
          />
          <TextField
            size="small"
            type="number"
            margin="dense"
            name="discount"
            value={discount}
            label="Discount"
            onChange={handleProductChange}
          />
          <Box>
            <Button
              size="medium"
              variant="outlined"
              endIcon={<AddIcon />}
              disabled={addDisabled}
              onClick={handleAddProduct}
            >
              Add
            </Button>
          </Box>
        </Box>
        {products.length > 0 && (
          <Box className="flex flex-wrap gap-x-2 gap-y-2 max-h-28 border-dotted border-sky-500 border-2 rounded-md px-1 py-2 mt-4">
            {products.map(({ productId, quantity }) => (
              <Box key={productId}>
                <Chip
                  color="primary"
                  variant="outlined"
                  onDelete={() => handleDeleteProduct(productId)}
                  label={`${productsByName[productId]}, ${quantity}`}
                  deleteIcon={<HighlightOffIcon />}
                />
              </Box>
            ))}
          </Box>
        )}
        <Box mt={2} className="flex justify-center">
          {!loading ? (
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="outlined"
              disabled={submitDisabled}
            >
              Create
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
  dataProducts: PropTypes.array.isRequired,
  productState: PropTypes.object.isRequired,
  handleAddProduct: PropTypes.func.isRequired,
  productsByName: PropTypes.object.isRequired,
  handleProductChange: PropTypes.func.isRequired,
  handleDeleteProduct: PropTypes.func.isRequired,
  statusOptions: PropTypes.arrayOf(PropTypes.object),
};

export default memo(Page);
