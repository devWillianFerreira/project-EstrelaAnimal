interface CardCategoriesProps {
  image: string;
  name: string;
}

const CardCategories = ({ image, name }: CardCategoriesProps) => {
  return (
    <section>
      <div className="w-[250px] h-[340px] bg-white rounded-md mb-10 flex flex-col justify-center items-center gap-6">
        <img src={image} className="w-[170px] rounded-full" />
        <h1 className="font-bold text-blue-950 font text-2xl">{name}</h1>
      </div>
    </section>
  );
};

export default CardCategories;
