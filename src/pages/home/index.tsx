import CardCategories from "./components/cardCatetories";
import CardsBanner from "./components/Cards";
import BannerHome from "./components/bannerHome";
import TrendingProducts from "./components/TrendingProducts";
import { Link } from "react-router-dom";
import BannerHome2 from "./components/bannerHome2";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <BannerHome />

      <div className="w-full  relative justify-center  flex-col flex flex-wrap md:flex-row   lg:justify-between flex-row  my-28 items-center gap-14 px-45">
        <CardsBanner
          image="bannerDog.jpg"
          title="Compre um e ganhe outro grátis"
          subTitle="Apenas na primeira compra"
        />
        <CardsBanner
          image="bannerNutrition.jpg"
          title="Foco na nutrição correta"
          subTitle="Ração seca premium para animais de estimação"
        />
        <CardsBanner
          image="bannerAve.jpg"
          title="Economize com esses itens mensais"
          subTitle="Até 15% em suprimentos."
        />
        <CardsBanner
          image="bannerJoy.jpg"
          title="Alegria acessível para animais de estimação"
          subTitle="Obtenha todos os melhores brinquedos e camas para animais de estimação."
        />
      </div>
      <div className="flex justify-center flex-col items-center bg-slate-100 mb-13">
        <h1 className="text-4xl font-bold text-blue-950 my-5">Categorias</h1>
        <div className="flex my-10  lg:flex-row flex-wrap justify-center gap-5">
          <CardCategories image="cate.jpg" name="Cachorro" />
          <CardCategories image="cate-2.jpg" name="Gato" />
          <CardCategories image="cate-3.jpg" name="Peixe" />
          <CardCategories image="cate-4.jpg" name="Passáro" />
        </div>
      </div>
      <div className="lg:flex flex-col lg:px-45">
        <div className="w-full  text-blue-950 flex flex-col  lg:justify-between items-center">
          <h1 className="text-2xl font-bold">Produtos em Altas</h1>
          <Link to="/products">
            <h2 className="font-semibold ">Ver todos</h2>
          </Link>
        </div>
        <TrendingProducts />
      </div>
      <BannerHome2 />
    </div>
  );
};

export default HomePage;
