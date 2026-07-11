export default function Footer() {
  return (
    <footer className="bg-[#161616] text-white py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Institucional */}
          <div>
            <h4 className="font-bold mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white">Sobre o Brain</a></li>
              <li><a href="/" className="hover:text-white">Laboratórios</a></li>
              <li><a href="/" className="hover:text-white">Open Innovation</a></li>
              <li><a href="/" className="hover:text-white">Parcerias</a></li>
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="font-bold mb-4">Soluções</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white">Fábrica de Software</a></li>
              <li><a href="/" className="hover:text-white">Novos Produtos</a></li>
              <li><a href="/" className="hover:text-white">Consultoria</a></li>
            </ul>
          </div>

          {/* Comunidade */}
          <div>
            <h4 className="font-bold mb-4">Comunidade</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white">Academia</a></li>
              <li><a href="/" className="hover:text-white">Blog</a></li>
              <li><a href="/" className="hover:text-white">Carreiras</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white">Contato</a></li>
              <li><a href="/" className="hover:text-white">Imprensa</a></li>
              <li><a href="/" className="hover:text-white">Privacidade</a></li>
              <li><a href="/" className="hover:text-white">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright 2026 Brain Inovação</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/" className="hover:text-white">LinkedIn</a>
            <a href="/" className="hover:text-white">Instagram</a>
            <a href="/" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

