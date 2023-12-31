import EditIcon from "@mui/icons-material/Edit";
import { GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const getColumns = (handleEditClick, handleDeleteClick) => {
  return [
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ row }) => {
        return [
          <GridActionsCellItem
            label="Edit"
            color="inherit"
            icon={<EditIcon />}
            className="textPrimary"
            onClick={() => handleEditClick(row)}
          />,
          <GridActionsCellItem
            label="Delete"
            color="inherit"
            icon={<DeleteIcon />}
            onClick={() => handleDeleteClick(row.id)}
          />,
        ];
      },
    },
    { field: "id", headerName: "id", width: 20 },
    { field: "name", headerName: "Name", width: 130 },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
    },
    { field: "stock", headerName: "Stock", width: 60 },
  ];
};
