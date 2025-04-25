import { useContext, useEffect, useState } from "react";
import { cardContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash } from "lucide-react";
import CardCart from "./components/cardCart";

const CartPage = () => {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 520) {
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
  const [isMobile, setIsMobile] = useState(false);
  const { addItemCart, removeItemCart, cart, total } = useContext(cardContext);
  return (
    <div className="container mx-auto px-4 w-full flex justify-center flex-col items-center">
      <h1 className="font-bold text-blue-950 text-5xl mt-17">Carrinho</h1>
      {/* {cart.length === 0 && (
        <div className="flex flex-col justify-center items-center">
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
      )} */}
      <div className="w-full mt-10 md:hidden">
        <CardCart />
      </div>

      {cart && (
        <div className="grid md:grid-cols-1  lg:grid-cols-[80%_20%] w-full gap-4 mt-10">
          <div className="flex flex-col">
            <div className=" hidden md:grid grid-cols-5 w-full px-8 font-bold border-b-3 border-slate-100 mb-5 py-2 gap-40 text-blue-950 ">
              <h1>Pedidos</h1>
              <h1>Preço</h1>
              <h1>Quantidade</h1>
              <h1>Total</h1>
            </div>
            <div className="hidden md:grid grid-cols-5 w-full px-8  items-center gap-40">
              <div className="flex flex-row items-center w-full gap-4">
                <img
                  src="https://www.petz.com.br/blog/wp-content/uploads/2019/11/alimentacao-natural-cachorro.jpg"
                  className="w-full max-w-20 object-cover rounded"
                />
                <h1 className="font-semibold">Alimento de cachorroccccc</h1>
              </div>
              <h1 className="font-semibold">R$ 40,00</h1>
              <div className="flex flex-row gap-5 bg-slate-100 rounded-full justify-center items-center w-22">
                <button className="cursor-pointer">
                  <Minus size={12} color="black" />
                </button>
                <h1>1</h1>
                <button className="cursor-pointer">
                  <Plus size={12} color="black" />
                </button>
              </div>
              <h1 className="font-semibold">R$ 40,00</h1>
              <button className="cursor-pointer bg-blue-950 p-2 justify-center flex rounded-md w-10">
                <Trash size={20} color="white" />
              </button>
            </div>
          </div>

          <div className=" rounded-md p-3 shadow-2xl hover:shadow-1xl transition-shadow duration-300">
            <p className="font-bold text-2xl mt-3">Pedidos</p>
            <div>
              <div className="border-2 border-slate-100 w-full mt-5"></div>
              <div className="flex justify-between items-center mt-5">
                <p className="font-medium"> SubTotal: </p>
                <p className="font-medium">R$ 59.00</p>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="font-medium">Frete: </p>
                <p className="text-green-700 font-medium">Grátis</p>
              </div>
              <div className="flex justify-between items-center mt-3 gap-3">
                <p className="text-green-700 font-medium">Cupum: </p>
                <input
                  type="text"
                  className="border-1 rounded-md border-slate-500 p-1 w-full"
                />
              </div>
              <div className="border-2 border-slate-100 w-full mt-5"></div>
              <div className="flex justify-between">
                <p className="font-bold">Total: </p>
                <p className="font-bold ">R$ 59,00</p>
              </div>
            </div>
            <Link to="/">
              <h1 className="p-4 bg-blue-950 text-white rounded-md mt-6 font-bold flex justify-center">
                CHECKOUT
              </h1>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
