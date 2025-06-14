
const SectorsSection = () => {
  const sectors = [
    { name: "Power & Distribution", icon: "⚡" },
    { name: "Transportation", icon: "🚄" },
    { name: "Oil & Gas", icon: "🛢️" },
    { name: "Information Technology", icon: "💻" },
    { name: "Real Estate", icon: "🏗️" },
    { name: "Industries & Warehousing", icon: "🏭" },
    { name: "Data Centers", icon: "🏢" }
  ];

  return (
    <section className="py-20 bg-zasta-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sectors We Serve</h2>
          <p className="text-xl text-gray-600">Delivering excellence across diverse infrastructure domains</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow group w-full max-w-sm">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform flex justify-center items-center h-16">
                  {sector.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-base">{sector.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
