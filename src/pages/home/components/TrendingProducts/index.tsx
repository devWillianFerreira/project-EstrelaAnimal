interface TrendingProductsProps {
  image: string;
  name: string;
  price: number;
}

const TrendingProducts = ({ image, name, price }: TrendingProductsProps) => {
  return (
    <div className="h-39 flex flex-row p-2  items-center rounded-md border border-zinc-300 shadow-sm hover:shadow-md transition">
      <div className="w-30 aspect-square flex-shrink-0">
        <img src={image} className="p-4  w-full h-full object-contain" />
      </div>
      <div className="flex flex-col ">
        <h2 className="text-blue-950 font-semibold ">{name}</h2>
        <h2 className="text-blue-950 font-bold pt-2">
          {price.toLocaleString("PT-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>
      </div>
    </div>
  );
};

export default TrendingProducts;
