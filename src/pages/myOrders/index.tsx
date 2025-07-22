import { useContext, useEffect, useState } from "react";
import { supabase } from "../../services/connectionSupabase";
import { userContext } from "../../context/userContext";
import { Check, House, Package, Truck } from "lucide-react";

const MyOrders = () => {
  interface myOrdersProps {
    id: string;
    amount: number;
    price: number;
    image: string;
    name: string;
    total: number;
  }
  const [myOrders, setMyOrders] = useState<myOrdersProps[]>([]);
  const { user } = useContext(userContext);
  let userId;
  useEffect(() => {
    async function loadOrders() {
      userId = user?.id;
      if (!userId) {
        const { data } = await supabase.auth.getUser();
        userId = data.user?.id;
      }

      if (userId) {
        const { data } = await supabase
          .from("Orders")
          .select("*")
          .eq("userId", userId);

        const newOrders: myOrdersProps[] =
          data?.map((order) => ({
            id: order.id,
            amount: order.amount,
            price: order.price,
            image: order.image,
            name: order.name,
            total: order.total,
          })) || [];
        setMyOrders(newOrders);
      }
    }
    loadOrders();
  }, []);
  return (
    <div className="container mx-auto px-4 w-full">
      <h1 className="font-bold text-5xl text-center mt-8 mb-10 text-blue-950">
        Meus Pedidos
      </h1>
      {!userId && myOrders.length == 0 && (
        <p className="text-center text-xl mt-5 text-blue-950">Carregando...</p>
      )}
      {myOrders.map((product) => (
        <div
          className="w-full max-w-5xl mx-auto  mb-5 border-1 border-blue-950 rounded-md p-1 px-5"
          key={product.id}
        >
          <div className="w-full flex flex-col md:justify-between  ">
            <h1 className="font-semibold text-blue-950">
              Pedido: {product.id}
            </h1>
            <h1 className="font-bold">
              Total:{" "}
              {product.total.toLocaleString("PT-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h1>
          </div>

          <h1 className="text-xl text-blue-950 mt-6">
            Status da entrega:{" "}
            <strong className="text-green-500">Pagamento Aprovado</strong>
          </h1>

          <div className="w-full  flex flex-col justify-center items-center gap-5 mt-6 md:flex-row">
            <div className="flex flex-col items-center">
              <Check
                className=" p-1 border bg-blue-950 rounded-full w-15 "
                color="white"
              />
              <p className="text-sm">Recebemos o seu pedido!</p>
              <div className="bg-blue-950 h-0.5 w-20 mt-3"></div>
            </div>
            <div className="flex flex-col items-center">
              <Check
                className=" p-1 border bg-blue-950 rounded-full w-15 "
                color="white"
              />
              <p className="text-sm">Pagamento Aprovado</p>
              <div className="bg-blue-950 h-0.5  mt-3 w-20"></div>
            </div>
            <div className="flex flex-col items-center">
              <Package className=" p-1 border  rounded-full w-15 text-blue-950" />
              <p className="text-sm">Em preparação</p>
              <div className="bg-blue-950 h-0.5 w-20 mt-3"></div>
            </div>
            <div className="flex flex-col items-center">
              <Truck className=" p-1 border  rounded-full w-15 text-blue-950" />
              <p className="text-sm">Em transporte</p>
              <div className="bg-blue-950 h-0.5 w-20  mt-3"></div>
            </div>
            <div className="flex flex-col items-center">
              <House className=" p-1 border  rounded-full w-15 text-blue-950" />
              <p className="text-sm">Entrega concluída</p>
              <div className="bg-blue-950 h-0.5 w-20 mt-3"></div>
            </div>
          </div>
          <h1 className="mt-6 font-semibold">Produto: </h1>
          <div className="w-full flex flex-row items-center gap-4">
            <img
              src={product.image}
              className="w-20 border p-2  h-20   object-cover rounded-lg"
            />
            <div className="w-full flex flex-col ">
              <h1 className="font-semibold ">{product.name} </h1>
              <h1 className="font-semibold">
                Preço:{" "}
                {product.price.toLocaleString("PT-BR", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
                - {product.amount} Unidade(s)
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
