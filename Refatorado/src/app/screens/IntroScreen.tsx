import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Orbs } from '../components/Orbs';
import { Hearts } from '../components/Hearts';
import { NOMES, BADGE_START, BADGE_STEP, LAST_HOLD, TOTAL_DUR } from '../data/content';

interface IntroScreenProps {
  onDone: () => void;
}

export function IntroScreen({ onDone }: IntroScreenProps) {
  const [stage, setStage]       = useState(0);
  const [nameIdx, setNameIdx]   = useState(-1);
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 800),
      setTimeout(() => setStage(2), 1600),
      setTimeout(() => setStage(3), 4000),
      setTimeout(() => setStage(4), 4800),
      setTimeout(() => setStage(5), 5600),
      setTimeout(() => setStage(6), 6400),
      setTimeout(() => setStage(7), 7200),
      setTimeout(() => setStage(8), 8200),
    ];

    const badgeTimers = NOMES.map((_, i) =>
      setTimeout(() => {
        setNameIdx(i);
        setRevealed(i + 1);
      }, BADGE_START + i * BADGE_STEP)
    );

    const exit = setTimeout(onDone, TOTAL_DUR);

    return () => {
      timers.forEach(clearTimeout);
      badgeTimers.forEach(clearTimeout);
      clearTimeout(exit);
    };
  }, []);

  const showingName = nameIdx >= 0 && nameIdx < NOMES.length;

  return (
    <motion.div
      key="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: `radial-gradient(ellipse at 20% 20%, rgba(194,24,91,0.18) 0%, transparent 55%),
                     radial-gradient(ellipse at 80% 80%, rgba(103,58,183,0.14) 0%, transparent 55%),
                     var(--night)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}
    >

      <Orbs list={[
        { width: 500, height: 500, background: 'rgba(194,24,91,0.13)', top: '-80px',    left: '-80px'    },
        { width: 400, height: 400, background: 'rgba(103,58,183,0.10)', bottom: '-60px', right: '-60px'  },
        { width: 260, height: 260, background: 'rgba(233,30,99,0.07)',  top: '45%',      left: '48%'     },
      ]} />
      <Hearts n={20} />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1.5rem', maxWidth: 700, width: '100%' }}>

        <motion.p className="fb"
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ color: 'rgba(255,255,255,0.32)', textTransform: 'uppercase', letterSpacing: '0.5em', fontSize: '0.62rem', marginBottom: '3rem' }}
        >
          Uma história escrita pelo destino
        </motion.p>

        {/* Headline zone */}
        <div style={{ position: 'relative', minHeight: 'clamp(90px,20vw,160px)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.75rem' }}>

          {/* Vinicius */}
          <AnimatePresence>
            {stage >= 1 && stage < 6 && (
              <motion.span className="fd"
                initial={{ x: '-150%', opacity: 0 }}
                animate={{
                  x: stage >= 3 ? '-30%' : '0%',
                  opacity: stage >= 6 ? 0 : 1,
                  scale: stage >= 5 ? 1.05 : 1,
                  filter: stage >= 6 ? 'blur(20px)' : 'blur(0px)',
                }}
                exit={{ opacity: 0, filter: 'blur(20px)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute', right: '52%',
                  fontSize: 'clamp(2.5rem,9vw,5.5rem)', fontWeight: 700,
                  background: 'linear-gradient(135deg,#90caf9,#5c6bc0)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  letterSpacing: '-0.02em', whiteSpace: 'nowrap',
                  textShadow: stage >= 5 ? '0 0 40px rgba(144,202,249,0.6)' : 'none',
                }}
              >
                Vinicius
              </motion.span>
            )}
          </AnimatePresence>

          {/* Bruna */}
          <AnimatePresence>
            {stage >= 2 && stage < 6 && (
              <motion.span className="fd"
                initial={{ x: '150%', opacity: 0 }}
                animate={{
                  x: stage >= 3 ? '30%' : '0%',
                  opacity: stage >= 6 ? 0 : 1,
                  scale: stage >= 5 ? 1.05 : 1,
                  filter: stage >= 6 ? 'blur(20px)' : 'blur(0px)',
                }}
                exit={{ opacity: 0, filter: 'blur(20px)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute', left: '52%',
                  fontSize: 'clamp(2.5rem,9vw,5.5rem)', fontWeight: 700,
                  background: 'linear-gradient(135deg,#f48fb1,#c2185b)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  letterSpacing: '-0.02em', whiteSpace: 'nowrap',
                  textShadow: stage >= 5 ? '0 0 40px rgba(244,143,177,0.6)' : 'none',
                }}
              >
                Bruna
              </motion.span>
            )}
          </AnimatePresence>

          {/* Coração */}
          <AnimatePresence>
            {stage >= 3 && stage < 6 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: stage >= 5 ? [1, 1.3, 1] : [0.9, 1.15, 1],
                  opacity: stage >= 6 ? 0 : [0, 1, 1],
                  rotate: stage >= 5 ? 360 : 0,
                }}
                exit={{ scale: 2, opacity: 0 }}
                transition={{
                  scale: { duration: stage >= 5 ? 0.6 : 0.9, repeat: 0, ease: 'easeInOut' },
                  opacity: { duration: 0.5 },
                  rotate: { duration: 0.6, ease: 'easeOut' },
                }}
                style={{
                  position: 'absolute',
                  fontSize: 'clamp(2.5rem,8vw,4.5rem)',
                  filter: stage >= 5 ? 'drop-shadow(0 0 25px rgba(255,105,180,0.8))' : 'drop-shadow(0 0 15px rgba(255,105,180,0.4))',
                }}
              >
                ❤️
              </motion.div>
            )}
          </AnimatePresence>

          {/* Partículas */}
          <AnimatePresence>
            {stage === 6 && (
              <>
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle    = (i * 360) / 12;
                  const distance = 80 + Math.random() * 40;
                  return (
                    <motion.div
                      key={i}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                      animate={{
                        x: Math.cos((angle * Math.PI) / 180) * distance,
                        y: Math.sin((angle * Math.PI) / 180) * distance,
                        opacity: 0,
                        scale: [0, 1, 0],
                      }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      style={{ position: 'absolute', fontSize: 'clamp(1rem,3vw,2rem)' }}
                    >
                      {['✨', '💫', '🌸', '💕'][i % 4]}
                    </motion.div>
                  );
                })}
              </>
            )}
          </AnimatePresence>

          {/* Nome unificado / apelidos */}
          <AnimatePresence mode="wait">
            {stage >= 7 && !showingName && (
              <motion.span key="unified" className="fd tg"
                initial={{ opacity: 0, scale: 0.5, filter: 'blur(30px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.2, filter: 'blur(15px)', y: -30 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'absolute', fontSize: 'clamp(2.8rem,10vw,6rem)', fontWeight: 700, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}
              >
                Vinicius + Bruna
              </motion.span>
            )}

            {showingName && (
              <motion.h1 key={NOMES[nameIdx]} className="fd tg"
                initial={{ opacity: 0, y: 50, scale: 0.7, filter: 'blur(20px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -40, scale: 1.15, filter: 'blur(12px)' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'absolute', fontSize: 'clamp(3.2rem,13vw,7.5rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}
              >
                {NOMES[nameIdx]}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* Divider */}
        <motion.div
          animate={{ scaleX: stage >= 8 ? 1 : 0, opacity: stage >= 8 ? 1 : 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: 1, maxWidth: 280, margin: '0 auto 1.4rem', background: 'linear-gradient(90deg,transparent,rgba(248,187,208,0.6),transparent)', transformOrigin: 'center' }}
        />

        {/* Tagline */}
        <motion.p className="fd"
          animate={{ opacity: stage >= 8 ? 1 : 0, y: stage >= 8 ? 0 : 15 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{ color: 'rgba(255,255,255,0.42)', fontSize: 'clamp(0.9rem,3vw,1.2rem)', fontStyle: 'italic', fontWeight: 300, marginBottom: '3rem' }}
        >
          Uma conexão única ✨
        </motion.p>

        {/* Badge row */}
        <motion.div
          animate={{ opacity: stage >= 8 ? 1 : 0, y: stage >= 8 ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '0.6rem', minHeight: 120, paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
        >
          <AnimatePresence>
            {NOMES.slice(0, revealed).map((nome, i) => {
              const isActive = i === nameIdx;
              return (
                <motion.div key={nome}
                  initial={{ opacity: 0, scale: 0.4, y: 25, rotateX: -90 }}
                  animate={{ opacity: isActive ? 1 : 0.35, scale: isActive ? 1.1 : 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.6, rotateX: 90 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="fb"
                  style={{
                    padding: '0.35rem 1.1rem', borderRadius: 999,
                    position: 'relative', overflow: 'hidden',
                    background: isActive ? 'linear-gradient(135deg,rgba(233,30,99,0.32),rgba(194,24,91,0.18))' : 'rgba(255,255,255,0.05)',
                    border: isActive ? '1px solid rgba(233,30,99,0.6)' : '1px solid rgba(255,255,255,0.1)',
                    color: isActive ? '#ffc0cb' : 'rgba(255,255,255,0.45)',
                    fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                    fontWeight: isActive ? 600 : 500,
                    boxShadow: isActive ? '0 0 24px rgba(233,30,99,0.35), 0 4px 12px rgba(0,0,0,0.2)' : 'none',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <motion.div
                    initial={{ x: '-150%' }} animate={{ x: '250%' }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)', pointerEvents: 'none' }}
                  />
                  {nome}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Progress bar */}
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: TOTAL_DUR / 1000, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#5c6bc0,#c2185b,#f48fb1)', transformOrigin: 'left' }}
      />
    </motion.div>
  );
}
