import { Phone } from "lucide-react";

const BannerHome = () => {
  return (
    <section className="text-black relative bg-[url(bgBanner.jpg)] ">
      <div className="container mx-auto pt-16 pb-16 md:pb-0 lg:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="space-y-6">
            <h1 className="text-3xl font-bol md:text-4xl lg:text-5xl font-bold leading-10">
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className=";g: text-lg">
              Oferecemos os melhores produtos para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>
            <div>
              <a
                href=" #"
                className="bg-green-500 px-4 py-2 rounded-md font-semibold flex gap-3 items-center justify-center w-fit text-white"
              >
                <Phone className="text-white w-5 h-5" />
                Contato via WhatsApp
              </a>
            </div>
            <div className="mt-8">
              <p className="text-m mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">-5% </b>{" "}
                de desconto na primeira compra
              </p>
            </div>
          </div>
          <div
            className="hidden lg:block h-full relative "
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <img
              src="hero-dog.webp"
              className="object-cover"
              alt="Cachorro"
              sizes="(max-width: 768px) 0vw, 50vw"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default BannerHome;
