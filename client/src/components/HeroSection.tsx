import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  imageUrl?: string;
}

export default function HeroSection({
  headline,
  subheadline,
  ctaPrimary = "Fale com um Especialista",
  ctaSecondary = "Conheça nossos cases",
  imageUrl,
}: HeroSectionProps) {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {headline}
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#009640] hover:bg-[#007a32] text-white px-8 py-3 text-lg">
                {ctaPrimary}
              </Button>
              <Button
                variant="outline"
                className="border-[#009640] text-[#009640] hover:bg-[#009640] hover:text-white px-8 py-3 text-lg"
              >
                {ctaSecondary} <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          {imageUrl && (
            <div className="relative">
              <div className="bg-gradient-to-br from-[#009640] to-[#009FE3] rounded-3xl p-1">
                <img
                  src={imageUrl}
                  alt="Hero"
                  className="w-full h-96 object-cover rounded-3xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

