import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { BadgeCheck, Building2, Award, ShieldCheck, Phone, Mail, MapPin, Info } from "lucide-react";

const Credentials = () => {
  return (
    <Layout>
      <SEO
        title="Company Credentials — Zasta Group D-U-N-S & Registrations"
        description="Verified business identity for Zasta Enterprises Private Limited: D-U-N-S number, registrations, certifications, and contact details."
        path="/credentials"
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Company Credentials</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Verified business information and registrations for Zasta Enterprises Private Limited.
              </p>
            </div>

            {/* D-U-N-S */}
            <Card className="mb-6 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-zasta-green-50 text-zasta-green-600">
                    <BadgeCheck size={22} />
                  </span>
                  D-U-N-S® Number
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="font-mono text-lg text-gray-900 whitespace-nowrap select-all bg-zasta-green-50 border border-zasta-green-200 rounded-md px-4 py-2 hover:border-zasta-green-400 transition-colors"
                  >
                    77-141-6338
                  </span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        aria-label="What is a D-U-N-S Number?"
                        className="text-gray-500 hover:text-zasta-green-600 transition-colors"
                      >
                        <Info size={18} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs text-xs">
                      A D-U-N-S Number is a unique business identifier issued by Dun &amp; Bradstreet and used globally
                      to verify business entities.
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  Globally recognized business identifier confirming Zasta as a verified entity in the Dun &amp;
                  Bradstreet Worldwide Network.
                </p>
              </CardContent>
            </Card>

            {/* Registration */}
            <Card className="mb-6 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-zasta-green-50 text-zasta-green-600">
                    <Building2 size={22} />
                  </span>
                  Company Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-gray-500">Legal Name</dt>
                    <dd className="text-gray-900 font-medium">Zasta Enterprises Private Limited</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Formerly Known As</dt>
                    <dd className="text-gray-900 font-medium">Zasta Engineers And Consultancy Services</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Founded</dt>
                    <dd className="text-gray-900 font-medium">2016</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Headquarters</dt>
                    <dd className="text-gray-900 font-medium">Hyderabad, India</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="mb-6 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-zasta-green-50 text-zasta-green-600">
                    <Award size={22} />
                  </span>
                  Certifications &amp; Registrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <BadgeCheck size={16} className="text-zasta-green-600 mt-0.5 flex-shrink-0" />
                    D&amp;B D-U-N-S® Registered Business
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck size={16} className="text-zasta-green-600 mt-0.5 flex-shrink-0" />
                    Registered under the Companies Act, India
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Verification */}
            <Card className="mb-6 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-zasta-green-50 text-zasta-green-600">
                    <ShieldCheck size={22} />
                  </span>
                  Business Verification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Zasta Enterprises Private Limited maintains a verified business profile through global and local
                  authorities, ensuring transparency, trust, and accountability with clients and partners worldwide.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-zasta-green-50 text-zasta-green-600">
                    <Phone size={22} />
                  </span>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-zasta-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Flat No:904-A, SY NO:150, VAZHRAA PRATHIK, BLOCK-A, Nizampet, Qutubullapur, Hyderabad- 500090,
                      India
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-zasta-green-600 flex-shrink-0" />
                    <span className="text-gray-700">+91 8977731709</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-zasta-green-600 flex-shrink-0" />
                    <span className="text-gray-700">info@zastagroup.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Credentials;
