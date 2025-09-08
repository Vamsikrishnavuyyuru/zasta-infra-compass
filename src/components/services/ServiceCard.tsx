
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, CheckCircle, LucideIcon, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="relative">
      {/* Professional Service Card */}
      <Card className="overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="relative">
          {/* Sophisticated Header */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 border-b border-gray-200 p-8">
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-zasta-blue-600 to-zasta-blue-700 p-4 rounded-xl shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
              </div>
            </div>
          </div>

          {/* Clean Content Section */}
          <CardContent className="p-8 bg-white">
            {/* Overview Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-zasta-blue-600 mr-4 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Service Overview</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base pl-5">{detailedDescription}</p>
            </div>

            {/* Features Section */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-1 h-6 bg-zasta-blue-600 mr-4 rounded-full"></div>
                <h4 className="text-xl font-semibold text-gray-900">Key Capabilities</h4>
              </div>
              
              <div className="space-y-3 pl-5">
                {features.map((feature, idx) => (
                  <Collapsible key={idx}>
                    <CollapsibleTrigger className="w-full group">
                      <div className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-zasta-blue-50 rounded-lg transition-all duration-200 border border-gray-200 hover:border-zasta-blue-200">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-zasta-blue-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-800 font-medium text-left">{feature.name}</span>
                        </div>
                        <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180 flex-shrink-0" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-2 p-4 bg-white border-l-4 border-zasta-blue-600 ml-8 rounded-r-lg shadow-sm border border-gray-100">
                        <p className="text-gray-700 leading-relaxed text-sm">{feature.details}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>

            {/* Professional CTA */}
            <div className="border-t border-gray-200 pt-6">
              <div 
                onClick={handleContactClick}
                className="flex items-center justify-between p-6 bg-gradient-to-r from-white to-gray-50 rounded-lg border-2 border-gray-200 hover:from-zasta-blue-50 hover:to-zasta-blue-100 hover:border-zasta-blue-300 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
              >
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-lg">Ready to Discuss Your Project?</h4>
                  <p className="text-gray-600">Contact our team to explore how we can support your objectives</p>
                </div>
                <ArrowRight className="w-6 h-6 text-zasta-blue-600 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;
