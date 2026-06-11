import { Orbs } from '../components/Orbs';
import { Hearts } from '../components/Hearts';

export function GiftBg() {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 0,
        background: `radial-gradient(ellipse at 15% 15%, rgba(194,24,91,0.16) 0%, transparent 50%),
                     radial-gradient(ellipse at 85% 85%, rgba(103,58,183,0.12) 0%, transparent 50%),
                     var(--night)`,
        overflow: 'hidden',
      }}
    >
      <Orbs list={[
        { width: 420, height: 420, background: 'rgba(194,24,91,0.14)',  top: '-70px',    left: '-70px'  },
        { width: 340, height: 340, background: 'rgba(103,58,183,0.10)', bottom: '-50px', right: '-50px' },
        { width: 240, height: 240, background: 'rgba(233,30,99,0.07)',  top: '42%',      left: '45%'    },
      ]} />
      <Hearts n={18} />
    </div>
  );
}
