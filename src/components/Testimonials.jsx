const Testimonials = () => {
  const reviews = [
    { name: "Mike Johnson", text: "Best thin crust in Texas! The Inferno is a masterpiece." },
    { name: "Sarah K.", text: "The atmosphere is upscale but the pizza feels like home." },
    { name: "David R.", text: "Finally, a place that knows how to do a proper crispy base!" },
    { name: "Emma W.", text: "Their white pizza is to die for. 10/10 service too." },
  ];

  const doubleReviews = [...reviews, ...reviews];

  return (
    <section id="Our Fantastic" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter">
          Our <span className="text-orange-600">Fanatics.</span>
        </h2>
      </div>
      
      <div className="relative overflow-hidden flex">
        <div className="animate-marquee gap-10 flex py-4">
          {doubleReviews.map((item, i) => (
            <div 
              key={i} 
              className="bg-[#f4f1ea] p-8 rounded-[2.5rem] min-w-[380px] flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow border border-black/5"
            >
              <p className="text-xl font-bold italic leading-tight text-gray-800">
                "{item.text}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">
                  {item.name[0]}
                </div>
                <div className="flex flex-col">
                  <span className="font-black uppercase text-xs tracking-widest">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-orange-600 font-bold uppercase">Verified Fan</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;    