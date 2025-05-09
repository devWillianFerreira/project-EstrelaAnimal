import { Minus, Plus, Trash } from "lucide-react";

interface CardCartProps {
  name: string;
  image: string;
  price: number;
  amount: number;
  total: number;
  removeItemCart: () => void;
  addItemCart: () => void;
  deleteItemCart: () => void;
}

const CardCart = ({
  name,
  image,
  price,
  amount,
  total,
  removeItemCart,
  addItemCart,
  deleteItemCart,
}: CardCartProps) => {
  return (
    <div className="w-full flex flex-row items-center gap-4 rounded-md p-3 border-1 border-slate-200 mb-4">
      <img src={image} className="w-20 h-20 object-cover rounded" />
      <div className="flex flex-col flex-1 justify-between h-full">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="font-semibold text-blue-950 text-sm">{name}</h1>
            <p className="text-sm font-semibold">
              {price.toLocaleString("PT-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full">
            <button className="cursor-pointer p-1" onClick={removeItemCart}>
              <Minus size={14} />
            </button>
            <span className="text-sm">{amount}</span>
            <button className="cursor-pointer p-1" onClick={addItemCart}>
              <Plus size={14} />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <h1 className="font-bold">
            Total:{" "}
            {total.toLocaleString("PT-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h1>
          <button
            className="cursor-pointer bg-blue-950 p-2 justify-center flex rounded-md"
            onClick={deleteItemCart}
          >
            <Trash size={15} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
