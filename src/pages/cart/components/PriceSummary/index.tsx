import { Link } from "react-router-dom";

interface PriceSummaryProps {
  total: string;
}
const PriceSummary = ({ total }: PriceSummaryProps) => {
  return (
    <div className=" rounded-md p-3 shadow-2xl hover:shadow-1xl transition-shadow duration-300 mt-5">
      <p className="font-bold text-2xl mt-3">Pedidos</p>
      <div>
        <div className="border-2 border-slate-100 w-full mt-5"></div>
        <div className="flex justify-between items-center mt-5">
          <p className="font-medium"> SubTotal: </p>
          <p className="font-medium">{total}</p>
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
          <p className="font-bold ">{total}</p>
        </div>
      </div>
      <Link to="/">
        <h1 className="p-4 bg-blue-950 text-white rounded-md mt-6 font-bold flex justify-center">
          CHECKOUT
        </h1>
      </Link>
    </div>
  );
};

export default PriceSummary;
