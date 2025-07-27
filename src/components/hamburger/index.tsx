import Hamburger from "hamburger-react";
import {
  House,
  LogInIcon,
  Package,
  ShoppingBag,
  Store,
  User,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { userContext } from "../../context/userContext";
import { supabase } from "../../services/connectionSupabase";

const HamburgerMenu = () => {
  const { user } = useContext(userContext);
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  async function handleLogoutUser() {
    await supabase.auth.signOut();
  }
  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} size={10} />
      {isOpen && (
        <div className="absolute w-screen  top-0 left-0 p-4 text-blank bg-white z-10">
          <header>
            <Hamburger toggled={isOpen} toggle={setOpen} size={10} />
          </header>
          <main className="p-4">
            {user && (
              <div className="flex flex-row gap-1 bg-blue-950 text-white items-center cursor-pointer rounded-md w-32 h-10 p-1">
                <User />
                <span className="text-md">
                  Olá, <strong>Willian</strong>
                </span>
              </div>
            )}
            {!user && (
              <Link to="login">
                <div className="flex flex-row gap-1 bg-blue-950 text-white items-center cursor-pointer rounded-md w-25 h-10 p-1">
                  <span>Login</span>
                  <LogInIcon />
                </div>
              </Link>
            )}

            {user && (
              <button onClick={handleLogoutUser} className="text-red-500 ">
                Sair
              </button>
            )}
            <h1>
              Ainda não tem conta?{" "}
              <Link to="/register">
                <strong>Cadastre-se</strong>
              </Link>
            </h1>
            <div className="grid grid-cols-2 gap-2 flex-1 mt-5">
              <Link to="/">
                <div className="bg-slate-100  rounded-lg flex flex-col w-full h-25 justify-between p-2">
                  <House />
                  Home
                </div>
              </Link>
              <Link to="products">
                <div className="bg-slate-100  rounded-lg flex flex-col w-full h-25 justify-between p-2">
                  <Package />
                  Produtos
                </div>
              </Link>
              <Link to="about">
                <div className="bg-slate-100  rounded-lg flex flex-col w-full h-25 justify-between p-2">
                  <Store />
                  Sobre Nós
                </div>
              </Link>
              <Link to="/orders">
                <div className="bg-slate-100  rounded-lg flex flex-col w-full h-25 justify-between p-2">
                  <ShoppingBag />
                  Meus Pedidos
                </div>
              </Link>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
