interface CardsBannerProps {
  image: string;
  title: string;
  subTitle: string;
}

const CardsBanner = ({ image, title, subTitle }: CardsBannerProps) => {
  return (
    <div className=" relative cursor-pointer ">
      <div className="absolute text-white">
        <h1 className="font-bold text-2xl pt-5 px-4">{title}</h1>
        <h3 className="px-4 pt-3">{subTitle}</h3>
      </div>
      <img src={image} className="rounded-md" />
    </div>
  );
};

export default CardsBanner;
