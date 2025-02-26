import BannerHome from "../../components/BannerHome";
import CardsBanner from "../../components/Cards";

const HomePage = () => {
  return (
    <div>
      <BannerHome />
      <div className="w-full  relative flex-col  md:px-5 flex lg:flex-row justify-center my-28 items-center gap-14">
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
    </div>
  );
};

export default HomePage;
