
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, CheckCircle, LucideIcon } from 'lucide-react';

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
    <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-12`}>
      <div className="flex-1">
        <div className="flex items-center mb-6">
          <div className="bg-zasta-green-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
            <Icon className="w-8 h-8 text-zasta-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        <p className="text-lg text-gray-600 mb-6">{detailedDescription}</p>
        
        {/* Interactive Service Features */}
        <div className="space-y-3">
          {features.map((feature, idx) => (
            <Collapsible key={idx}>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between w-full p-4 bg-zasta-green-50 hover:bg-zasta-green-100 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-zasta-green-600 mr-3" />
                    <span className="text-gray-900 font-medium text-left">{feature.name}</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-zasta-green-600 transition-transform duration-200" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="mt-2 p-4 bg-white border border-zasta-green-100 rounded-lg">
                  <p className="text-gray-600">{feature.details}</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
      
      <div className="flex-1">
        <Card className="shadow-xl overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={illustration} 
              alt={illustrationAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Service Overview</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="bg-zasta-green-50 p-4 rounded-lg">
              <p className="text-sm text-zasta-green-700 font-medium">
                Click on any feature above to learn more about our detailed approach and methodology.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceCard;
