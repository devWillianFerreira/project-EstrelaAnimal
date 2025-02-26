import { Menu, ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between w-full h-15 bg-white items-center px-5 lg:px-14 py-10">
      <div className="text-blue-950 lg:hidden">
        <Menu />
      </div>
      <div className="flex items-center gap-4 ">
        <img src="logo.png" />
        <h1 className="font-bold lg:text-2xl">Estrela Animal</h1>
      </div>
      <div className=" hidden    lg:flex flex-row gap-9 text-blue-950">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/products">
          <h1>Produtos</h1>
        </Link>
        <Link to="/about">
          <h1>Sobre Nós</h1>
        </Link>
      </div>
      <div className="bg-blue-950 px-2 py-2 rounded-full">
        <Link to="/cart" className="relative text-white ">
          <ShoppingBagIcon />
          <span className="absolute text-white bg-amber-500 rounded-full px-2 py-0.2 flex justify-center items-center -top-6 -right-3">
            0
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
