import About from "./components/about";
import Services from "./components/services";
import Testimonials from "./components/testimonials";

const brands = [
  { name: "Royal Canin", logo: "royal.png" },
  { name: "Golden", logo: "natural.png" },
  { name: "Primier", logo: "golden.png" },
  { name: "Formula Natural", logo: "primier.png" },
  { name: "Whiskas", logo: "whiskas.png" },
  { name: "Golden", logo: "royal.png" },
];

const AboutPage = () => {
  return (
    <div>
      <About />
      <div>
        <Services />
        <Testimonials />

        <div className="bg-slate-100 w-full ">
          <section className="container mx-auto px-4">
            <h1 className=" text-4xl font-bold text-blue-950 md:text-center">
              Marcas que trabalhamos
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
              {brands.map((item, index) => (
                <div
                  key={index}
                  className="p-2 bg-white rounded-lg flex items-center justify-center my-5 border border-zinc-300 shadow-sm hover:shadow-md transition"
                >
                  <img src={item.logo} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
