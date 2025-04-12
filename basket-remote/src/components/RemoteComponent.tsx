//@ts-ignore
import { useBasket } from "host/basket";

const RemoteComponent = () => {
  const { state } = useBasket();

  return (
    <div>
      <h1>Remote Component</h1>
      <p>Basket Count: {state.items.length}</p>
    </div>
  );
};

export default RemoteComponent;
