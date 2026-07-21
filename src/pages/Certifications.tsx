import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionHeaderWithCity from "@/components/shared/SectionHeaderWithCity";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import isoAsset from "@/assets/iso-9001.asset.json";
import dpiitAsset from "@/assets/dpiit-recognition.asset.json";
import udyamAsset from "@/assets/udyam-registration.asset.json";
import udyamPage1 from "@/assets/udyam-page-1.asset.json";
import udyamPage2 from "@/assets/udyam-page-2.asset.json";

interface Certificate {
  title: string;
  issuer?: string;
  image: string;
  pages?: string[];
}

const certificates: Certificate[] = [
  { title: "ISO 9001:2015 — Quality Management System", issuer: "International Organization for Standardization", image: isoAsset.url },
  { title: "DPIIT Startup India Recognition", issuer: "Department for Promotion of Industry and Internal Trade, Government of India", image: dpiitAsset.url },
  {
    title: "Udyam Registration (MSME)",
    issuer: "Ministry of Micro, Small & Medium Enterprises, Government of India",
    image: udyamAsset.url,
    pages: [udyamPage1.url, udyamPage2.url],
  },
];

const Certifications = () => {
  const [preview, setPreview] = useState<Certificate | null>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const openPreview = (cert: Certificate) => {
    setPageIndex(0);
    setPreview(cert);
  };

  const pages = preview?.pages ?? (preview ? [preview.image] : []);
  const hasMultiple = pages.length > 1;

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
                  onClick={() => openPreview(cert)}
                  className="block w-full bg-zasta-green-50 aspect-[4/3] overflow-hidden focus:outline-none focus:ring-2 focus:ring-zasta-green-500"
                  aria-label={`Preview ${cert.title}`}
                >
                  <img
                    src={cert.pages ? cert.pages[0] : cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
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
              <div className="relative bg-zasta-green-50">
                <img
                  src={pages[pageIndex]}
                  alt={`${preview.title} — page ${pageIndex + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                {hasMultiple && (
                  <>
                    <button
                      type="button"
                      onClick={() => setPageIndex((i) => Math.max(0, i - 1))}
                      disabled={pageIndex === 0}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-zasta-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setPageIndex((i) => Math.min(pages.length - 1, i + 1))}
                      disabled={pageIndex === pages.length - 1}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-zasta-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
                      aria-label="Next page"
                    >
                      <ChevronRight size={22} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow">
                      Page {pageIndex + 1} of {pages.length}
                    </div>
                  </>
                )}
              </div>
              <div className="p-6 border-t flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{preview.title}</h3>
                  {preview.issuer && (
                    <p className="text-sm text-gray-600 mt-1">{preview.issuer}</p>
                  )}
                </div>
                {hasMultiple && (
                  <div className="flex gap-2 flex-shrink-0">
                    {pages.map((_, i) => (
                      <Button
                        key={i}
                        type="button"
                        size="sm"
                        variant={i === pageIndex ? "default" : "outline"}
                        onClick={() => setPageIndex(i)}
                        className={i === pageIndex ? "bg-zasta-green-600 hover:bg-zasta-green-700" : ""}
                      >
                        Page {i + 1}
                      </Button>
                    ))}
                  </div>
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
