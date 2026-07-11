import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

export default function SolutionCard({
  icon,
  title,
  description,
  link = "#",
}: SolutionCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#009640] hover:shadow-lg transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a
        href={link}
        className="inline-flex items-center text-[#009640] font-semibold hover:text-[#007a32]"
      >
        Saiba mais <ArrowRight className="ml-2" size={20} />
      </a>
    </div>
  );
}

