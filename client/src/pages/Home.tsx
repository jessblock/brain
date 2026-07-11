import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Code, Lightbulb, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProceduralLines from "@/components/ProceduralLines";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Fluent Style with Organic Shapes */}
        <section className="relative overflow-hidden py-32 bg-gradient-to-br from-white via-blue-50 to-white">
          {/* Organic background shapes */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-yellow-300/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
          
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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
                
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Fale com um Especialista <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              {/* Hero image - Fluent 3D shape */}
              <div className={`relative h-96 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                <img 
                  src="/manus-storage/hero-connection_69896bf4.png" 
                  alt="Brain Fluent Shape" 
                  className="w-full h-full object-contain drop-shadow-2xl hover:drop-shadow-none transition-all duration-500 animate-bounce"
                  style={{animationDuration: "3s"}}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section - Vibrant Gradient with Fluent Cards */}
        <section className="py-20 bg-gradient-to-r from-green-500 via-blue-500 to-yellow-400 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "96+", label: "Produtos e Soluções" },
                { number: "R$ 24,5 MM", label: "Meta de Receita" },
                { number: ">75", label: "NPS Score" }
              ].map((metric, idx) => (
                <div 
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${idx * 0.2}s both`
                  }}
                >
                  <div className="text-5xl font-bold mb-2">{metric.number}</div>
                  <p className="text-sm opacity-90 font-medium">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
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

        {/* Procedural Lines Divider */}
        <ProceduralLines position="bottom" height={100} animated={true} />

        {/* Solutions Section - Fluent Cards with Images */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-green-200/20 to-transparent rounded-full blur-3xl -z-10"></div>
          
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Nossas Soluções</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Fábrica de Software", 
                  desc: "Desenvolvemos soluções tecnológicas customizadas que transformam sua visão em produtos inovadores e escaláveis.",
                  icon: Code,
                  image: "/manus-storage/software-factory_b6c97dfb.png",
                  gradient: "from-green-400 to-blue-500"
                },
                { 
                  title: "Novos Negócios", 
                  desc: "Identificamos oportunidades de inovação e desenvolvemos estratégias para criar novos modelos de negócio.",
                  icon: Lightbulb,
                  image: "/manus-storage/innovation-bulb_db89e0d4.png",
                  gradient: "from-blue-400 to-yellow-500"
                },
                { 
                  title: "Consultoria Estratégica", 
                  desc: "Transformamos sua empresa com expertise em inovação, transformação digital e desenvolvimento de novos produtos.",
                  icon: Briefcase,
                  image: "/manus-storage/strategy-growth_379de4c6.png",
                  gradient: "from-yellow-400 to-green-500"
                }
              ].map((solution, idx) => (
                <div 
                  key={idx}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-500/30 hover:bg-white hover:scale-105"
                  style={{
                    animation: `slideInUp 0.8s ease-out ${idx * 0.15}s both`
                  }}
                >
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden relative">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
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
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg h-auto rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Agende uma Conversa
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
