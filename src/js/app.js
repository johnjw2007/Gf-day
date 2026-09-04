/* ==========================================================================
   Girlfriend's Day — Main Orchestrator & App Initialization
   ========================================================================== */

import { CanvasEngine } from './canvasParticles.js';
import { AudioPlayer } from './audioPlayer.js';
import { loadConfigIntoDOM } from './configLoader.js';
import { initGiftsLogic, resetGiftsState } from './giftsLogic.js';
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
  const globalResetBtn = document.getElementById('global-reset-btn');

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

  // Initialize Gifts Interactions
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
  const quizEngine = new QuizEngine(canvasEngine);

  // Initialize Love Machine
  initLoveMachine(canvasEngine);

  // Initialize Mystery Boxes
  initMysteryBoxes(canvasEngine);

  // MASTER RESET FUNCTION
  function resetEverything() {
    // 1. Reset Gifts State (envelope, teddy, flowers, chocolates, coupons, secret lock)
    resetGiftsState();

    // 2. Reset Quiz Engine
    quizEngine.resetQuiz();

    // 3. Close any open modals
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.add('hidden');
    });

    // 4. Hide Final Surprise overlay
    if (finalGrandScreen) finalGrandScreen.classList.add('hidden');

    // 5. Reset Reasons Display
    const reasonText = document.getElementById('reason-text');
    if (reasonText) reasonText.textContent = "Click the button below to see why you're so loved... 💕";

    // 6. Reset Gift Box Lid
    const lid = mainGiftBox ? mainGiftBox.querySelector('.gift-box-lid') : null;
    if (lid) lid.style.transform = 'none';

    // 7. Show Welcome Screen again
    if (welcomeScreen) {
      welcomeScreen.classList.remove('hidden');
      welcomeScreen.style.opacity = '1';
      welcomeScreen.style.transform = 'scale(1)';
    }

    // 8. Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    canvasEngine.triggerConfetti();
  }

  // Bind Global Reset Button & Final Surprise Restart Button
  if (globalResetBtn) {
    globalResetBtn.addEventListener('click', () => {
      if (confirm("Reset all gifts and start the story again from the beginning? 💕")) {
        resetEverything();
      }
    });
  }

  if (restartStoryBtn) {
    restartStoryBtn.addEventListener('click', () => {
      resetEverything();
    });
  }

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
});
