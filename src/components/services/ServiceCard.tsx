
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, CheckCircle, LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceFeature {
  name: string;
  details: string;
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  illustration: string;
  illustrationAlt: string;
  features: ServiceFeature[];
  detailedDescription: string;
  index: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  illustration,
  illustrationAlt,
  features,
  detailedDescription,
  index
}: ServiceCardProps) => {
  return (
    <div className="relative">
      {/* Main Service Card */}
      <Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gray-50 border-0 transform hover:scale-[1.02] transition-all duration-500">
        <div className="relative">
          {/* Hero Image Section */}
          <div className="relative h-80 overflow-hidden">
            <img 
              src={illustration} 
              alt={illustrationAlt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Floating Icon */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
              <Icon className="w-8 h-8 text-zasta-green-600" />
            </div>
            
            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
              <p className="text-white/90 text-lg">{description}</p>
            </div>
          </div>

          {/* Content Section */}
          <CardContent className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Deliver</h3>
              <p className="text-gray-600 leading-relaxed">{detailedDescription}</p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-zasta-green-600 mr-2" />
                Key Capabilities
              </h4>
              
              {features.map((feature, idx) => (
                <Collapsible key={idx}>
                  <CollapsibleTrigger className="w-full group">
                    <div className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-zasta-green-50 to-white hover:from-zasta-green-100 hover:to-zasta-green-50 rounded-xl transition-all duration-300 border border-zasta-green-100 hover:border-zasta-green-200 hover:shadow-md">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-zasta-green-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-200" />
                        <span className="text-gray-900 font-medium text-left">{feature.name}</span>
                      </div>
                      <ChevronDown className="w-5 h-5 text-zasta-green-600 transition-transform duration-200 group-hover:text-zasta-green-700 group-data-[state=open]:rotate-180" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-2 p-6 bg-white border border-zasta-green-100 rounded-xl shadow-sm ml-4">
                      <p className="text-gray-600 leading-relaxed">{feature.details}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-r from-zasta-green-600 to-zasta-green-700 rounded-xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold mb-1">Ready to Get Started?</h4>
                  <p className="text-zasta-green-100 text-sm">Let's discuss how we can help with your project</p>
                </div>
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;
