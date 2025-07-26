import { Link } from "react-router-dom";

interface CardCategoriesProps {
  image: string;
  name: string;
}

const CardCategories = ({ image, name }: CardCategoriesProps) => {
  return (
    <section>
      <Link to="/products">
        <div className="w-[250px] h-[340px] bg-white rounded-md mb-10 flex flex-col justify-center items-center gap-6 hover:scale-110 duration-300 cursor-pointer">
          <img src={image} className="w-[170px] rounded-full" />
          <h1 className="font-bold text-blue-950 font text-2xl">{name}</h1>
        </div>
      </Link>
    </section>
  );
};

export default CardCategories;
