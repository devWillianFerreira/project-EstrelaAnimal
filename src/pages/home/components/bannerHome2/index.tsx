import { Link } from "react-router-dom";

const BannerHome2 = () => {
  return (
    <section className="text-black relative bg-slate-100  ">
      <div className="container mx-auto pt-16 pb-16 md:pb-0 lg:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <img
            src="Shape.png"
            className="  lg:object-cover relative"
            alt="Cachorro"
            sizes="(max-width: 600px) 0vw, 50vw"
          />
          <img
            src="img-29.png"
            className="hidden lg:block object-cover absolute"
            alt="Cachorro"
            sizes="(max-width: 600px) 0vw, 50vw"
          />
          <div className="space-y-6 absolute lg:relative text-blue-950">
            <h1 className="text-3xl font-bol md:text-4xl lg:text-5xl font-bold  leading-10">
              Conforto e{" "}
              <b className="text-orange-400">
                alegria para animais de estimação
              </b>
            </h1>
            <p className=";g: text-lg">
              Fornecer produtos para cães e gatos, alimentos para animais de
              estimação, bons produtos, promoções atraentes e de boa reputação
            </p>
            <div>
              <Link
                to="/products"
                className="bg-orange-400 px-4 py-2 rounded-md font-semibold flex gap-3 items-center justify-center w-fit text-white"
              >
                Compre Agora
              </Link>
            </div>
          </div>
          <div
            className="hidden lg:block h-full relative "
            data-aos="fade-up-right"
            data-aos-delay="300"
          ></div>
        </article>
      </div>
    </section>
  );
};

export default BannerHome2;
