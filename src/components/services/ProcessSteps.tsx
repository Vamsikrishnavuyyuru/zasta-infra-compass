
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const ProcessSteps = () => {
  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Consultation",
      description: "We understand your project requirements and challenges"
    },
    {
      number: "02", 
      title: "Planning",
      description: "Develop customized solutions tailored to your needs"
    },
    {
      number: "03",
      title: "Execution",
      description: "Deploy our expert teams and advanced tools"
    },
    {
      number: "04",
      title: "Monitoring",
      description: "Continuous oversight and quality assurance"
    }
  ];

  return (
    <section className="py-20 bg-zasta-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600">How we deliver excellence in every project</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-zasta-green-500 to-zasta-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
