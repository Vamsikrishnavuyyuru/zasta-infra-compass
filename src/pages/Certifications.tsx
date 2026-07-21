import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionHeaderWithCity from "@/components/shared/SectionHeaderWithCity";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Award } from "lucide-react";

interface Certificate {
  title: string;
  issuer?: string;
  image: string;
}

const certificates: Certificate[] = [
  { title: "ISO 9001:2015 — Quality Management", issuer: "International Organization for Standardization", image: "/placeholder.svg" },
  { title: "ISO 45001 — Occupational Health & Safety", issuer: "International Organization for Standardization", image: "/placeholder.svg" },
  { title: "ISO 14001 — Environmental Management", issuer: "International Organization for Standardization", image: "/placeholder.svg" },
  { title: "D&B D-U-N-S® Registered", issuer: "Dun & Bradstreet", image: "/placeholder.svg" },
  { title: "MSME Registration", issuer: "Government of India", image: "/placeholder.svg" },
  { title: "Companies Act Registration", issuer: "Ministry of Corporate Affairs, India", image: "/placeholder.svg" },
];

const Certifications = () => {
  const [preview, setPreview] = useState<Certificate | null>(null);

  return (
    <Layout>
      <SEO
        title="Our Certifications — Zasta Group"
        description="Zasta Group certifications demonstrating our commitment to quality, compliance, and industry standards."
        path="/certifications"
      />

      <SectionHeaderWithCity
        title="Our Certifications"
        subtitle="Our certifications demonstrate our commitment to quality, compliance, and industry standards."
        bgGradient="bg-gradient-to-br from-zasta-green-900 via-zasta-green-700 to-zasta-green-500"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <button
                  type="button"
                  onClick={() => setPreview(cert)}
                  className="block w-full bg-zasta-green-50 aspect-[4/3] overflow-hidden focus:outline-none focus:ring-2 focus:ring-zasta-green-500"
                  aria-label={`Preview ${cert.title}`}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </button>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-zasta-green-50 text-zasta-green-600 flex-shrink-0">
                      <Award size={20} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900 leading-snug">{cert.title}</h3>
                      {cert.issuer && (
                        <p className="text-sm text-gray-600 mt-1">{cert.issuer}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-white">
          {preview && (
            <>
              <DialogTitle className="sr-only">{preview.title}</DialogTitle>
              <img
                src={preview.image}
                alt={preview.title}
                className="w-full h-auto max-h-[80vh] object-contain bg-zasta-green-50"
              />
              <div className="p-6 border-t">
                <h3 className="text-lg font-semibold text-gray-900">{preview.title}</h3>
                {preview.issuer && (
                  <p className="text-sm text-gray-600 mt-1">{preview.issuer}</p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Certifications;
