interface CategoryProductsProps {
  image: string;
  text: string;
  handleFilterProducts: () => void;
  isActive: boolean;
}

const CategoryProducts = ({
  image,
  text,
  handleFilterProducts,
  isActive,
}: CategoryProductsProps) => {
  return (
    <div
      className={`
        flex flex-col justify-center items-center mx-2 
        transition-all duration-300 ease-in-out
        ${isActive ? "shadow-md border-2 text-orange-400 rounded-xl p-2" : ""}
      `}
    >
      <button
        onClick={handleFilterProducts}
        className="group transition-all duration-300 ease-in-out cursor-pointer"
      >
        <img
          src={image}
          className={`
            w-full max-w-30 object-cover rounded-full 
            group-hover:brightness-90 
            transition-all duration-300 ease-in-out
          `}
        />
        <h1
          className={`
            text-blue-950 text-center mt-2
            transition-all duration-300 ease-in-out
            ${
              isActive
                ? "underline underline-offset-4 decoration-blue-700"
                : "no-underline"
            }
          `}
        >
          {text}
        </h1>
      </button>
    </div>
  );
};

export default CategoryProducts;
