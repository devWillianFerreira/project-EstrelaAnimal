import { Check } from "lucide-react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

const PaymentSucess = () => {
  const { clearCard } = useContext(cartContext);
  useEffect(() => {
    const paymentSuccess = sessionStorage.getItem("paymentSuccess");
    if (!paymentSuccess) {
      navigate("/"); // redireciona se acessou direto
    } else {
      sessionStorage.removeItem("paymentSuccess"); // limpa para evitar reuso
    }
    clearCard();
  }, []);
  const navigate = useNavigate();
  return (
    <div className=" w-full conatiner p-4 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="p-2 bg-green-600 rounded-full ">
        <Check width={60} height={60} color="white" />
      </div>
      <h1 className="text-2xl font-bold text-green-600">Pagamento aprovado!</h1>
      <p className="mt-2">Seu pedido foi realizado com sucesso.</p>
      <button
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
        onClick={() => navigate("/", { replace: true })}
      >
        Voltar para loja
      </button>
    </div>
  );
};

export default PaymentSucess;
