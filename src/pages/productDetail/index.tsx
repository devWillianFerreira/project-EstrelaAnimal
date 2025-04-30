import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsProps } from "../products";
import {
  Clock9,
  CreditCard,
  DollarSign,
  Landmark,
  Package,
  WalletCards,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<productsProps>();
  useEffect(() => {
    fetch(`http://localhost:5000/produtos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const newProduct: productsProps = {
          id: data.id,
          name: data.nome,
          category: data.categoria,
          image: data.imagem,
          price: data.preco,
          type: data.tipo,
        };
        setProduct(newProduct);
      });
  }, []);
  return (
    <main className="w-full container max-w-7xl mx-auto px-4">
      <div className=" flex  flex-col lg:flex-row gap-7 w-full justify-center">
        <div className="flex-1 flex flex-row gap-3 ">
          <img
            src={product?.image}
            className="border-1  w-20 h-20 object-cover rounded-md p-2"
          />
          <img src={product?.image} className=" w-full rounded-md p-2" />
        </div>
        <div className="flex-1 w-full object-contain mx-6">
          <h1 className="text-blue-950 font-medim text-4xl mb-6">
            {product?.name}
          </h1>
          <strong className="text-2xl">
            {product?.price.toLocaleString("PT-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>

          <h1 className="mt-6 text-slate-600">Tipo: {product?.type}</h1>
          <h1 className="text-slate-600">Animal: {product?.category}</h1>
          <div className="border-1 border-slate-100 mt-4"></div>

          <div className="flex flex-col shadow-2xl  justify-center items-center rounded-md mt-6 ">
            <h1 className="text-blue-950 font-semibold mt-3">
              Formas de Pagamento
            </h1>
            <div className="flex flex-row gap-10 mt-6 mb-3">
              <div className="flex flex-col items-center">
                <p className="p-2 bg-black rounded-md  hover:scale-110 duration-300">
                  <DollarSign color="white" />
                </p>
                <p className="text-blue-950 font-semibold mt-2">Dinheiro</p>
              </div>

              <div className="flex flex-col items-center">
                <p className="p-2 bg-black rounded-md hover:scale-110 duration-300">
                  <CreditCard color="white" />
                </p>
                <p className="text-blue-950 font-semibold mt-2">Crédito</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="p-2 bg-black rounded-md hover:scale-110 duration-300">
                  <WalletCards color="white" />
                </p>
                <p className="text-blue-950 font-semibold mt-2">Boleto</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="p-2 bg-black rounded-md hover:scale-110 duration-300">
                  <Landmark color="white" />
                </p>
                <p className="text-blue-950 font-semibold mt-2">PIX</p>
              </div>
            </div>
          </div>

          <button className="bg-blue-950 text-white w-full h-10 font-semibold rounded-full mt-7 cursor-pointer">
            Comprar
          </button>

          <div className="flex mt-10 items-center gap-4">
            <Package size={35} />
            <h1 className="font-medium">Frete grátis para todo Brásil</h1>
          </div>
          <div className="flex mt-3 items-center gap-4">
            <Clock9 size={35} />
            <h1 className="font-medium">Entrega em: 3-7 dias úteis</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
