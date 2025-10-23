 

export const Hero1 = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(https://me.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2025/central/collections/lv-ski/W_LV_SKI_WW_HP_push_October_DI3.jpg` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight">
          Timeless Elegance
        </h1>
        <p className="font-sans text-lg md:text-xl text-white/90 mb-8 tracking-wide">
          Discover our latest collection of exceptional leather goods
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition">
            Explore Collection
          </button>
          <button  className="border border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-black transition">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};
