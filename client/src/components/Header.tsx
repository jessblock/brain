import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-gray-900">
            <span className="text-[#009640]">brain</span>
          </div>
          <span className="text-xs text-gray-500">powered by Algar</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-700 hover:text-[#009640] font-medium">
            SOBRE
          </a>
          <a href="/solucoes" className="text-gray-700 hover:text-[#009640] font-medium">
            SOLUÇÕES
          </a>
          <a href="/cases" className="text-gray-700 hover:text-[#009640] font-medium">
            CASES
          </a>
          <a href="/carreiras" className="text-gray-700 hover:text-[#009640] font-medium">
            CARREIRAS
          </a>
          <a href="/blog" className="text-gray-700 hover:text-[#009640] font-medium">
            BLOG
          </a>
        </nav>

        {/* Desktop CTA + Language */}
        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-[#009640] hover:bg-[#007a32] text-white">
            Fale com um Especialista
          </Button>
          <span className="text-sm text-gray-500">PT | EN</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 p-4 flex flex-col gap-4">
          <a href="/" className="text-gray-700 hover:text-[#009640]">
            SOBRE
          </a>
          <a href="/solucoes" className="text-gray-700 hover:text-[#009640]">
            SOLUÇÕES
          </a>
          <a href="/cases" className="text-gray-700 hover:text-[#009640]">
            CASES
          </a>
          <a href="/carreiras" className="text-gray-700 hover:text-[#009640]">
            CARREIRAS
          </a>
          <a href="/blog" className="text-gray-700 hover:text-[#009640]">
            BLOG
          </a>
          <Button className="w-full bg-[#009640] hover:bg-[#007a32] text-white">
            Fale com um Especialista
          </Button>
        </nav>
      )}
    </header>
  );
}

