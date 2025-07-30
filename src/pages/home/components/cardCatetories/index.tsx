import { Link } from "react-router-dom";

interface CardCategoriesProps {
  image: string;
  name: string;
}

const CardCategories = ({ image, name }: CardCategoriesProps) => {
  return (
    <section>
      <Link to="/products">
        <div className="w-full max-w-sm h-full max-h-80 bg-white rounded-md mb-10 flex flex-col justify-center items-center gap-6 hover:scale-110 duration-300 cursor-pointer ">
          <img src={image} className="w-full max-w-40 rounded-full p-2" />
          <h1 className="font-bold text-blue-950  text-sm lg:text-2xl">
            {name}
          </h1>
        </div>
      </Link>
    </section>
  );
};

export default CardCategories;
