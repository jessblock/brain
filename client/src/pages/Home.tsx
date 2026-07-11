import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Code, Lightbulb, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Fluent Style with Organic Shapes */}
        <section className="relative overflow-hidden py-32 bg-gradient-to-br from-white via-blue-50 to-white">
          {/* Organic background shapes */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-400/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-yellow-300/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4">
                    <span className="bg-gradient-to-r from-green-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
                      Conectando
                    </span>
                    <br />
                    inteligência
                  </h1>
                  <p className="text-2xl font-medium text-gray-700">
                    Transformando negócios
                  </p>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  Somos o Instituto de Ciência e Tecnologia do Grupo Algar. Aqui nascem grandes ideias e soluções disruptivas que transformam pessoas e organizações.
                </p>
                
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg h-auto rounded-full">
                  Fale com um Especialista <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              {/* Hero image placeholder - Fluent style */}
              <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl overflow-hidden flex items-center justify-center border-2 border-dashed border-blue-300 shadow-xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-gray-600 font-medium">IMAGEM HERO</p>
                  <p className="text-sm text-gray-500">Pessoa com efeitos de tecnologia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section - Vibrant Gradient */}
        <section className="py-20 bg-gradient-to-r from-green-500 via-blue-500 to-yellow-400 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">96+</div>
                <p className="text-sm opacity-90 font-medium">Produtos e Soluções</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">R$ 24,5 MM</div>
                <p className="text-sm opacity-90 font-medium">Meta de Receita</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">&gt;75</div>
                <p className="text-sm opacity-90 font-medium">NPS Score</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
          
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Sobre o Brain</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos um centro de inovação em negócios digitais. Aqui transformamos ideias em ação, conectando tecnologia, pessoas e oportunidades para criar o futuro dos negócios.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section - Fluent Cards */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-green-200/20 to-transparent rounded-full blur-3xl -z-10"></div>
          
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Nossas Soluções</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - Fábrica de Software */}
              <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-500/30 backdrop-blur-sm hover:bg-white/90">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fábrica de Software</h3>
                <p className="text-gray-600 leading-relaxed">
                  Desenvolvemos soluções tecnológicas customizadas que transformam sua visão em produtos inovadores e escaláveis.
                </p>
              </div>
              
              {/* Card 2 - Novos Negócios */}
              <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500/30 backdrop-blur-sm hover:bg-white/90">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Novos Negócios</h3>
                <p className="text-gray-600 leading-relaxed">
                  Identificamos oportunidades de inovação e desenvolvemos estratégias para criar novos modelos de negócio.
                </p>
              </div>
              
              {/* Card 3 - Consultoria */}
              <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-500/30 backdrop-blur-sm hover:bg-white/90">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultoria Estratégica</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transformamos sua empresa com expertise em inovação, transformação digital e desenvolvimento de novos produtos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Fluent Gradient */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Fale com um de nossos especialistas e descubra como podemos ajudar sua empresa a inovar e crescer.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg h-auto rounded-full font-semibold">
              Agende uma Conversa
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
