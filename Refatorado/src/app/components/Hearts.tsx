import { useMemo } from 'react';
import { motion } from 'motion/react';

const SYMBOLS = ['❤️', '🌸', '✨', '💫'] as const;

interface HeartsProps {
  n?: number;
}

export function Hearts({ n = 18 }: HeartsProps) {
  const items = useMemo(() =>
    Array.from({ length: n }).map((_, i) => ({
      left: Math.random() * 100,
      fontSize: 11 + Math.random() * 13,
      xOffset: (Math.random() - 0.5) * 90,
      duration: 9 + Math.random() * 6,
      delay: i * 0.45,
      symbol: SYMBOLS[i % SYMBOLS.length],
    })),
    [n]
  );

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {items.map((it, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: -820,
            x: [0, it.xOffset, 0],
          }}
          transition={{
            duration: it.duration,
            repeat: Infinity,
            delay: it.delay,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${it.left}%`,
            bottom: -16,
            fontSize: it.fontSize,
            userSelect: 'none',
          }}
        >
          {it.symbol}
        </motion.span>
      ))}
    </div>
  );
}
