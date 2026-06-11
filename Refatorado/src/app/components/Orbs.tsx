interface OrbProps extends React.CSSProperties {}

interface OrbsProps {
  list: OrbProps[];
}

export function Orbs({ list }: OrbsProps) {
  return (
    <>
      {list.map((o, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            filter: 'blur(90px)',
            pointerEvents: 'none',
            ...o,
          }}
        />
      ))}
    </>
  );
}
