import React from 'react';

interface ProceduralLinesProps {
  position?: 'top' | 'bottom';
  height?: number;
  animated?: boolean;
  className?: string;
}

export default function ProceduralLines({
  position = 'bottom',
  height = 120,
  animated = true,
  className = ''
}: ProceduralLinesProps) {
  const viewBoxHeight = 200;
  const isTop = position === 'top';
  
  // Brandbook colors for procedural lines
  const colors = {
    green: '#41FF28',      // Verde médio (lime)
    blue: '#00BEFF',       // Azul médio
    yellow: '#FFE800',     // Amarelo claro
    orange: '#E8A600'      // Laranja
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      <svg
        viewBox={`0 0 1200 ${viewBoxHeight}`}
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{
          transform: isTop ? 'scaleY(-1)' : 'scaleY(1)',
        }}
      >
        <defs>
          <style>{`
            @keyframes wave1 {
              0%, 100% { d: path('M0,80 Q300,40 600,80 T1200,80 L1200,200 L0,200 Z'); }
              50% { d: path('M0,60 Q300,20 600,60 T1200,60 L1200,200 L0,200 Z'); }
            }
            @keyframes wave2 {
              0%, 100% { d: path('M0,100 Q300,60 600,100 T1200,100 L1200,200 L0,200 Z'); }
              50% { d: path('M0,120 Q300,80 600,120 T1200,120 L1200,200 L0,200 Z'); }
            }
            @keyframes wave3 {
              0%, 100% { d: path('M0,120 Q300,80 600,120 T1200,120 L1200,200 L0,200 Z'); }
              50% { d: path('M0,100 Q300,60 600,100 T1200,100 L1200,200 L0,200 Z'); }
            }
            @keyframes wave4 {
              0%, 100% { d: path('M0,140 Q300,100 600,140 T1200,140 L1200,200 L0,200 Z'); }
              50% { d: path('M0,160 Q300,120 600,160 T1200,160 L1200,200 L0,200 Z'); }
            }
            ${animated ? `
              .wave-1 { animation: wave1 6s ease-in-out infinite; }
              .wave-2 { animation: wave2 7s ease-in-out infinite 0.5s; }
              .wave-3 { animation: wave3 8s ease-in-out infinite 1s; }
              .wave-4 { animation: wave4 9s ease-in-out infinite 1.5s; }
            ` : ''}
          `}</style>
        </defs>

        {/* Wave layers with brandbook colors */}
        <path
          className="wave-1"
          d="M0,80 Q300,40 600,80 T1200,80 L1200,200 L0,200 Z"
          fill={colors.green}
          opacity="0.8"
        />
        <path
          className="wave-2"
          d="M0,100 Q300,60 600,100 T1200,100 L1200,200 L0,200 Z"
          fill={colors.blue}
          opacity="0.7"
        />
        <path
          className="wave-3"
          d="M0,120 Q300,80 600,120 T1200,120 L1200,200 L0,200 Z"
          fill={colors.yellow}
          opacity="0.6"
        />
        <path
          className="wave-4"
          d="M0,140 Q300,100 600,140 T1200,140 L1200,200 L0,200 Z"
          fill={colors.orange}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
