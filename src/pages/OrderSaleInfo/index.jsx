import Box from "@mui/material/Box";
import { useContext, memo } from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useSetTitle } from "../../hooks/useSetTitle";
import { MainContext } from "../../context/MainContext";

const OrderSaleInfo = () => {
  useSetTitle("Order Sale Info");
  const { state } = useContext(MainContext);
  const { currentOrderSale } = state;
  const { id, status, trackingInfo, products } = currentOrderSale;
  console.log(state);
  return (
    <Box mt={4} ml={2}>
      <Box>
        <Typography variant="h6" component="p">
          Id: {id}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="p">
          Status: {status}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="p">
          Tracking info: {trackingInfo}
        </Typography>
      </Box>
      {products?.length > 0 && (
        <Box ml={3} mt={2} className="overflow-auto max-h-72">
          {products?.map((product) => {
            const { name, price, orderProduct } = product;
            const { discount, quantity } = orderProduct;
            return (
              <>
                <Divider />
                <Typography variant="h6" component="p">
                  {name}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  Price: {price}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  Quantity: {quantity}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  Discount: {discount}
                </Typography>
              </>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default memo(OrderSaleInfo);
