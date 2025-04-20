import { z } from "zod";
import Input from "../../components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../../services/connectionSupabase";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("Insira um email válido"),
  password: z.string().nonempty("A senha é obrigatória"),
});

type FormData = z.infer<typeof schema>;

const Register = () => {
  const { handleInfoUser } = useContext(userContext);
  const navigate = useNavigate();

  async function onSubmit(data: FormData) {
    await supabase.auth
      .signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            display_name: data.name,
          },
        },
      })
      .then(({ data: { user }, error }) => {
        if (error) {
          console.log(error);
          return;
        }
        if (user) {
          handleInfoUser({
            name: data.name,
            email: data.email,
            id: user.id,
          });

          alert("Cadastro realiazdo com sucesso!");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  return (
    <div className="w-full p-4 min-h-screen flex flex-col justify-center items-center bg-[#f1f5f9] overflow-hidden">
      <div className="flex items-center gap-4 pb-7">
        <img src="logo.png" />
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Estrela Animal
        </h1>
      </div>
      <form
        className="w-full max-w-xl bg-white p-4 rounded-lg flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name="name"
          placeholder="Digite o seu nome completo"
          type="text"
          register={register}
          error={errors.name?.message}
        />
        <Input
          name="email"
          placeholder="Digite o seu email"
          type="text"
          register={register}
          error={errors.email?.message}
        />
        <Input
          name="password"
          placeholder="Digite a sua senha"
          type="password"
          register={register}
          error={errors.password?.message}
        />
        <button className="w-full bg-black text-white h-11 rounded-lg cursor-pointer">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
