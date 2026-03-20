import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState('Home');

  return (
    <nav className="fixed top-0 w-[95%] left-1/2 -translate-x-1/2 z-[100] mt-4 px-8 py-3 flex justify-between items-center bg-white/70 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/20">
      
      
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center shadow-orange-200 shadow-lg">
          <span className="text-white font-black text-lg italic">C</span>
        </div>
        <span className="font-black text-xl tracking-tighter uppercase italic text-slate-900">
          Original <span className="text-orange-600">Crust</span>
        </span>
      </div>

      
      <div className="hidden lg:flex space-x-10 font-bold text-[11px] uppercase tracking-widest text-slate-700">
        {['Locations','Menu', 'Our Story', 'Our Fantastic'].map((item) => (
          <a onClick={()=>setActive(item)} key={item} href={`#${item}`} className={`hover:text-orange-600 transition-all relative group`}>
            {item}
            <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-600 transition-all group-hover:w-full ${active === item ? 'w-full' : ''}`}></span>
          </a>
        ))}
      </div>

    
      <button className="bg-black text-white px-7 py-2.5 rounded-full font-black text-[10px] uppercase tracking-[0.15em] hover:bg-orange-600 hover:scale-105 transition-all shadow-lg active:scale-95">
        Order Now
      </button>
    </nav>
  );
};

export default Navbar;