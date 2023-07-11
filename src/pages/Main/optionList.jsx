import { APP_PATH } from "../../utils/path";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export const optionList = [
  {
    label: "Products",
    redirect: APP_PATH.products,
    marginTop: 0,
    icon: <CategoryIcon />,
  },
  {
    label: "Order Sales",
    redirect: APP_PATH.orderSales,
    marginTop: 2,
    icon: <ReceiptLongIcon />,
  },
];
