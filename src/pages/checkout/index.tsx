import { useContext, useEffect } from "react";
import { cartContext } from "../../context/cartContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/input";

const schema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(5, "Por favor, informe seu nome completo. Mínimo de X caracteres."),
  street: z.string().nonempty("A rua é obrigatória"),
  number: z.coerce.number().positive("Por Favor,  digite um número válido"),
  cep: z.coerce
    .number()
    .positive("Por favor, digite um cep válido")
    .min(2, "Digite cep válido"),
  city: z.string().nonempty("A cidade é obrigatória"),
  state: z.string().nonempty("O estado é obrigatório"),
  phone: z.coerce.number().positive("Por favor, difite um telefone válido"),
});

type formData = z.infer<typeof schema>;

const CheckoutPage = () => {
  const { cart, total } = useContext(cartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  useEffect(() => {
    console.log(total);
    console.log(cart);
  }, []);

  function onSubmit(data: formData) {}
  return (
    <div className="container mx-auto px-4 w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl mt-7 text-blue-950 md:text-5xl">
        Checkout
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] w-full mt-10 gap-4">
        <div className="w-full flex-col">
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <div>
              <p>Telefone</p>
              <Input
                name="phone"
                placeholder="(00)0000-0000"
                register={register}
                type="number"
                error={errors.phone?.message}
              />
            </div>
            <p>CEP</p>
            <Input
              name="cep"
              placeholder="00000-000"
              register={register}
              type="number"
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
                  type="number"
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
                <Input
                  name="state"
                  placeholder="80"
                  register={register}
                  type="text"
                  error={errors.state?.message}
                />
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
          <button className="w-full p-3 bg-orange-400 text-white font-medium mt-5 rounded-md cursor-pointer">
            Efetuar Pagamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
