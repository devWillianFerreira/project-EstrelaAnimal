import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/input";
import MaskedInput from "./components/inputMask";
import { STATE_OPTIONS } from "../../data/stateOptions";
import { userContext } from "../../context/userContext";
import { supabase } from "../../services/connectionSupabase";

const schema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(5, "Por favor, informe seu nome completo. Mínimo de X caracteres."),
  cpf: z.string().nonempty("O CPF é orbigatório"),
  street: z.string().nonempty("A rua é obrigatória"),
  number: z.string().nonempty("O número da rua é obrigatório"),
  cep: z.string().nonempty("O cep é obritóriog"),
  city: z.string().nonempty("A cidade é obrigatória"),
  state: z.string().nonempty("O estado é obrigatório"),
  phone: z.string().nonempty("O número de telefone é obrigatório"),
});

type formData = z.infer<typeof schema>;

const CheckoutPage = () => {
  const { cart, total } = useContext(cartContext);
  const { user } = useContext(userContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    try {
      const session = await supabase.auth.getSession();
      const token = session.data.session?.access_token;

      const response = await fetch(
        "http://127.0.0.1:54321/functions/v1/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            cart,
            userId: user?.id,
            checkoutInfo: {
              cpf: data.cpf,
              name: data.name,
              phone: data.phone,
              cep: data.cep,
              street: data.street,
              number: data.number,
              city: data.city,
              state: data.state,
              user: user?.id,
            },
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text(); // evita .json() se não for JSON
        console.error("Erro do servidor:", errorText);
        alert("Erro no servidor: " + errorText);
        return;
      }

      const res = await response.json();

      if (res.url) {
        sessionStorage.setItem("paymentSuccess", "true");
        sessionStorage.setItem("paymentCancelled", "true");
        window.location.href = res.url;
      } else {
        alert("Erro ao criar sessão de pagamento");
      }
    } catch (error) {
      console.error("Erro ao enviar pagamento:", error);
    }
    reset();
  };

  return (
    <div className="container mx-auto px-4 w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl mt-7 text-blue-950 md:text-5xl">
        Checkout
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] w-full mt-10 gap-4">
        <div className="w-full flex-col">
          <form onSubmit={handleSubmit(onSubmit)} id="forms">
            <div className="flex flex-row gap-4">
              <div className="w-full">
                <p>Nome Completo </p>
                <Input
                  name="name"
                  placeholder="Digite o seu nome Completo "
                  register={register}
                  type="text"
                  error={errors.name?.message}
                />
              </div>
              <div className="w-full">
                <p>CPF</p>
                <MaskedInput
                  mask="___.___.___ - __"
                  name="cpf"
                  placeholder="999.999.999 - 99"
                  register={register}
                  replacement={{ _: /\d/ }}
                  type="text"
                  error={errors.cpf?.message}
                />
              </div>
            </div>
            <div>
              <p>Telefone</p>
              <MaskedInput
                mask="(__) _____ - ____"
                name="phone"
                type="text"
                register={register}
                placeholder="(11) 9 9999-9999"
                replacement={{ _: /\d/ }}
                error={errors.phone?.message}
              />
            </div>
            <p>CEP</p>
            <MaskedInput
              mask="_____ - ___"
              name="cep"
              type="text"
              register={register}
              placeholder="00000 - 000"
              replacement={{ _: /\d/ }}
              error={errors.cep?.message}
            />
            <div className="flex flex-row w-full gap-4">
              <div className="w-full">
                <p>Rua</p>
                <Input
                  name="street"
                  placeholder="Rua seu Jorge"
                  register={register}
                  type="text"
                  error={errors.street?.message}
                />
              </div>
              <div className="w-full">
                <p>Número</p>
                <Input
                  name="number"
                  placeholder="80"
                  register={register}
                  type="text"
                  error={errors.number?.message}
                />
              </div>
            </div>
            <div className="flex flex-row w-full gap-4">
              <div className="w-full">
                <p>Cidade</p>
                <Input
                  name="city"
                  placeholder="São Paulo"
                  register={register}
                  type="text"
                  error={errors.city?.message}
                />
              </div>
              <div className="w-full">
                <p>Estado</p>
                <select
                  className="w-full h-11 rounded-xl px-2 border-1  border-gray-200 mb-3"
                  {...register("state")}
                >
                  {STATE_OPTIONS.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="border-1 border-blue-950 rounded-md p-4 w-full">
          <h1 className="font-semibold text-3xl mt-3 text-blue-950">Resumo</h1>
          {cart.map((product) => (
            <div
              className="flex flex-row items-center gap-4 mt-5"
              key={product.id}
            >
              <img src={product.image} className="w-15 h-15 object-contain " />
              <div className="flex flew-row justify-between w-full items-center ">
                <div className="flex flex-col">
                  <h1 className="text-blue-950 font-semibold">
                    {product.name}
                  </h1>
                  <h1 className="text-blue-950 font-semibold">
                    {" "}
                    Quantidade: {product.amount}
                  </h1>
                </div>
                <h1 className="text-blue-950 font-semibold">
                  {product.total.toLocaleString("PT-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h1>
              </div>
            </div>
          ))}
          <div className="border-1 border-slate-200 w-full mt-5"></div>
          <div className="flex justify-between mt-5">
            <h1 className="font-bold  text-blue-950">SubTotal: </h1>
            <h1 className="text-blue-950 font-semibold">{total}</h1>
          </div>
          <div className="border-1 border-slate-200 w-full mt-5"></div>
          <div className="flex justify-between mt-5">
            <h1 className="font-bold  text-blue-950">Envio: </h1>
            <h1 className="text-green-700  ">Grátis</h1>
          </div>
          <div className="border-1 border-slate-200 w-full mt-5"></div>
          <div className="flex justify-between mt-5  ">
            <h1 className="font-bold text-blue-950">Total: </h1>
            <h1 className="font-bold text-blue-950 text-xl">{total}</h1>
          </div>
          <button
            className="w-full p-3 bg-orange-400 text-white font-medium mt-5 rounded-md cursor-pointer"
            form="forms"
            type="submit"
          >
            Efetuar Pagamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
