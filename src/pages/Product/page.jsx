import { memo } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { APP_PATH } from "../../utils/path";
import ProductsTable from "../../components/ProductsTable";

const Page = ({
  data,
  isLoading,
  handleRedirect,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <Box>
      <Box mt={2}>
        <Button
          fullWidth
          size="large"
          variant="contained"
          onClick={() => handleRedirect(APP_PATH.createProduct)}
        >
          Crear producto
        </Button>
      </Box>
      <Box mt={4}>
        <ProductsTable
          data={data}
          isLoading={isLoading}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      </Box>
    </Box>
  );
};

Page.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleRedirect: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default memo(Page);
