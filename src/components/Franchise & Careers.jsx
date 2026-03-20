const JoinSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
  
      <div className="bg-orange-600 p-16 md:p-24 text-white flex flex-col justify-center items-start group overflow-hidden relative">
         <div className="absolute top-0 right-0 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <img src="pizza-icon.png" className="w-64 rotate-12" />
         </div>
         <h3 className="text-5xl font-black italic uppercase mb-6">Own a <br/> Franchise</h3>
         <p className="text-orange-100 mb-8 max-w-sm font-medium">Be part of the fastest growing pizza family in the south.</p>
         <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-colors">
           Learn More
         </button>
      </div>

  
      <div className="bg-zinc-900 p-16 md:p-24 text-white flex flex-col justify-center items-start">
         <h3 className="text-5xl font-black italic uppercase mb-6">Work at <br/> Crust</h3>
         <p className="text-zinc-400 mb-8 max-w-sm font-medium">We’re always looking for pizza enthusiasts to join our kitchens.</p>
         <button className="border-2 border-white text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors">
           Apply Now
         </button>
      </div>
    </section>
  );
};

export default JoinSection;