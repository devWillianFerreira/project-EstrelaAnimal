import { LogInIcon, ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../hamburger";

import { useContext } from "react";
import { userContext } from "../../context/userContext";
import AccountMenu from "../accoutMenu";
import { cartContext } from "../../context/cartContext";

const Header = () => {
  const { user } = useContext(userContext);
  const { cartAmount } = useContext(cartContext);
  return (
    <div className="flex justify-between w-full h-15 bg-white items-center px-5 lg:px-14 py-10">
      <div className="text-blue-950 lg:hidden w-[50px]">
        <HamburgerMenu />
      </div>
      <Link to="/">
        <div className="flex items-center gap-4 ">
          <img src="logo.png" />
          <h1 className="font-bold lg:text-2xl">Estrela Animal</h1>
        </div>
      </Link>
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
      <div className="flex flex-row gap-5">
        <div className="bg-blue-950 px-2 py-2 rounded-md">
          {!user && (
            <Link
              to="/login"
              className="relative text-white flex flex-row gap-3"
            >
              <p>Login </p> <LogInIcon />
            </Link>
          )}
          {user && <AccountMenu />}
        </div>
        <div className="bg-blue-950 px-2 py-2 rounded-full">
          <Link to="/cart" className="relative text-white ">
            <ShoppingBagIcon />
            <span className="absolute text-white bg-amber-500 rounded-full px-2 py-0.2 flex justify-center items-center -top-6 -right-3">
              {cartAmount}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
