import { memo } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { getColumns } from "./columns";
import { DataGrid } from "@mui/x-data-grid";

const ProductsTable = ({
  data,
  isLoading,
  handleEditClick,
  handleInfoClick,
  handleDeleteClick,
}) => {
  const columns = getColumns(
    handleEditClick,
    handleInfoClick,
    handleDeleteClick
  );
  return (
    <Box>
      <DataGrid
        rows={data}
        loading={isLoading}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 4 },
          },
        }}
      />
    </Box>
  );
};

ProductsTable.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default memo(ProductsTable);
