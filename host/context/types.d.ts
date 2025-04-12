type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
};

type State = {
  items: Product[];
};

type Action =
  | { type: "ADD_TO_BASKET"; payload: Product }
  | { type: "REMOVE_FROM_BASKET"; payload: number }
  | { type: "SYNC_STATE"; payload: State }
  | { type: "CLEAR_BASKET" };
