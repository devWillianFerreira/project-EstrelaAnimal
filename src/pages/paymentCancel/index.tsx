import { X } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentCancel = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const cancelled = sessionStorage.getItem("paymentCancelled");

    if (!cancelled) {
      navigate("/"); // redireciona se o acesso for direto
    } else {
      sessionStorage.removeItem("paymentCancelled"); // impede acesso posterior
    }
  }, []);

  return (
    <div className=" w-full p-4 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="p-2 bg-red-600 rounded-full ">
        <X width={60} height={60} color="white" />
      </div>
      <h1 className="text-2xl font-bold text-red-600">Pagamento cancelado!</h1>
      <p className="mt-2">
        Tivemos algum problema com o seu pagamento, tente novamente mais tarde!{" "}
      </p>
      <button
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
        onClick={() => navigate("/", { replace: true })}
      >
        Voltar para loja
      </button>
    </div>
  );
};

export default PaymentCancel;
