import BannerHome from "../../components/BannerHome";
import CardCategories from "../../components/cardCatetories";
import CardsBanner from "../../components/Cards";

const HomePage = () => {
  return (
    <div>
      <BannerHome />
      <div className="w-full  relative flex-col flex flex-wrap md:flex-row   lg:flex-row justify-center my-28 items-center gap-14">
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
      <div className="flex justify-center flex-col items-center bg-slate-100">
        <h1 className="text-4xl font-bold text-blue-950 my-5">Categorias</h1>
        <div className="flex my-5  lg:flex-row flex-wrap justify-center gap-5">
          <CardCategories image="cate.jpg" name="Cachorro" />
          <CardCategories image="cate-2.jpg" name="Gato" />
          <CardCategories image="cate-3.jpg" name="Peixe" />\
          <CardCategories image="cate-4.jpg" name="Passáro" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
