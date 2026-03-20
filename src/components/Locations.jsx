const LocationCard = ({ name, address, hours, status }) => (
  <div className="min-w-[320px] bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group">
    <div className="flex justify-between items-start mb-6">
      <div className="bg-orange-50 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:bg-orange-600 transition-colors">
        <svg className="w-6 h-6 text-orange-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest bg-green-100 text-green-700 px-3 py-1 rounded-full">
        {status}
      </span>
    </div>
    
    <h3 className="text-2xl font-black italic uppercase mb-2 text-gray-900">{name}</h3>
    <p className="text-gray-500 text-sm mb-6 leading-relaxed">{address}</p>
    
    <div className="border-t border-dashed border-gray-200 pt-6">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Working Hours</p>
      <p className="text-sm font-bold text-gray-800">{hours}</p>
    </div>
  </div>
);

const Locations = () => {
  return (
    <section id="Locations" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">Neighborhood</span>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase mt-2">Visit Our <br/> <span className="text-gray-300">Kitchens</span></h2>
          </div>
          <button className="flex items-center gap-4 group">
            <span className="font-bold uppercase text-sm tracking-widest">View All 12 Locations</span>
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
               →
            </div>
          </button>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x cursor-grab">
          <LocationCard 
            name="Alden Bridge" 
            address="8000 Research Forest Dr. Suite 340, The Woodlands, TX 77382"
            hours="Sun-Thu: 11am - 9pm"
            status="Open Now"
          />
          <LocationCard 
            name="Creekside" 
            address="26400 Kuykendahl Rd. Suite A150, Tomball, TX 77375"
            hours="Fri-Sat: 11am - 10pm"
            status="Open Now"
          />
          <LocationCard 
            name="Woodforest" 
            address="791 Fish Creek Thoroughfare, Montgomery, TX 77316"
            hours="Sun-Thu: 11am - 9pm"
            status="Closing Soon"
          />
        </div>
      </div>
    </section>
  );
};
export default Locations;