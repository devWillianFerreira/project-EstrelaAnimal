import { useContext, useEffect, useState } from "react";
import CategoryProducts from "./components/categoryProducts";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import { cardContext } from "../../context/cartContext";
export interface productsProps {
  id: number;
  category: string;
  name: string;
  type: string;
  image: string;
  price: number;
}
const ProductsPage = () => {
  const [products, setProducts] = useState<productsProps[]>([]);
  const [allProducts, setAllProducts] = useState<productsProps[]>([]);
  const [category, setCategory] = useState("Todos");

  const { addItemCart } = useContext(cardContext);
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
        setAllProducts(newProduct);
      });
  }, []);

  function handleFilterProduct(typeProduct: string) {
    setCategory(typeProduct);
    const newProducts = allProducts.filter(
      (product) =>
        product.category.toLocaleLowerCase() === typeProduct.toLocaleLowerCase()
    );
    setProducts(newProducts);
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="font-bold text-5xl text-center mt-8 text-blue-950">
        Produtos
      </h1>
      <div className="flex fle-row mt-8 justify-center ">
        <CategoryProducts
          image="cate.jpg"
          text="Cachorro"
          handleFilterProducts={() => handleFilterProduct("Cachorro")}
          isActive={category.toLocaleLowerCase() === "cachorro"}
        />

        <CategoryProducts
          image="cate-2.jpg"
          text="Gato"
          handleFilterProducts={() => handleFilterProduct("gato")}
          isActive={category.toLocaleLowerCase() === "gato"}
        />

        <CategoryProducts
          image="cate-3.jpg"
          text="Peixe"
          handleFilterProducts={() => handleFilterProduct("peixe")}
          isActive={category.toLocaleLowerCase() === "peixe"}
        />

        <CategoryProducts
          image="cate-4.jpg"
          text="Passáro"
          handleFilterProducts={() => handleFilterProduct("Pássaro")}
          isActive={category.toLocaleLowerCase() === "pássaro"}
        />
      </div>
      <h1 className="px-4 text-blue-950 text-3xl font-bold mt-8 flex items-center gap-3  transition-all duration-300 ease-in-out">
        {category.toLocaleLowerCase() != "todos" && (
          <p
            onClick={() => {
              setCategory("Todos");
              setProducts(allProducts);
            }}
            className="cursor-pointer"
          >
            <ChevronLeft />
          </p>
        )}
        {category.toUpperCase()}
      </h1>
      <div className="w-full  px-4 grid grid-cols-1 mt-4 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <section
            key={product.id}
            className=" w-full  mx-auto rounded-lg p-6 shadow-2xl hover:shadow-1xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 mx-auto  object-cover rounded-lg"
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
              <span
                className="bg-blue-950 px-10 py-2 rounded-md cursor-pointer"
                onClick={() => addItemCart(product)}
              >
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
