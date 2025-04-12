import { Button, Drawer, Flex, InputNumber, Typography } from "antd";

//@ts-ignore
import { useBasket } from "host/basket";

const CartDrawer = () => {
  const { state, dispatch } = useBasket();

  // Calculate the total price of all items in the basket
  const total = state.items.reduce(
    (sum: number, item: Product) => sum + item.price * item.quantity,
    0
  );

  return (
    <Drawer
      title="Cart"
      placement="right"
      open={state.isBasketOpen}
      onClose={() =>
        dispatch({ type: "SET_BASKET_OPEN", payload: !state.isBasketOpen })
      }
      width={400}
      footer={
        <Flex justify="space-between" align="center">
          <Typography.Text strong>Total</Typography.Text>
          <Typography.Text strong>{total.toFixed(2)} $</Typography.Text>
        </Flex>
      }
    >
      <Flex vertical gap="middle" style={{ flex: 1, overflowY: "auto" }}>
        {state.items.map((item: Product) => (
          <Flex key={item.id} justify="space-between" align="center">
            <Flex align="center" gap="small">
              <Flex vertical>
                <Typography.Text strong>{item.title}</Typography.Text>
                <Typography.Text type="secondary">
                  {item.price} $
                </Typography.Text>
              </Flex>
            </Flex>
            <Flex gap="small" align="center">
              <InputNumber
                min={1}
                value={item.quantity}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_QUANTITY",
                    payload: { id: item.id, quantity: value },
                  })
                }
              />
              <Button
                danger
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_BASKET",
                    payload: item.id,
                  })
                }
              >
                Delete
              </Button>
            </Flex>
          </Flex>
        ))}
        {state.items.length === 0 && (
          <Typography.Text type="secondary">Your cart is empty</Typography.Text>
        )}
      </Flex>
    </Drawer>
  );
};

export default CartDrawer;
