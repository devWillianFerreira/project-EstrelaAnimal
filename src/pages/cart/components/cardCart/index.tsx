import { Minus, Plus, Trash } from "lucide-react";

const CardCart = () => {
  return (
    <div className="w-full flex flex-row items-center gap-4 rounded-md p-3 shadow-2xl hover:shadow-1xl transition-shadow duration-300">
      <img
        src="https://www.petz.com.br/blog/wp-content/uploads/2019/11/alimentacao-natural-cachorro.jpg"
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex flex-col flex-1 justify-between h-full">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="font-semibold text-blue-950 text-sm">
              Alimentos de cachorro
            </h1>
            <p className="text-sm font-semibold">R$ 30,00</p>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full">
            <button className="cursor-pointer p-1">
              <Minus size={14} />
            </button>
            <span className="text-sm">1</span>
            <button className="cursor-pointer p-1">
              <Plus size={14} />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <h1 className="font-bold">Total: 30,00</h1>
          <button className="cursor-pointer bg-blue-950 p-2 justify-center flex rounded-md">
            <Trash size={15} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
