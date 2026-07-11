interface MetricCardProps {
  number: string;
  label: string;
}

export default function MetricCard({ number, label }: MetricCardProps) {
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FFC300] via-[#009FE3] to-[#009640] bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <p className="text-white text-lg">{label}</p>
    </div>
  );
}
