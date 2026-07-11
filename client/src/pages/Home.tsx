import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionCard from "@/components/SolutionCard";
import { Zap, Lightbulb, BarChart3, Code2, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main>
        {/* Hero Section - with background image placeholder */}
        <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-32 overflow-hidden">
          {/* Background placeholder */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-blue-400/20 opacity-40"></div>
          
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  somos o <span className="text-cyan-400">brain.</span>
                </h1>
                <p className="text-2xl text-cyan-300 mb-8 font-light">
                  somos tecnologia.
                </p>
                <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-md">
                  Somos o Instituto de Ciência e Tecnologia do Grupo Algar. Aqui nascem grandes ideias e soluções disruptivas que transformam pessoas e organizações.
                </p>
              </div>
              
              {/* Hero image placeholder */}
              <div className="relative h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-2xl border-2 border-dashed border-cyan-400/40 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-cyan-300 text-sm font-semibold">IMAGEM HERO</p>
                  <p className="text-gray-400 text-xs mt-2">Pessoa com efeitos de tecnologia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Solutions Cards */}
        <section className="bg-white py-16 -mt-12 relative z-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultoria Estratégica</h3>
                <p className="text-gray-700">Transforme sua empresa com nossa expertise em Consulting</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Startups</h3>
                <p className="text-gray-700">Participe dos nossos programas e acelere o crescimento da sua startup</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Treinamentos</h3>
                <p className="text-gray-700">Capacite-se em inovação e métodos ágeis para se tornar um profissional do futuro</p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Center Section - Gradient Green/Yellow */}
        <section className="bg-gradient-to-r from-lime-400 via-green-400 to-yellow-300 py-24">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Logo placeholder */}
              <div className="h-80 bg-white/30 rounded-2xl border-2 border-dashed border-white/50 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-sm font-semibold">LOGO BRAIN 3D</p>
                  <p className="text-white/80 text-xs mt-2">Cores: Azul, Verde, Amarelo</p>
                </div>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  somos um centro de inovação
                </h2>
                <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                  em negócios digitais
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Somos apaixonados por criatividade e nosso objetivo é transformar ideias em soluções que simplifiquem o dia a dia de pessoas e parceiros de negócios.
                </p>
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 font-semibold">
                  CONHEÇA O BRAIN
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Section - White background */}
        <section className="bg-white py-24">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  <span className="text-blue-900">transformação,</span>
                  <br />
                  <span className="text-green-600">inovação e</span>
                  <br />
                  <span className="text-green-600">disrupção</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Ajudamos negócios a evoluir digitalmente, através da implementação de metodologias ágeis e programas de inovação.
                </p>
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-3">
                  SAIBA MAIS
                </Button>
              </div>

              {/* Image placeholder */}
              <div className="h-80 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 text-sm font-semibold">IMAGEM TRANSFORMAÇÃO</p>
                  <p className="text-gray-500 text-xs mt-2">Pessoas em contexto de inovação</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Programs Section */}
        <section className="bg-gray-50 py-24">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image placeholder */}
              <div className="h-80 bg-gray-200 rounded-2xl border-2 border-dashed border-gray-400 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-700 text-sm font-semibold">IMAGEM PROGRAMAS</p>
                  <p className="text-gray-600 text-xs mt-2">Pessoas caminhando juntas</p>
                </div>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  criamos<br />
                  <span className="text-green-600">o futuro dos negócios</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Através dos nossos programas de inovação, caminhamos ao lado dos nossos parceiros rumo ao futuro das organizações.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  SAIBA MAIS
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Verticals Section */}
        <section className="bg-white py-24">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Verticais</h2>
            <p className="text-lg text-gray-700 mb-16 text-center max-w-3xl mx-auto">
              Trabalhamos com o desenvolvimento de soluções inovadoras em quatro grandes temas tecnológicos: IoT, 5G, Digital e Cloud/Edge Computing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {["Agronegócio", "Indústria 4.0", "Saúde", "PME", "Espaços Inteligentes"].map((vertical, idx) => (
                <div key={idx} className="text-center">
                  <div className="h-32 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center mb-4">
                    <p className="text-gray-500 text-xs">ÍCONE</p>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{vertical}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation for Growth Section */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-24">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold text-blue-900 mb-6">
                  inovação para<br />
                  <span className="text-green-600">crescimento</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Preparamos profissionais para o futuro, oferecendo conhecimento, experiências imersivas e ferramentas para desenvolvimento pessoal.
                </p>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
                  SAIBA MAIS
                </Button>
              </div>

              {/* Image placeholder */}
              <div className="h-80 bg-blue-100 rounded-2xl border-2 border-dashed border-blue-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-blue-700 text-sm font-semibold">IMAGEM CRESCIMENTO</p>
                  <p className="text-blue-600 text-xs mt-2">Desenvolvimento profissional</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-24">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Vamos iniciar a inovação da sua empresa?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como o Brain pode transformar sua organização.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg">
              FALE CONOSCO
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
