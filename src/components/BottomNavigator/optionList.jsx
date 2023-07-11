import { APP_PATH } from "../../utils/path";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export const optionList = [
  {
    label: "Produts",
    icon: <CategoryIcon />,
    redirect: APP_PATH.products,
  },
  {
    label: "Order Items",
    icon: <ReceiptLongIcon />,
    redirect: APP_PATH.orderSales,
  },
];
