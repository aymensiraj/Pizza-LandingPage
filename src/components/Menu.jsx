import img1 from "../img/blanco.png"
import img2 from "../img/tuscany.png"
import img3 from "../img/margherita.png"
const MenuSection = () => {
  const pizzas = [
    { 
      name: "The Blanco", 
      price: "14", 
      tag: "Best Seller", 
      img: img1, 
      color: "bg-yellow-50" 
    },
    { 
      name: "Tuscany", 
      price: "16", 
      tag: "New", 
      img: img2, 
      color: "bg-red-50" 
    },
    { 
      name: "Old Smokey", 
      price: "15", 
      tag: "Spicy", 
      img: img3, 
      color: "bg-orange-50" 
    },
  ];

  return (
    <section id="Menu" className="py-24 bg-[#faf9f6] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        <div className="md:col-span-4">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">Fresh Ingredients</span>
          <h2 className="text-7xl font-black italic uppercase leading-[0.8] mt-4 mb-8">
            Pick Your <br/> <span className="text-orange-600">Poison.</span>
          </h2>
          <p className="text-gray-500 font-medium mb-10 leading-relaxed">
            Hand-stretched dough, 48-hour fermentation, and ingredients that make your mama jealous.
          </p>
          <ul className="space-y-5">
            {['Gourmet Pizzas', 'Build Your Own', 'Starters', 'Salads'].map(item => (
              <li key={item} className="text-xl font-black italic uppercase hover:text-orange-600 hover:translate-x-3 transition-all cursor-pointer flex items-center gap-4 group">
                <span className="w-10 h-[2px] bg-gray-200 group-hover:bg-orange-600 transition-all"></span> 
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {pizzas.map((p, i) => (
            <div 
              key={i} 
              className={`${p.color} p-10 rounded-[3.5rem] relative overflow-hidden group min-h-[420px] flex flex-col justify-end transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100 ${i === 0 ? 'md:row-span-2' : ''}`}
            >
              <img 
                src={p.img} 
                className="absolute -top-10 -right-10 w-72 md:w-80 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 ease-out drop-shadow-[0_20px_20px_rgba(0,0,0,0.2)]" 
                alt={p.name} 
              />
              
              <div className="relative z-10">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase mb-4 inline-block shadow-sm">
                  {p.tag}
                </span>
                <h3 className="text-4xl font-black italic uppercase mb-2 tracking-tighter">{p.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Starting at</span>
                    <p className="text-3xl font-black">${p.price}</p>
                  </div>
                  <button className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all shadow-lg active:scale-90">
                    <span className="text-2xl font-light">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MenuSection;