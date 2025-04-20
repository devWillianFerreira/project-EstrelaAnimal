import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { supabase } from "../../services/connectionSupabase";

const AccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  async function handleLogoutUser() {
    await supabase.auth.signOut();
  }

  return (
    <div
      className="relative text-sm"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Botão + Menu estão todos dentro desta div */}
      <div className="flex flex-row gap-1 bg-blue-950 text-white items-center cursor-pointer  rounded-md">
        <span className="text-md">
          Olá, <strong>Willian</strong>
        </span>
        <ChevronDown size={14} />
      </div>

      {/* Dropdown - renderizado no mesmo nível, SEM espaçamento visual */}
      {isOpen && (
        <div className="absolute  mt-0 left-1/2 -translate-x-1/2  w-48 bg-white text-black rounded-md shadow-lg p-3 z-50 flex flex-col transition-all duration-200">
          <ul className="space-y-2">
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              Meus Pedidos
            </li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              <button onClick={handleLogoutUser} className="text-red-500">
                Sair
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
