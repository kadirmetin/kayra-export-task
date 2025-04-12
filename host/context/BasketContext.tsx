import { createContext, useContext, useReducer } from "react";

//Diğer micro-frontendlerle iletişim kurmak için context kullanıyoruz.

const initialState: State = {
  items: [],
  isBasketOpen: false,
};

//Reducer tanımlaması
function basketReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TO_BASKET":
      if (state.items.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "SET_BASKET_OPEN":
      return {
        ...state,
        isBasketOpen: action.payload,
      };
    case "CLEAR_BASKET":
      return {
        ...state,
        items: [],
      };
    case "SYNC_STATE":
      return action.payload;
    default:
      return state;
  }
}

// Context oluşturma
const BasketContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
  removeFromBasket: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  setBasketOpen: (isOpen: boolean) => void;
}>({
  state: initialState,
  dispatch: () => null,
  removeFromBasket: () => null,
  updateQuantity: () => null,
  setBasketOpen: () => null,
});

// Context kullanımı
export const useBasket = () => useContext(BasketContext);

// Provider oluşturma
export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(basketReducer, initialState);

  const removeFromBasket = (id: number) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const setBasketOpen = (isOpen: boolean) => {
    dispatch({ type: "SET_BASKET_OPEN", payload: isOpen });
  };

  return (
    <BasketContext.Provider
      value={{
        state,
        dispatch,
        removeFromBasket,
        updateQuantity,
        setBasketOpen,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
