import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    content:
      "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: "tutor2.jpg",
  },
  {
    content:
      "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
    author: "Rafael",
    role: "Tutor do Thor (Bulldog Francês)",
    image: "tutor1.png",
  },
  {
    content:
      "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    author: "Camila fernandes",
    role: "Tutora da Mel e do Max",
    image: "tutor3.webp",
  },
];

const Testimonials = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }
  function scrollNext() {
    emblaApi?.scrollNext();
  }
  return (
    <section className="bg-white px-16 py-15">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-950 py-5 text-center">
          Depoimentos dos nossos clientes
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-white text-[#1e293b] rounded-2xl p-6 space-y-4 h-full flex flex-col border border-gray-200">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative w-24 h-24 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.author}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <p className="text-[#1e293b]">{item.content}</p>
                      <div>
                        <p className="font-bold">{item.author}</p>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
            <ChevronLeft
              className="w-6 h-6 text-gray-600  "
              onClick={scrollPrev}
            />
          </button>
          <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute  -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
            <ChevronRight
              className="w-6 h-6 text-gray-600 bg-white flex items-center ju "
              onClick={scrollNext}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
