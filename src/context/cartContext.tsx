import { createContext, ReactNode, useState } from "react";
import { productsProps } from "../pages/products";

interface cardProviderProps {
  children: ReactNode;
}

interface cardContextData {
  cart: cartProps[];
  total: string;
  cartAmount: number;
  addItemCart: (newProduct: productsProps) => void;
  removeItemCart: (newPorduct: cartProps) => void;
  deleteItemCart: (newPorduct: cartProps) => void;
}

export interface cartProps {
  id: number;
  category: string;
  name: string;
  type: string;
  image: string;
  price: number;
  amount: number;
  total: number;
}

export const cardContext = createContext({} as cardContextData);

function CardProvider({ children }: cardProviderProps) {
  const [cart, setCart] = useState<cartProps[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [total, setTotal] = useState("");

  function addItemCart(newProduct: productsProps) {
    const indexItem = cart.findIndex((product) => product.id === newProduct.id);
    if (indexItem !== -1) {
      const updateCart = cart.map((item, index) => {
        if (index === indexItem) {
          return {
            ...item,
            amount: item.amount + 1,
            total: (item.amount + 1) * item.price,
          };
        }
        return item;
      });
      setCart(updateCart);
      return;
    }
    const data = {
      ...newProduct,
      amount: 1,
      total: newProduct.price,
    };
    setCart((product) => [...product, data]);
  }

  function removeItemCart(newProduct: cartProps) {
    const indexItem = cart.findIndex((product) => product.id === newProduct.id);
    if (indexItem !== -1 && cart[indexItem].amount > 1) {
      const updateCart = cart.map((item, index) => {
        if (index === indexItem) {
          return {
            ...item,
            amount: item.amount - 1,
            total: item.total - item.price,
          };
        }
        return item;
      });
      setCart(updateCart);
      return;
    }
    const removeItem = cart.filter((item) => item.id !== newProduct.id);
    setCart(removeItem);
  }

  function deleteItemCart(newProduct: cartProps) {
    const deleteItem = cart.filter((item) => item.id !== newProduct.id);
    setCart(deleteItem);
  }

  return (
    <cardContext.Provider
      value={{
        cart,
        total,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        deleteItemCart,
      }}
    >
      {children}
    </cardContext.Provider>
  );
}

export default CardProvider;
