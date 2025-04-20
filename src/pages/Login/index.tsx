import { Link } from "react-router-dom";
import Input from "../../components/input";

const Login = () => {
  return (
    <div className="w-full p-4 min-h-screen flex flex-col justify-center items-center bg-[#f1f5f9] overflow-hidden">
      <div className="flex items-center gap-4 pb-7">
        <img src="logo.png" />
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Estrela Animal
        </h1>
      </div>
      <form className="w-full max-w-xl bg-white p-4 rounded-lg flex flex-col ">
        <Input name="email" placeholder="Digite o seu email" type="text" />
        <Input
          name="password"
          placeholder="Digite a sua senha"
          type="password"
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
