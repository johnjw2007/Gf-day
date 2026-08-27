/* ==========================================================================
   Girlfriend's Day — "Reasons I Love You" Machine Module
   ========================================================================== */

import { CONFIG } from '../../config.js';

export function initLoveMachine(canvasEngine) {
  const dispenseBtn = document.getElementById('dispense-reason-btn');
  const reasonText = document.getElementById('reason-text');
  const reasonDisplay = document.getElementById('reason-display');

  if (!dispenseBtn || !reasonText) return;

  dispenseBtn.addEventListener('click', () => {
    const list = CONFIG.reasonsList;
    const randomIndex = Math.floor(Math.random() * list.length);
    const chosenReason = list[randomIndex];

    reasonText.style.opacity = 0;
    setTimeout(() => {
      reasonText.textContent = chosenReason;
      reasonText.style.opacity = 1;
    }, 200);

    canvasEngine.spawnBurst(window.innerWidth / 2, window.innerHeight / 2, 12);
    canvasEngine.triggerConfetti();

    if (reasonDisplay) {
      reasonDisplay.style.transform = 'scale(1.05)';
      setTimeout(() => { reasonDisplay.style.transform = 'scale(1)'; }, 250);
    }
  });
}
