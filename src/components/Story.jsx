const StorySection = () => {
  return (
    <section id="Our Story" className="py-24 bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative h-[500px] md:h-[600px]">
          <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl rotate-[-2deg] border-4 border-white/10 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=600" 
              alt="Kitchen Action" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-[4deg] border-8 border-black z-10 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80&w=600" 
              alt="Pizza Detail" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-orange-600 w-24 h-24 rounded-full flex items-center justify-center border-4 border-black animate-spin-slow">
             <span className="text-[10px] font-black uppercase tracking-tighter text-center leading-none">
               Chicago <br/> Style <br/> Thin
             </span>
          </div>
        </div>

        <div className="relative z-10">
          <span className="text-orange-600 font-bold uppercase tracking-[0.4em] text-xs">Since 2011</span>
          <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-none mt-4 mb-8">
            Thin Crust <br/> 
            <span className="text-transparent stroke-text">Even Texans</span> <br/>
            Will Love.
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-10">
            Crust Pizza is the locally-owned place for delicious, made-from-scratch pizzas served in an upscale, comfortable, family-friendly environment.
          </p>

          <div className="flex flex-wrap gap-8 items-center">
            <div>
              <p className="text-4xl font-black italic">48H</p>
              <p className="text-xs uppercase text-gray-500 font-bold tracking-widest">Dough Prep</p>
            </div>
            <div className="w-[1px] h-10 bg-gray-800"></div>
            <div>
              <p className="text-4xl font-black italic">100%</p>
              <p className="text-xs uppercase text-gray-500 font-bold tracking-widest">Real Mozzarella</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StorySection;   