
import { FC } from 'react';

export const DynamicBackground: FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 via-gray-800/10 to-transparent backdrop-blur-[1px]" />
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dotPattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1"
              className="fill-gray-400/20"
            />
          </pattern>
          <mask id="fade">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#gradient)"
            />
          </mask>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="black" stopOpacity="0.3" />
            <stop offset="50%" stopColor="black" stopOpacity="0.1" />
            <stop offset="100%" stopColor="black" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#dotPattern)"
          mask="url(#fade)"
          className="animate-drift"
        />
      </svg>
    </div>
  );
};
