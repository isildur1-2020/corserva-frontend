import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

export const getColumns = (
  handleEditClick,
  handleInfoClick,
  handleDeleteClick
) => {
  return [
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 130,
      cellClassName: "actions",
      getActions: ({ row }) => {
        return [
          <GridActionsCellItem
            label="Info"
            color="inherit"
            icon={<InfoIcon />}
            className="textPrimary"
            onClick={() => handleInfoClick(row)}
          />,
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
    { field: "status", headerName: "Status", width: 100 },
    {
      field: "trackingInfo",
      headerName: "Tracking",
      width: 80,
    },
    {
      field: "products",
      headerName: "Products",
      width: 80,
      valueFormatter: ({ value }) => {
        return value.length;
      },
    },
  ];
};
