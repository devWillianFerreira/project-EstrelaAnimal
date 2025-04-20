import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../../services/connectionSupabase";
import { useEffect } from "react";

const schema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("Insira um email válido"),
  password: z.string().nonempty("A senha é obrigatória"),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    async function handleLogoutUser() {
      await supabase.auth.signOut();
    }
    handleLogoutUser();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  async function onSubmit(data: FormData) {
    await supabase.auth
      .signInWithPassword({
        email: data.email,
        password: data.password,
      })
      .then(({ data: { user }, error }) => {
        if (error) {
          alert(
            "Falha na autenticação. Verifique suas credenciais e tente novamente."
          );
        }
        if (user) {
          navigate("/", { replace: true });
        }
      })
      .catch(() => {
        alert("Error inesperado. Tente novamente!");
      });
  }
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
      <h1 className="pt-3">
        Ainda não tem conta?{" "}
        <Link to="/register" className="font-bold">
          Cadastre-se
        </Link>
      </h1>
    </div>
  );
};

export default Login;
