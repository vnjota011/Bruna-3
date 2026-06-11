import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DarkCard } from '../components/DarkCard';
import { Btn } from '../components/Btn';
import { ERR_MSGS, HINTS, LOAD_MSGS, CORRECT_PASSWORD } from '../data/content';

/* ─────────────────────────────────────────────────────
   LockScreen
───────────────────────────────────────────────────── */
interface LockScreenProps {
  onUnlock: () => void;
}

export function LockScreen({ onUnlock }: LockScreenProps) {
  const [pw, setPw]   = useState('');
  const [err, setErr] = useState('');

  const submit = () => {
    const typed = pw.trim();
    if (!typed) {
      setErr('Digite a senha antes de tentar ❤️');
      return;
    }

    if (typed === CORRECT_PASSWORD) {
      setErr('');
      onUnlock();
    } else {
      setErr(ERR_MSGS[Math.floor(Math.random() * ERR_MSGS.length)]);
    }
  };

  return (
    <motion.div key="lock" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.6 }}>
      <DarkCard>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ fontSize: 'clamp(3.5rem,12vw,5rem)', marginBottom: '1.25rem' }}
          >🔒</motion.div>
          <h1 className="fd" style={{ fontSize: 'clamp(1.8rem,6vw,2.5rem)', fontWeight: 700, color: '#f8bbd0', marginBottom: '0.5rem' }}>Cadeado do Amor ❤️</h1>
          <p className="fb" style={{ color: 'rgba(248,187,208,0.6)', fontSize: '0.875rem' }}>
            Digite a senha secreta para desbloquear algo especial ❤️
          </p>
        </div>

        <input
          type="password" value={pw}
          onChange={e => { setPw(e.target.value); if (err) setErr(''); }}
          onKeyDown={e => e.key === 'Enter' && submit()}
          placeholder="Digite a senha"
          style={{ width: '100%', padding: '1rem 1.25rem', borderRadius: '0.875rem', border: '2px solid rgba(233,30,99,0.25)', background: 'rgba(255,255,255,0.05)', color: '#f8bbd0', fontFamily: 'DM Sans,sans-serif', fontSize: 'clamp(1rem,3vw,1.15rem)', textAlign: 'center', letterSpacing: '0.3em', outline: 'none', marginBottom: '1rem', boxSizing: 'border-box', transition: 'border-color 0.25s' }}
          onFocus={e => (e.target.style.borderColor = 'rgba(233,30,99,0.6)')}
          onBlur={e  => (e.target.style.borderColor = 'rgba(233,30,99,0.25)')}
        />

        <div style={{ marginBottom: '1.5rem' }}><Btn onClick={submit}>Desbloquear ❤️</Btn></div>

        <AnimatePresence>
          {err && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
              style={{ background: 'rgba(233,30,99,0.12)', border: '1px solid rgba(233,30,99,0.3)', borderRadius: '0.875rem', padding: '0.875rem 1.25rem', color: '#f48fb1', fontSize: '0.85rem', textAlign: 'center', marginBottom: '1.25rem' }}>
              {err}
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '0.875rem', padding: '1.25rem 1.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="fb" style={{ color: 'rgba(248,187,208,0.7)', fontWeight: 600, fontSize: '0.75rem', textAlign: 'center', marginBottom: '0.875rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Pequenas dicas 👀</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {HINTS.map((h, i) => (
              <li key={i} className="fb" style={{ color: 'rgba(248,187,208,0.5)', fontSize: '0.82rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: 'rgba(233,30,99,0.7)', marginTop: 2 }}>•</span>{h}
              </li>
            ))}
          </ul>
        </div>
      </DarkCard>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────
   UnlockedScreen
───────────────────────────────────────────────────── */
interface UnlockedScreenProps {
  onClaim: () => void;
}

export function UnlockedScreen({ onClaim }: UnlockedScreenProps) {
  return (
    <motion.div key="unlocked" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.08 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
      <DarkCard>
        <div style={{ textAlign: 'center' }}>
          <motion.div animate={{ rotate: [0, -12, 12, -8, 8, 0], scale: [1, 1.08, 1] }} transition={{ duration: 0.9, delay: 0.3 }} style={{ fontSize: 'clamp(4rem,14vw,6rem)', marginBottom: '1.5rem' }}>🎁</motion.div>
          <motion.h1 className="fd" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{ fontSize: 'clamp(1.8rem,6vw,2.6rem)', fontWeight: 700, color: '#f8bbd0', marginBottom: '0.875rem', lineHeight: 1.2 }}>
            Você desbloqueou um presente ❤️
          </motion.h1>
          <motion.p className="fb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
            style={{ color: 'rgba(248,187,208,0.58)', marginBottom: '2.25rem', fontSize: '0.92rem', lineHeight: 1.65 }}>
            Algo preparado com carinho especialmente para você ✨
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            <Btn onClick={onClaim}>Resgatar Presente ❤️</Btn>
          </motion.div>
        </div>
      </DarkCard>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────
   DeliveryScreen
───────────────────────────────────────────────────── */
interface DeliveryScreenProps {
  onDeliver: () => void;
}

export function DeliveryScreen({ onDeliver }: DeliveryScreenProps) {
  const [msg, setMsg] = useState('');

  return (
    <motion.div key="delivery" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.6 }}>
      <DarkCard maxW={540}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 className="fd" style={{ fontSize: 'clamp(1.8rem,6vw,2.5rem)', fontWeight: 700, color: '#f8bbd0', marginBottom: '0.5rem' }}>Escolha como receber ❤️</h1>
          <p className="fb" style={{ color: 'rgba(248,187,208,0.5)', fontSize: '0.875rem' }}>Seu presente está pronto e esperando por você 🎁</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Opção 1 — Retirar no local */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: -12, left: 16, zIndex: 2, background: 'linear-gradient(135deg,#e91e63,#c2185b)', borderRadius: 999, padding: '0.22rem 0.85rem', fontSize: '0.68rem', color: '#fff', fontFamily: 'DM Sans,sans-serif', fontWeight: 600, letterSpacing: '0.05em' }}>
              Melhor escolha 👀
            </div>
            <div style={{ border: '2px solid rgba(233,30,99,0.28)', borderRadius: '1.25rem', padding: '1.75rem 1.5rem 1.5rem', background: 'rgba(233,30,99,0.07)' }}>
              <div style={{ marginBottom: '1rem' }}>
                <Btn onClick={() => setMsg('❌ O entregador se recusou a deixar você retirar no local 😭 Ele disse que faz questão ABSOLUTA de entregar pessoalmente porque treinou falas românticas por horas ❤️')}>
                  📍 Retirar no local
                </Btn>
              </div>
              <p className="fb" style={{ color: 'rgba(248,187,208,0.75)', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.25rem' }}>R. B, 51 - Palestina, Aracaju - SE, 49060-676</p>
              <p className="fb" style={{ color: 'rgba(248,187,208,0.5)', fontSize: '0.78rem' }}>📏 Aproximadamente 10km de distância</p>
              <p className="fb" style={{ color: 'rgba(248,187,208,0.42)', fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'italic' }}>💌 Dizem que retirar pessoalmente libera acesso a abraços exclusivos e bônus de carinho ilimitado 👀</p>
            </div>
          </div>

          {/* Opção 2 — Receber em casa */}
          <div style={{ border: '2px solid rgba(255,255,255,0.08)', borderRadius: '1.25rem', padding: '1.5rem', background: 'rgba(255,255,255,0.03)' }}>
            <div style={{ marginBottom: '1rem' }}>
              <Btn onClick={onDeliver}>🚗 Receber em casa</Btn>
            </div>
            <p className="fb" style={{ color: 'rgba(248,187,208,0.72)', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.25rem' }}>Seu entregador irá até você ❤️</p>
            <p className="fb" style={{ color: 'rgba(248,187,208,0.45)', fontSize: '0.78rem', fontStyle: 'italic' }}>💋 Taxa de entrega: alguns beijos e muito amor</p>
          </div>
        </div>

        <AnimatePresence>
          {msg && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              style={{ marginTop: '1.25rem', background: 'rgba(233,30,99,0.12)', border: '1px solid rgba(233,30,99,0.3)', borderRadius: '0.875rem', padding: '1rem 1.25rem', color: '#f48fb1', fontSize: '0.85rem', textAlign: 'center' }}>
              {msg}
            </motion.div>
          )}
        </AnimatePresence>
      </DarkCard>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────
   LoadingScreen
───────────────────────────────────────────────────── */
interface LoadingScreenProps {
  onDone: () => void;
}

export function LoadingScreen({ onDone }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [mIdx, setMIdx]         = useState(0);

  useEffect(() => {
    const pIv = setInterval(() => setProgress(p => (p >= 100 ? 100 : p + 1)), 96);
    const mIv = setInterval(() => setMIdx(p => (p + 1) % LOAD_MSGS.length), 2400);
    const t   = setTimeout(onDone, 10000);
    return () => { clearInterval(pIv); clearInterval(mIv); clearTimeout(t); };
  }, []);

  return (
    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
      <DarkCard>
        <div style={{ textAlign: 'center' }}>
          <motion.div animate={{ scale: [1, 1.12, 1], rotate: [0, 4, -4, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} style={{ fontSize: 'clamp(3.5rem,12vw,5rem)', marginBottom: '1.5rem' }}>🎁</motion.div>
          <h1 className="fd" style={{ fontSize: 'clamp(1.6rem,5vw,2.25rem)', fontWeight: 700, color: '#f8bbd0', marginBottom: '2rem' }}>Preparando seu presente ❤️</h1>

          <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 999, height: 8, overflow: 'hidden', marginBottom: '1rem' }}>
            <motion.div
              animate={{ width: `${progress}%` }} transition={{ duration: 0.35 }}
              style={{ height: '100%', borderRadius: 999, background: 'linear-gradient(90deg,#f48fb1,#e91e63)', boxShadow: '0 0 14px rgba(233,30,99,0.45)', position: 'relative' }}
            >
              <div className="shimmer-bar" style={{ position: 'absolute', inset: 0, borderRadius: 999 }} />
            </motion.div>
          </div>

          <p className="fb" style={{ color: 'rgba(248,187,208,0.45)', fontSize: '0.76rem', marginBottom: '1.5rem' }}>{progress}%</p>

          <AnimatePresence mode="wait">
            <motion.p key={mIdx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45 }}
              className="fb"
              style={{ color: 'rgba(248,187,208,0.7)', fontSize: 'clamp(0.85rem,2.5vw,0.95rem)', fontWeight: 500, lineHeight: 1.65 }}>
              {LOAD_MSGS[mIdx]}
            </motion.p>
          </AnimatePresence>
        </div>
      </DarkCard>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────
   FinalScreen
───────────────────────────────────────────────────── */
interface FinalScreenProps {
  onRestart: () => void;
}

export function FinalScreen({ onRestart }: FinalScreenProps) {
  return (
    <motion.div key="final" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>
      <DarkCard>
        <div style={{ textAlign: 'center' }}>
          <motion.div animate={{ scale: [1, 1.18, 1] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} style={{ fontSize: 'clamp(4rem,14vw,6rem)', marginBottom: '1.5rem' }}>❤️</motion.div>
          <h1 className="fd" style={{ fontSize: 'clamp(2rem,7vw,3rem)', fontWeight: 700, color: '#f8bbd0', marginBottom: '0.875rem', lineHeight: 1.15 }}>Obrigado por existir</h1>
          <p className="fb" style={{ color: 'rgba(248,187,208,0.58)', fontSize: 'clamp(0.88rem,2.5vw,1rem)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Você é o melhor presente que a vida poderia me dar ❤️
          </p>
          <div style={{ background: 'rgba(233,30,99,0.08)', border: '1px solid rgba(233,30,99,0.22)', borderRadius: '1rem', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
            <p className="fb" style={{ color: 'rgba(248,187,208,0.62)', fontSize: '0.85rem', lineHeight: 1.72 }}>
              ⏳ Agora aguarde só mais um pouquinho...<br />
              Seu presente chegará o mais rápido possível com muito amor, carinho e provavelmente um entregador emocionado ❤️
            </p>
          </div>
          <Btn onClick={onRestart}>Reviver experiência ❤️</Btn>
        </div>
      </DarkCard>
    </motion.div>
  );
}
