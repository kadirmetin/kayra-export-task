import { store } from "@/store";
import { Provider } from "react-redux";
import ProductsList from "./ProductsList";

const RemoteComponent = () => {
  return (
    <Provider store={store}>
      <ProductsList />
    </Provider>
  );
};

export default RemoteComponent;
