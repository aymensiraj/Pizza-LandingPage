const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#faf9f6]">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
        <h1 className="text-[15vw] font-black text-gray-200/50 uppercase italic leading-none select-none">
          Freshly Baked
        </h1>
      </div>

 
      <div className="relative z-10 flex flex-col items-center text-center">
  
        <div className="mb-8 flex gap-4 bg-white/50 p-2 rounded-full border border-gray-100 shadow-sm">
          {['Small', 'Medium', 'Large'].map((size) => (
            <button key={size} className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-tighter hover:bg-black hover:text-white transition-all">
              {size}
            </button>
          ))}
        </div>

        <div className="relative group cursor-pointer">
          <img 
            src="https://pngimg.com/uploads/pizza/pizza_PNG44090.png" 
            alt="Main Pizza" 
            className="w-[400px] md:w-[600px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] animate-pizza-float"
          />
          <div className="absolute -top-10 -right-10 w-20 h-20 rotate-45 animate-bounce">
             🍃
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase text-gray-900 tracking-tighter">
            The <span className="text-orange-600">Inferno</span>
          </h2>
          <p className="mt-4 text-gray-500 font-medium max-w-md mx-auto">
            Spicy pepperoni, fresh mozzarella, and our signature smoked chili honey.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
             <button className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold uppercase text-sm shadow-orange-200 shadow-2xl hover:brightness-110">
               Customize
             </button>
             <button className="cursor-pointer border-2 border-black text-black px-10 py-4 rounded-full font-bold uppercase text-sm hover:bg-black hover:text-white transition-all">
               <a href="#Menu">View Menu</a>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;