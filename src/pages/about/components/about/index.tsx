import { Check, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <section className="bg-slate-100 py-16">
      <div className="container px-4 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <img
                src="about-1.png"
                alt="Sobre Nós"
                className="object-cover  hover:scale-110 duration-300"
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 ">
              <img
                src="about-2.png"
                alt="Sobre Nós"
                className="rounded-lg border-4 border-white overflow-hidden"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-blue-950 py-5">Sobre</h2>
            <p className="text-blue-950">
              Bem-vindo ao Estrela Animal! Nós somos apaixonados por animais e
              nossa missão é proporcionar o melhor cuidado e carinho para seu
              amigo peludo. Desde que abrimos nossas portas, nos dedicamos a
              oferecer produtos de alta qualidade e serviços excepcionais para
              pets de todas as formas e tamanhos. Nossa História na Estrela
              Animal, começamos como uma pequena loja de bairro com um grande
              sonho: criar um lugar onde animais de estimação e seus donos se
              sintam como em casa. Com o apoio da comunidade e nosso amor
              incondicional pelos animais, crescemos e nos tornamos um ponto de
              referência em São Paulo.
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2">
                <Check className="text-orange-400" />
                Aberto desde 2006.
              </li>
              <li className="flex gap-2">
                <Check className="text-orange-400" />
                Equipe com mais de 10 Veterinários.
              </li>
              <li className="flex gap-2">
                <Check className="text-orange-400" />
                Qualidade é a nossa prioridade.
              </li>
            </ul>
            <div className="flex gap-2">
              <a
                href=" #"
                className="bg-green-500 px-4 py-2 rounded-md font-semibold flex gap-3 items-center justify-center w-fit text-white"
              >
                <Phone className="text-white w-5 h-5" />
                Contato via WhatsApp
              </a>
              <a
                href=" #"
                className="bg-zinc-400 px-4 py-2 rounded-md font-semibold flex gap-3 items-center justify-center w-fit text-white"
              >
                <MapPin className="text-white w-5 h-5" />
                Endereço da Loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
