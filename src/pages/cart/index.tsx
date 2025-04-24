import { useContext } from "react";
import { cardContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { addItemCart, removeItemCart, cart, total } = useContext(cardContext);
  return (
    <div className="container mx-auto px-4 w-full flex justify-center flex-col items-center">
      <h1 className="font-bold text-blue-950 text-5xl mt-17">Carrinho</h1>
      {cart.length === 0 && (
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
      )}

      {cart && (
        <div className="grid grid-cols-[70%_30%] w-full gap-4 mt-10">
          <div className="bg-amber-100">oi</div>
          <div className="rounded-md bg-slate-50 p-3">
            <p className="font-medium">Pedidos</p>
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
              <div className="flex justify-between items-center mt-3">
                <p className="text-green-700 font-medium">Cupum: </p>
                <input
                  type="text"
                  className="border-1 rounded-md border-slate-500 p-1"
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
