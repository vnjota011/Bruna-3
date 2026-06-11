import { motion } from 'motion/react';

interface BtnProps {
  onClick: () => void;
  children: React.ReactNode;
  full?: boolean;
}

export function Btn({ onClick, children, full = true }: BtnProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: '0 0 36px rgba(233,30,99,0.55)' }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      style={{
        width: full ? '100%' : undefined,
        padding: '1.05rem 2rem',
        borderRadius: '0.9rem',
        border: 'none',
        background: 'linear-gradient(135deg,#e91e63,#c2185b)',
        color: '#fff',
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 600,
        fontSize: 'clamp(0.9rem,2.5vw,1rem)',
        cursor: 'pointer',
        letterSpacing: '0.03em',
        boxShadow: '0 6px 28px rgba(194,24,91,0.4)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </motion.button>
  );
}
