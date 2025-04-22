interface CategoryProductsProps {
  image: string;
  text: string;
  handleFilterProducts: () => void;
}

const CategoryProducts = ({
  image,
  text,
  handleFilterProducts,
}: CategoryProductsProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <button onClick={handleFilterProducts} className="cursor-pointer">
        <img src={image} className="w-full max-w-40 rounded-full" />
        <h1 className="text-blue-950 font-medium">{text}</h1>
      </button>
    </div>
  );
};

export default CategoryProducts;
