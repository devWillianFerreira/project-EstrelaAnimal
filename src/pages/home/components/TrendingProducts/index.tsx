const TrendingProducts = () => {
  return (
    <div className="w-full flex flex-col mt-5 items-center lg:flex-row justify-between mb-10">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 relative ">
        <div className="w-[320px] h-[155px] flex flex-row  items-center rounded-md border border-zinc-300">
          <img src="product-example.jpg" className="p-4 rounded-3xl w-30" />
          <div className="flex flex-col ">
            <h2 className="text-blue-950 font-semibold">Comida de coelho</h2>
            <h2 className="text-blue-950 font-bold pt-2">
              R$ 60,00 - R$ 120,00
            </h2>
          </div>
        </div>
        <div className="w-[320px] h-[155px] flex flex-row  items-center rounded-md border border-zinc-300">
          <img src="product-example.jpg" className="p-4 rounded-3xl w-30" />
          <div className="flex flex-col ">
            <h2 className="text-blue-950 font-semibold">Comida de coelho</h2>
            <h2 className="text-blue-950 font-bold pt-2">
              R$ 60,00 - R$ 120,00
            </h2>
          </div>
        </div>
        <div className="w-[320px] h-[155px] flex flex-row  items-center rounded-md border border-zinc-300">
          <img src="product-example.jpg" className="p-4 rounded-3xl w-30" />
          <div className="flex flex-col ">
            <h2 className="text-blue-950 font-semibold">Comida de coelho</h2>
            <h2 className="text-blue-950 font-bold pt-2">
              R$ 60,00 - R$ 120,00
            </h2>
          </div>
        </div>
        <div className="w-[320px] h-[155px] flex flex-row  items-center rounded-md border border-zinc-300">
          <img src="product-example.jpg" className="p-4 rounded-3xl w-30" />
          <div className="flex flex-col ">
            <h2 className="text-blue-950 font-semibold">Comida de coelho</h2>
            <h2 className="text-blue-950 font-bold pt-2">
              R$ 60,00 - R$ 120,00
            </h2>
          </div>
        </div>
        <div className="w-[320px] h-[155px] flex flex-row  items-center rounded-md border border-zinc-300">
          <img src="product-example.jpg" className="p-4 rounded-3xl w-30" />
          <div className="flex flex-col ">
            <h2 className="text-blue-950 font-semibold">Comida de coelho</h2>
            <h2 className="text-blue-950 font-bold pt-2">
              R$ 60,00 - R$ 120,00
            </h2>
          </div>
        </div>
        <div className="w-[320px] h-[155px] flex flex-row  items-center rounded-md border border-zinc-300">
          <img src="product-example.jpg" className="p-4 rounded-3xl w-30" />
          <div className="flex flex-col ">
            <h2 className="text-blue-950 font-semibold">Comida de coelho</h2>
            <h2 className="text-blue-950 font-bold pt-2">
              R$ 60,00 - R$ 120,00
            </h2>
          </div>
        </div>
      </div>

      <img
        src="banner-8.jpg"
        alt="Produtos em Altas"
        className="rounded-md w-[400px] relative"
      />
    </div>
  );
};

export default TrendingProducts;
