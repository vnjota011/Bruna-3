interface DarkCardProps {
  children: React.ReactNode;
  maxW?: number;
  style?: React.CSSProperties;
}

export function DarkCard({ children, maxW = 480, style: sx = {} }: DarkCardProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1.5rem,5vw,3rem) 1.25rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        className="card-dark fb"
        style={{
          borderRadius: '2rem',
          padding: 'clamp(2rem,5vw,3.25rem)',
          width: '100%',
          maxWidth: maxW,
          boxShadow: '0 24px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07)',
          ...sx,
        }}
      >
        {children}
      </div>
    </div>
  );
}
