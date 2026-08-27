/* ==========================================================================
   Girlfriend's Day — Pick A Surprise Mystery Boxes Module
   ========================================================================== */

import { CONFIG } from '../../config.js';

export function initMysteryBoxes(canvasEngine) {
  const boxes = document.querySelectorAll('.mystery-box');
  if (!boxes.length) return;

  boxes.forEach(box => {
    box.addEventListener('click', (e) => {
      const boxId = box.getAttribute('data-box');
      const boxData = CONFIG.mysteryBoxes.find(b => b.id === boxId);
      if (!boxData) return;

      canvasEngine.spawnBurst(e.clientX, e.clientY, 10);

      if (boxData.isRealDate) {
        canvasEngine.triggerBigHeartFireworks();
        alert(`👑 BOX ${boxData.id} OPENED!\n\n${boxData.surprise}`);
      } else {
        canvasEngine.triggerConfetti();
        alert(`${boxData.icon} BOX ${boxData.id} OPENED!\n\n${boxData.surprise}`);
      }
    });
  });
}
