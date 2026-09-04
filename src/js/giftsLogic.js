/* ==========================================================================
   Girlfriend's Day — 7 Gifts Interactive Handlers Module
   ========================================================================== */

import { CONFIG } from '../../config.js';

let unlockedGifts = new Set();
let hasRedeemedCoupon = false;
let redeemedCouponTitle = "";
let notifyProgressCallback = null;

export function resetGiftsState() {
  unlockedGifts.clear();
  hasRedeemedCoupon = false;
  redeemedCouponTitle = "";

  // Remove unlocked-card badges
  document.querySelectorAll('.gift-card').forEach(card => {
    card.classList.remove('unlocked-card');
  });

  // Reset Envelope (Gift 1)
  const envelope = document.getElementById('envelope');
  const envelopeSeal = document.getElementById('envelope-seal');
  if (envelope) envelope.classList.remove('open');
  if (envelopeSeal) envelopeSeal.style.display = 'block';

  // Reset Teddy Bear (Gift 2)
  const teddySpeech = document.getElementById('teddy-speech');
  if (teddySpeech) {
    teddySpeech.innerHTML = `<p>${CONFIG.teddy.greeting}</p><p>${CONFIG.teddy.subtext}</p>`;
  }

  // Reset Flowers (Gift 3)
  document.querySelectorAll('.flower-item').forEach(item => {
    item.classList.remove('bloomed', 'bloom-anim');
    const iconEl = item.querySelector('.flower-icon');
    const noteEl = item.querySelector('.flower-note');
    if (iconEl) iconEl.textContent = '🌷';
    if (noteEl) noteEl.classList.add('hidden');
  });

  // Reset Chocolates (Gift 4)
  document.querySelectorAll('.chocolate-cell').forEach(cell => {
    cell.classList.remove('eaten');
  });

  // Reset Coupon Book (Gift 5)
  document.querySelectorAll('.coupon-ticket').forEach(ticket => {
    ticket.classList.remove('redeemed');
  });
  document.querySelectorAll('.redeem-coupon-btn').forEach(b => {
    b.textContent = 'Redeem 🎟️';
    b.disabled = false;
    b.style.opacity = '1';
  });

  // Reset Secret Love Lock (Gift 7)
  const lockError = document.getElementById('lock-error');
  const lockLockedContent = document.getElementById('lock-locked-content');
  const lockUnlockedContent = document.getElementById('lock-unlocked-content');
  const secretInput = document.getElementById('secret-input');

  if (lockError) lockError.classList.add('hidden');
  if (lockLockedContent) lockLockedContent.classList.remove('hidden');
  if (lockUnlockedContent) lockUnlockedContent.classList.add('hidden');
  if (secretInput) secretInput.value = '';

  if (notifyProgressCallback) {
    notifyProgressCallback(0);
  }
}

export function initGiftsLogic(canvasEngine, audioPlayer, onGiftUnlockedCallback) {
  notifyProgressCallback = onGiftUnlockedCallback;

  // Helper to mark gift as unlocked
  function markGiftUnlocked(giftId) {
    if (!unlockedGifts.has(giftId)) {
      unlockedGifts.add(giftId);
      const card = document.getElementById(`gift-card-${giftId}`);
      if (card) {
        card.classList.add('unlocked-card');
      }
      if (onGiftUnlockedCallback) {
        onGiftUnlockedCallback(unlockedGifts.size);
      }
    }
  }

  // --- GIFT 1: LOVE LETTER ---
  const envelope = document.getElementById('envelope');
  const envelopeSeal = document.getElementById('envelope-seal');
  const keepLetterBtn = document.getElementById('keep-letter-btn');

  if (envelopeSeal && envelope) {
    envelopeSeal.addEventListener('click', () => {
      envelope.classList.add('open');
      envelopeSeal.style.display = 'none';
      canvasEngine.triggerConfetti();
      markGiftUnlocked(1);
    });
  }

  if (keepLetterBtn) {
    keepLetterBtn.addEventListener('click', () => {
      alert("💌 Letter saved to your heart forever! 💕");
      canvasEngine.triggerConfetti();
    });
  }

  // --- GIFT 2: VIRTUAL TEDDY BEAR ---
  const teddyHugBtn1 = document.getElementById('teddy-hug-btn-1');
  const teddyHugBtn2 = document.getElementById('teddy-hug-btn-2');
  const teddyBear = document.getElementById('teddy-bear');
  const teddySpeech = document.getElementById('teddy-speech');

  let hugIndex = 0;

  function triggerTeddyHug() {
    markGiftUnlocked(2);
    canvasEngine.spawnBurst(window.innerWidth / 2, window.innerHeight / 2, 12);
    
    if (teddyBear) {
      const leftArm = teddyBear.querySelector('.left-arm');
      const rightArm = teddyBear.querySelector('.right-arm');
      if (leftArm) leftArm.classList.add('teddy-arm-wave-left');
      if (rightArm) rightArm.classList.add('teddy-arm-wave-right');
      
      setTimeout(() => {
        if (leftArm) leftArm.classList.remove('teddy-arm-wave-left');
        if (rightArm) rightArm.classList.remove('teddy-arm-wave-right');
      }, 1200);
    }

    if (teddySpeech) {
      teddySpeech.innerHTML = `<p>${CONFIG.teddy.hugReactions[hugIndex]}</p>`;
      hugIndex = (hugIndex + 1) % CONFIG.teddy.hugReactions.length;
    }
  }

  if (teddyHugBtn1) teddyHugBtn1.addEventListener('click', triggerTeddyHug);
  if (teddyHugBtn2) teddyHugBtn2.addEventListener('click', triggerTeddyHug);

  // --- GIFT 3: NEVER-ENDING FLOWERS ---
  const bouquetContainer = document.getElementById('bouquet-container');
  if (bouquetContainer) {
    bouquetContainer.addEventListener('click', (e) => {
      const item = e.target.closest('.flower-item');
      if (!item) return;

      const idx = item.getAttribute('data-flower-index');
      const flowerData = CONFIG.flowers[idx];
      const iconEl = item.querySelector('.flower-icon');
      const noteEl = item.querySelector('.flower-note');

      if (!item.classList.contains('bloomed')) {
        item.classList.add('bloomed', 'bloom-anim');
        if (iconEl) iconEl.textContent = '🌸';
        if (noteEl) noteEl.classList.remove('hidden');
        canvasEngine.spawnBurst(e.clientX, e.clientY, 8);
        markGiftUnlocked(3);
      } else {
        alert(`${flowerData.title}\n"${flowerData.note}" 💕`);
      }
    });
  }

  // --- GIFT 4: CHOCOLATE BOX ---
  const chocolateGrid = document.getElementById('chocolate-grid');
  if (chocolateGrid) {
    chocolateGrid.addEventListener('click', (e) => {
      const cell = e.target.closest('.chocolate-cell');
      if (!cell) return;

      const idx = cell.getAttribute('data-choc-index');
      const chocData = CONFIG.chocolates[idx];

      cell.classList.add('eaten');
      canvasEngine.spawnBurst(e.clientX, e.clientY, 10);
      markGiftUnlocked(4);

      alert(`🍫 ${chocData.title}\n\nYou Unlocked: ${chocData.reward}! 💕`);
    });
  }

  // --- GIFT 5: COUPON BOOK (ONLY 1 ALLOWED!) ---
  const couponsContainer = document.getElementById('coupons-container');
  if (couponsContainer) {
    couponsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.redeem-coupon-btn');
      if (!btn) return;

      const ticket = btn.closest('.coupon-ticket');
      const couponIdx = ticket ? ticket.getAttribute('data-coupon-index') : null;
      const couponData = couponIdx !== null ? CONFIG.coupons[couponIdx] : null;

      if (hasRedeemedCoupon) {
        alert(`🔒 Coupon limit reached!\n\nYou already redeemed: "${redeemedCouponTitle}"! 💕\nYou can only claim 1 special coupon!`);
        return;
      }

      if (ticket && !ticket.classList.contains('redeemed')) {
        hasRedeemedCoupon = true;
        redeemedCouponTitle = couponData ? couponData.title : "Special Coupon";

        ticket.classList.add('redeemed');
        btn.textContent = 'Redeemed ✓';
        
        // Disable all coupon buttons & update label
        document.querySelectorAll('.redeem-coupon-btn').forEach(b => {
          if (b !== btn) {
            b.textContent = 'Locked 🔒';
            b.disabled = true;
            b.style.opacity = '0.5';
          }
        });

        canvasEngine.triggerConfetti();
        markGiftUnlocked(5);

        alert(`🎟️ SPECIAL COUPON REDEEMED!\n\nYou claimed: "${redeemedCouponTitle}"!\n\nYou only get 1 coupon, and you picked a wonderful one! 💕`);
      }
    });
  }

  // --- GIFT 6: LOVE SONG / PLAYLIST MODAL PLAYER ---
  const modalPlayBtn = document.getElementById('modal-play-btn');
  if (modalPlayBtn) {
    modalPlayBtn.addEventListener('click', () => {
      audioPlayer.togglePlay();
      markGiftUnlocked(6);
    });
  }

  // --- GIFT 7: SECRET LOVE LOCK ---
  const lockForm = document.getElementById('secret-lock-form');
  const secretInput = document.getElementById('secret-input');
  const lockError = document.getElementById('lock-error');
  const lockLockedContent = document.getElementById('lock-locked-content');
  const lockUnlockedContent = document.getElementById('lock-unlocked-content');

  if (lockForm) {
    lockForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const entered = secretInput.value.trim().toLowerCase();
      const target = CONFIG.secretCode.trim().toLowerCase();

      if (entered === target || entered === 'lov ya' || entered === 'love' || entered === '08/11') {
        if (lockError) lockError.classList.add('hidden');
        if (lockLockedContent) lockLockedContent.classList.add('hidden');
        if (lockUnlockedContent) lockUnlockedContent.classList.remove('hidden');

        canvasEngine.triggerBigHeartFireworks();
        markGiftUnlocked(7);
      } else {
        if (lockError) lockError.classList.remove('hidden');
      }
    });
  }
}
