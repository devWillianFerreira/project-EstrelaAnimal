import CardCategories from "./components/cardCatetories";
import CardsBanner from "./components/Cards";
import BannerHome from "./components/bannerHome";
import TrendingProducts from "./components/TrendingProducts";
import { Link } from "react-router-dom";
import BannerHome2 from "./components/bannerHome2";
import { useEffect, useState } from "react";
import { productsProps } from "../products";

const HomePage = () => {
  const [products, setProducts] = useState<productsProps[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/produtos?_limit=6")
      .then((res) => res.json())
      .then((data) => {
        const newProduct: productsProps[] = data.map((item: any) => ({
          id: item.id,
          category: item.categoria,
          name: item.nome,
          image: item.imagem,
          price: item.preco,
          type: item.tipo,
        }));
        setProducts(newProduct);
      });
  }, []);
  return (
    <div className="overflow-hidden">
      <BannerHome />

      <div className=" container mx-auto px-4 w-full  relative justify-center  flex-col flex md:flex-row flex-wrap gap-4   lg:justify-between  my-28 items-center">
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
      <div className="container mx-auto px-4 flex flex-col w-full">
        <div className="w-full  text-blue-950 flex flex-col  lg:justify-between items-center">
          <h1 className="text-2xl font-bold">Produtos em Altas</h1>
          <Link to="/products">
            <h2 className="font-semibold underline">Ver todos</h2>
          </Link>
        </div>
        <div className="w-full flex flex-col mt-5 items-center lg:flex-row justify-between mb-10 gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1 ">
            {products.map((product) => (
              <Link to={`/ProductDetail/${product.id}`}>
                <TrendingProducts
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  key={product.id}
                />
              </Link>
            ))}
          </div>
          <div className=" hidden lg:block  ">
            <img
              src="banner-8.jpg"
              alt="Produtos em Altas"
              className="rounded-md w-full relative "
            />
          </div>
        </div>
      </div>
      <BannerHome2 />
    </div>
  );
};

export default HomePage;
