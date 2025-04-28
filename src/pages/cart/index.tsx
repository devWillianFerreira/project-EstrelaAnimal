import { useContext, useEffect, useState } from "react";
import { cardContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash } from "lucide-react";
import CardCart from "./components/cardCart";
import PriceSummary from "./components/PriceSummary";

const CartPage = () => {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { addItemCart, removeItemCart, deleteItemCart, cart, total } =
    useContext(cardContext);
  return (
    <div className="container mx-auto px-4 w-full flex justify-center flex-col items-center">
      <h1 className="font-bold text-3xl mt-7 text-blue-950 md:text-5xl ">
        Carrinho
      </h1>
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-semibold text-3xl text-blue-950 mt-8">
            Seu carrinho está vazio no momento.
          </h1>
          <Link
            to="/"
            className="bg-orange-400 px-9 py-3 text-white rounded-full font-bold mt-4"
          >
            Voltar
          </Link>
        </div>
      ) : (
        <div className="w-full ">
          {isMobile ? (
            <div className="w-full mt-10 grid grid-cols-1">
              {cart.map((item) => (
                <CardCart
                  name={item.name}
                  amount={item.amount}
                  image={item.image}
                  price={item.price}
                  total={item.total}
                  key={item.id}
                  removeItemCart={() => removeItemCart(item)}
                  addItemCart={() => addItemCart(item)}
                  deleteItemCart={() => deleteItemCart(item)}
                />
              ))}
              <PriceSummary />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[80%_20%] w-full gap-4 mt-10">
              <div className="flex flex-col">
                <div className=" grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] w-full px-8 font-bold border-b-3 border-slate-100 mb-5 py-2 gap-8 text-blue-950 ">
                  <h1>Pedidos</h1>
                  <h1>Preço</h1>
                  <h1>Quantidade</h1>
                  <h1>Total</h1>
                </div>
                {cart.map((item) => (
                  <div
                    className="grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] w-full px-8 items-center gap-8 mb-5"
                    key={item.id}
                  >
                    <div className="flex items-center gap-4 w-full max-w-50">
                      <div>
                        <img
                          src={item.image}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                      </div>
                      <h1 className="font-semibold truncate w-full">
                        {item.name}
                      </h1>
                    </div>
                    <h1 className="font-semibold">
                      {item.price.toLocaleString("PT-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </h1>
                    <div className="flex flex-row gap-5 bg-slate-100 rounded-full justify-center items-center w-22">
                      <button
                        className="cursor-pointer"
                        onClick={() => removeItemCart(item)}
                      >
                        <Minus size={12} color="black" />
                      </button>
                      <h1>{item.amount}</h1>
                      <button
                        className="cursor-pointer"
                        onClick={() => addItemCart(item)}
                      >
                        <Plus size={12} color="black" />
                      </button>
                    </div>
                    <h1 className="font-semibold">
                      {item.total.toLocaleString("PT-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </h1>
                    <button
                      className="cursor-pointer bg-blue-950 p-2 justify-center flex rounded-md w-10"
                      onClick={() => deleteItemCart(item)}
                    >
                      <Trash size={20} color="white" />
                    </button>
                  </div>
                ))}
              </div>

              <PriceSummary />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
