import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between w-full h-15 bg-white items-center px-14">
      <div>
        <h1 className="font-bold text-2xl">Estrela Animal</h1>
      </div>
      <div className="flex flex-row gap-5">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/products">Produtos</Link>
      </div>
      <div>
        <Link to="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Header;
