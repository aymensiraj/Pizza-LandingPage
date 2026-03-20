const Footer = () => {
  return (
    <footer className="bg-[#f4f1ea] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <h4 className="font-black italic uppercase text-2xl mb-6">Original <span className="text-orange-600">Crust</span></h4>
             <p className="text-sm text-gray-500 font-medium">Real Pizza. Real People. Real Thin Crust.</p>
          </div>
          
          <div>
            <h5 className="font-black uppercase text-[10px] tracking-widest text-gray-400 mb-6">Quick Links</h5>
            <ul className="space-y-4 font-bold uppercase text-xs">
              <li><a href="#" className="hover:text-orange-600 transition">Menu</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Locations</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Catering</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black uppercase text-[10px] tracking-widest text-gray-400 mb-6">Connect</h5>
            <div className="flex gap-4">
               {['FB', 'IG', 'TW'].map(social => (
                 <a key={social} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center font-black text-[10px] hover:bg-black hover:text-white transition-all">
                   {social}
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h5 className="font-black uppercase text-[10px] tracking-widest text-gray-400 mb-6">Newsletter</h5>
            <div className="flex border-b-2 border-black pb-2">
              <input type="email" placeholder="YOUR EMAIL" className="bg-transparent outline-none text-xs w-full font-bold" />
              <button className="font-black text-xs uppercase tracking-widest">→</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          <p>© 2024 CRUST PIZZA CO.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 