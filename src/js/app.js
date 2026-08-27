/* ==========================================================================
   Girlfriend's Day — Main Orchestrator & App Initialization
   ========================================================================== */

import { CanvasEngine } from './canvasParticles.js';
import { AudioPlayer } from './audioPlayer.js';
import { loadConfigIntoDOM } from './configLoader.js';
import { initGiftsLogic } from './giftsLogic.js';
import { QuizEngine } from './quizEngine.js';
import { initLoveMachine } from './loveMachine.js';
import { initMysteryBoxes } from './mysteryBoxes.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Engines
  const canvasEngine = new CanvasEngine();
  const audioPlayer = new AudioPlayer();

  // Load User Configuration Data
  loadConfigIntoDOM();

  // Elements
  const welcomeScreen = document.getElementById('welcome-screen');
  const openSurpriseBtn = document.getElementById('open-surprise-btn');
  const mainContent = document.getElementById('main-content');
  const mainGiftBox = document.getElementById('main-gift-box');

  const unlockedCountEl = document.getElementById('unlocked-count');
  const progressBarFill = document.getElementById('progress-bar-fill');

  const finalSurpriseBtn = document.getElementById('final-surprise-btn');
  const finalGrandScreen = document.getElementById('final-grand-screen');
  const restartStoryBtn = document.getElementById('restart-story-btn');

  // Welcome Screen CTA Click
  if (openSurpriseBtn) {
    openSurpriseBtn.addEventListener('click', () => {
      canvasEngine.triggerBigHeartFireworks();
      audioPlayer.showStickyBar();
      audioPlayer.play();

      if (welcomeScreen) {
        welcomeScreen.style.opacity = '0';
        welcomeScreen.style.transform = 'scale(1.08)';
        setTimeout(() => {
          welcomeScreen.classList.add('hidden');
          if (mainContent) mainContent.classList.remove('hidden');
        }, 600);
      }
    });
  }

  // Hero Gift Box Click
  if (mainGiftBox) {
    mainGiftBox.addEventListener('click', (e) => {
      canvasEngine.spawnBurst(e.clientX, e.clientY, 15);
      canvasEngine.triggerConfetti();

      const lid = mainGiftBox.querySelector('.gift-box-lid');
      if (lid) {
        lid.style.transform = 'translateY(-50px) rotate(-12deg)';
        setTimeout(() => {
          lid.style.transform = 'translateY(0) rotate(0deg)';
        }, 1200);
      }

      // Smooth scroll to gifts grid
      const giftsSection = document.getElementById('gifts-grid-section');
      if (giftsSection) {
        giftsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Gift Unlock Progress Callback
  function updateProgress(count) {
    if (unlockedCountEl) unlockedCountEl.textContent = `${count} / 7 Unlocked`;
    if (progressBarFill) {
      const pct = Math.round((count / 7) * 100);
      progressBarFill.style.width = `${pct}%`;
    }
  }

  // Initialize 8 Gifts Interactions
  initGiftsLogic(canvasEngine, audioPlayer, updateProgress);

  // Initialize Modals Open/Close Handlers
  document.querySelectorAll('.gift-card').forEach(card => {
    card.addEventListener('click', () => {
      const giftNum = card.getAttribute('data-gift');
      const targetModal = document.getElementById(`modal-gift-${giftNum}`);
      if (targetModal) {
        targetModal.classList.remove('hidden');
        canvasEngine.triggerConfetti();
      }
    });
  });

  // Modal Close Buttons
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.classList.add('hidden');
    });
  });

  // Close modals when clicking overlay background
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.add('hidden');
      }
    });
  });

  // Initialize Quiz Engine
  new QuizEngine(canvasEngine);

  // Initialize Love Machine
  initLoveMachine(canvasEngine);

  // Initialize Mystery Boxes
  initMysteryBoxes(canvasEngine);

  // Section 13: Grand Final Surprise
  if (finalSurpriseBtn) {
    finalSurpriseBtn.addEventListener('click', () => {
      if (finalGrandScreen) {
        finalGrandScreen.classList.remove('hidden');
        canvasEngine.startRosePetalShower();
        canvasEngine.triggerBigHeartFireworks();
      }
    });
  }

  // Section 14: Start Story Again (Replay)
  if (restartStoryBtn) {
    restartStoryBtn.addEventListener('click', () => {
      if (finalGrandScreen) finalGrandScreen.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Reset gift box lid
      const lid = mainGiftBox ? mainGiftBox.querySelector('.gift-box-lid') : null;
      if (lid) lid.style.transform = 'none';

      canvasEngine.triggerConfetti();
    });
  }
});
