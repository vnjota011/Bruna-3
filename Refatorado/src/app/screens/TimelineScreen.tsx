import { motion } from 'motion/react';
import { Orbs } from '../components/Orbs';
import { Hearts } from '../components/Hearts';
import { Btn } from '../components/Btn';
import { momentos, type Momento } from '../data/content';

/* ── TLCard ── */
function TLCard({ item, isLeft }: { item: Momento; isLeft: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -55 : 55, y: 16 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="card-dark"
      style={{ width: 'clamp(280px, calc(50% - 4rem), 455px)', marginLeft: isLeft ? '0' : 'auto', marginRight: isLeft ? 'auto' : '0', borderRadius: '1.5rem', overflow: 'hidden' }}
    >
      <div style={{ padding: '1.5rem 1.75rem', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
          <span style={{ fontSize: '1.9rem' }}>{item.emoji}</span>
          <h3 className="fd" style={{ fontSize: 'clamp(1.15rem,3.5vw,1.45rem)', fontWeight: 600, color: '#fff', lineHeight: 1.2, margin: 0 }}>{item.titulo}</h3>
        </div>
        <p className="fb" style={{ color: 'rgba(255,255,255,0.52)', fontSize: '0.87rem', lineHeight: 1.72 }}>{item.descricao}</p>
        <div className="shimmer-bar" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1 }} />
      </div>
    </motion.div>
  );
}

/* ── TimelineScreen ── */
interface TimelineScreenProps {
  onContinue: () => void;
}

export function TimelineScreen({ onContinue }: TimelineScreenProps) {
  return (
    <motion.div
      key="timeline"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1 }}
      style={{ minHeight: '100vh', background: 'linear-gradient(180deg,var(--night) 0%,var(--dusk) 45%,var(--deep) 80%,#1a0d25 100%)', color: '#fff', position: 'relative', overflow: 'hidden' }}
    >
      <Orbs list={[
        { width: 520, height: 520, background: 'rgba(194,24,91,0.11)',  top: '-90px',    left: '-90px'  },
        { width: 420, height: 420, background: 'rgba(103,58,183,0.09)', top: '32%',      right: '-75px' },
        { width: 360, height: 360, background: 'rgba(194,24,91,0.07)',  bottom: '8%',    left: '22%'    },
      ]} />
      <Hearts n={24} />

      {/* Hero */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: 'clamp(4.5rem,11vw,8rem) 1.5rem 2.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.38rem 1.15rem', borderRadius: 999, border: '1px solid rgba(194,24,91,0.4)', background: 'rgba(194,24,91,0.1)' }}
        >
          <span className="fb" style={{ color: 'rgba(255,165,165,0.85)', fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
            ❤️ Nossa Linha do Tempo
          </span>
        </motion.div>

        <motion.h1 className="fd"
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}
          style={{ fontSize: 'clamp(2.8rem,9vw,6rem)', fontWeight: 700, lineHeight: 1.06, letterSpacing: '-0.02em' }}
        >
          Cada momento<br />
          <span className="tgr">importa</span>
        </motion.h1>

        <motion.p className="fd"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ color: 'rgba(255,255,255,0.42)', marginTop: '1.2rem', fontSize: 'clamp(1rem,2.5vw,1.25rem)', fontStyle: 'italic', fontWeight: 300 }}
        >
          Cada capítulo da nossa história, eternizado.
        </motion.p>
      </div>

      {/* Cards */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1000, margin: '0 auto', padding: '0 1.25rem 5rem' }}>
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom,rgba(194,24,91,0.55),rgba(156,39,176,0.25))', transform: 'translateX(-50%)', display: 'none' }} className="tl-line" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
          {momentos.map((item, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <TLCard item={item} isLeft={i % 2 === 0} />
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.25 }}
                viewport={{ once: true }}
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 24, height: 24, display: 'grid', placeItems: 'center', fontSize: '0.95rem', color: '#fff', background: 'rgba(233,30,99,0.95)', borderRadius: 999, boxShadow: '0 0 12px rgba(233,30,99,0.25)', animation: 'pglow 2.5s infinite' }}
                className="tl-dot"
              >
                ❤️
              </motion.span>
            </div>
          ))}
        </div>

      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1.25rem clamp(4rem,10vw,7rem)' }}
      >
        <div style={{ width: 1, height: 75, background: 'linear-gradient(to bottom,rgba(194,24,91,0.5),rgba(233,30,99,0.85))', marginBottom: '2.5rem' }} />

        <div className="card-dark" style={{ borderRadius: '2rem', padding: 'clamp(2rem,5vw,3rem)', maxWidth: 520, width: '100%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <Orbs list={[{ width: 180, height: 180, background: 'rgba(233,30,99,0.11)', top: '-40px', right: '-40px' }]} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }} style={{ fontSize: 'clamp(3rem,10vw,5rem)', marginBottom: '1.5rem' }}>🎁</motion.div>
            <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,5vw,2.75rem)', fontWeight: 700, marginBottom: '0.875rem', lineHeight: 1.15, color: '#fff' }}>
              Nossa história{' '}<span className="tgr" style={{ fontStyle: 'italic' }}>continua…</span>
            </h2>
            <p className="fb" style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.9rem', lineHeight: 1.72, marginBottom: '2rem' }}>
              Tem uma surpresa muito especial esperando por você.<br />Preparei com todo o meu amor e carinho. ✨
            </p>
            <Btn onClick={onContinue}>Ver minha surpresa ❤️</Btn>
          </div>
        </div>

        <p className="fb" style={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.72rem', marginTop: '2rem', letterSpacing: '0.06em' }}>
          Feito com ❤️ para eternizar momentos especiais
        </p>
      </motion.div>
      {/* imagens e modal removidos — agora as cartas exibem título e história diretamente */}

      <style>{`
        .tl-line { display: none !important; }
        .tl-dot  { display: none !important; }

        @media(min-width:768px){
          .tl-line { display: block !important; }
          .tl-dot  { display: grid !important; }
        }
      `}</style>
    </motion.div>
  );
}
