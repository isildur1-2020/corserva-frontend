import { memo } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { APP_PATH } from "../../utils/path";
import OrderSalesTable from "../../components/OrderSalesTable";

const Page = ({
  data,
  isLoading,
  handleRedirect,
  handleEditClick,
  handleInfoClick,
  handleDeleteClick,
}) => {
  return (
    <Box>
      <Box mt={2}>
        <Button
          fullWidth
          size="large"
          variant="contained"
          onClick={() => handleRedirect(APP_PATH.createOrderSale)}
        >
          Create Order Sale
        </Button>
      </Box>
      <Box mt={4}>
        <OrderSalesTable
          data={data}
          isLoading={isLoading}
          handleInfoClick={handleInfoClick}
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
  handleInfoClick: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default memo(Page);
