
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: "Flat no - 1505, Tower - 1, Emami Swanlake Apartments, Opposite Metro cash & carry, Balaji nagar, Kukatpally, Hyderabad - 500072, India"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+91 9701620621"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@zastagroup.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-zasta-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <info.icon className="w-6 h-6 text-zasta-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.details}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
