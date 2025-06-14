import Layout from '@/components/Layout';
import SectionHeaderWithCity from '@/components/shared/SectionHeaderWithCity';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Award, Users, Building, Calendar, TrendingUp } from 'lucide-react';

const About = () => {
  const timeline = [
    { year: "2016", title: "Company Founded", description: "Zasta Engineers And Consultancy Services established in Hyderabad" },
    { year: "2018", title: "First Major Project", description: "Deployed workforce for mega power transmission project" },
    { year: "2020", title: "Digital Innovation", description: "Launched SiteSync digital quality management suite" },
    { year: "2022", title: "Sector Expansion", description: "Extended services to data centers and industrial projects" },
    { year: "2024", title: "Growth Milestone", description: "Achieved ₹4 Cr+ revenue, targeting ₹6 Cr in FY25-26" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in every project we undertake"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Transparency and honesty form the foundation of all our relationships"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Continuously evolving our methods and technologies"
    }
  ];

  const stats = [
    { icon: Users, number: "100+", label: "Skilled Professionals" },
    { icon: Building, number: "35+", label: "Projects Completed" },
    { icon: Calendar, number: "9+", label: "Years of Experience" }
  ];

  return (
    <Layout>
      {/* Hero Section with City Animation */}
      <SectionHeaderWithCity
        title="About Zasta"
        subtitle="Powering infrastructure projects worldwide since 2016 with innovative solutions and skilled expertise"
        bgGradient="bg-gradient-to-br from-zasta-green-900 via-zasta-green-700 to-zasta-green-500"
      />

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2016 in Hyderabad, Zasta Enterprises Private Limited, Previously known as Zasta Engineers And Consultancy Services emerged from a vision to bridge the gap between skilled talent and infrastructure development needs. What started as a workforce solutions company has evolved into a comprehensive infrastructure services provider.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we serve global infrastructure projects across power, transportation, oil & gas, data centers, real estate, industrial sectors and Information Technology. Our commitment to excellence, innovation, and client success has made us a trusted partner for some of the industry's most challenging projects.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We continue to grow while maintaining our core values of quality, agility, and domain expertise.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <stat.icon className="w-12 h-12 text-zasta-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-zasta-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-zasta-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-zasta-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in infrastructure workforce solutions and project management, recognized for our innovation, quality, and commitment to powering the world's most critical infrastructure projects.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-zasta-gold-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-zasta-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver exceptional workforce solutions, construction management services, and digital tools that enable our clients to build infrastructure projects efficiently, safely, and on time while fostering long-term partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-zasta-green-500 to-zasta-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300">Milestones in our growth story</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zasta-green-500 hidden md:block"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-zasta-green-500 rounded-full border-4 border-gray-900 hidden md:block"></div>
                    
                    {/* Content */}
                    <div className="md:ml-16 bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors w-full">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="text-zasta-gold-400 font-bold text-lg mb-2">{item.year}</div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
