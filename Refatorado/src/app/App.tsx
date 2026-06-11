import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'motion/react';

import { type Phase, GIFT_PHASES } from '../types';
import { IntroScreen }    from './screens/IntroScreen';
import { TimelineScreen } from './screens/TimelineScreen';
import { GiftBg }         from './components/GiftBg';
import {
  LockScreen,
  UnlockedScreen,
  DeliveryScreen,
  LoadingScreen,
  FinalScreen,
} from './screens/GiftScreens';

export default function App() {
  const [phase, setPhase] = useState<Phase>('intro');

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Intro — fixed overlay on top of everything */}
      <AnimatePresence>
        {phase === 'intro' && (
          <IntroScreen key="intro" onDone={() => setPhase('timeline')} />
        )}
      </AnimatePresence>

      {/* Timeline */}
      <AnimatePresence mode="wait">
        {phase === 'timeline' && (
          <TimelineScreen key="timeline" onContinue={() => setPhase('lock')} />
        )}

        {/* Gift flow */}
        {GIFT_PHASES.includes(phase) && (
          <div key="gift" style={{ position: 'relative' }}>
            <GiftBg />
            <AnimatePresence mode="wait">
              {phase === 'lock'      && <LockScreen      key="lock"      onUnlock={() => setPhase('unlocked')} />}
              {phase === 'unlocked'  && <UnlockedScreen  key="unlocked"  onClaim={() => setPhase('delivery')} />}
              {phase === 'delivery'  && <DeliveryScreen  key="delivery"  onDeliver={() => setPhase('loading')} />}
              {phase === 'loading'   && <LoadingScreen   key="loading"   onDone={() => setPhase('final')} />}
              {phase === 'final'     && <FinalScreen     key="final"     onRestart={() => setPhase('intro')} />}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
