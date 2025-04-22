import { useEffect, useState } from "react";
import CategoryProducts from "./components/categoryProducts/inde";
import { ShoppingCart } from "lucide-react";
interface productsProps {
  id: number;
  category: string;
  name: string;
  type: string;
  image: string;
  price: number;
}
const ProductsPage = () => {
  const [products, setProducts] = useState<productsProps[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/produtos")
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
    <div className="px-45">
      <h1 className="font-bold text-5xl text-center mt-8 text-blue-950">
        Produtos
      </h1>
      <div className="flex fle-row gap-20 mt-8 justify-center">
        <button className="cursor-pointer">
          <CategoryProducts image="cate.jpg" text="Cachorro" />
        </button>
        <button className="cursor-pointer">
          <CategoryProducts image="cate-2.jpg" text="Gato" />
        </button>
        <button className="cursor-pointer">
          <CategoryProducts image="cate-3.jpg" text="Peixe" />
        </button>
        <button className="cursor-pointer">
          <CategoryProducts image="cate-4.jpg" text="Passáro" />
        </button>
      </div>
      <div className="grid grid-cols-1 mt-14 gap-6 md:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <section
            key={product.id}
            className=" w-full  mx-auto  rounded-lg p-6 shadow-2xl hover:shadow-1xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <p className="font-medium text-blue-950 mt-1 mb-3">
              {product.name}
            </p>
            <div className="flex gap-3 items-center justify-between">
              <strong className="text-blue-950">
                {product.price.toLocaleString("PT-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
              <span className="bg-blue-950 px-10 py-2 rounded-md cursor-pointer">
                <ShoppingCart color="#fff" />
              </span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
