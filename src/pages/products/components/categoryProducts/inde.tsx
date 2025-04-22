interface CategoryProductsProps {
  image: string;
  text: string;
}

const CategoryProducts = ({ image, text }: CategoryProductsProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={image} className="w-40 rounded-full" />
      <h1 className="text-blue-950 font-medium">{text}</h1>
    </div>
  );
};

export default CategoryProducts;
