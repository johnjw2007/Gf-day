/* ==========================================================================
   Girlfriend's Day — Config Binding Loader
   ========================================================================== */

import { CONFIG } from '../../config.js';

export function loadConfigIntoDOM() {
  // 1. Final Grand Screen Name
  const finalNameEl = document.getElementById('final-girlfriend-name');
  if (finalNameEl) {
    finalNameEl.textContent = `Happy Girlfriend's Day, ${CONFIG.girlfriendName} 🎀`;
  }

  // 2. Love Letter
  const letterSalutation = document.getElementById('letter-salutation');
  const letterBody = document.getElementById('letter-body');
  const letterClosing = document.getElementById('letter-closing');

  if (letterSalutation) letterSalutation.textContent = CONFIG.loveLetter.salutation;
  if (letterClosing) letterClosing.textContent = CONFIG.loveLetter.closing;
  if (letterBody) {
    letterBody.innerHTML = CONFIG.loveLetter.bodyParagraphs
      .map(p => `<p style="margin-bottom: 12px;">${p}</p>`)
      .join('');
  }

  // 3. Teddy Bear Speeches
  const teddy1 = document.getElementById('teddy-text-1');
  const teddy2 = document.getElementById('teddy-text-2');
  if (teddy1) teddy1.textContent = CONFIG.teddy.greeting;
  if (teddy2) teddy2.textContent = CONFIG.teddy.subtext;

  // 4. Flowers
  const bouquetContainer = document.getElementById('bouquet-container');
  if (bouquetContainer) {
    bouquetContainer.innerHTML = CONFIG.flowers.map((f, i) => `
      <div class="flower-item" data-flower-index="${i}">
        <span class="flower-icon">🌷</span>
        <div class="flower-note hidden">${f.note}</div>
      </div>
    `).join('');
  }

  // 5. Chocolate Box
  const chocolateGrid = document.getElementById('chocolate-grid');
  if (chocolateGrid) {
    chocolateGrid.innerHTML = CONFIG.chocolates.map((c, i) => `
      <div class="chocolate-cell" data-choc-index="${i}">
        <span class="chocolate-icon">${c.icon}</span>
        <span class="chocolate-title">${c.title}</span>
      </div>
    `).join('');
  }

  // 6. Coupons List
  const couponsContainer = document.getElementById('coupons-container');
  if (couponsContainer) {
    couponsContainer.innerHTML = CONFIG.coupons.map((c, i) => `
      <div class="coupon-ticket" data-coupon-index="${i}">
        <div class="coupon-left">
          <span class="coupon-icon">${c.icon}</span>
          <div class="coupon-info">
            <h4>${c.title}</h4>
            <p>Code: ${c.code}</p>
          </div>
        </div>
        <button class="btn-primary redeem-coupon-btn">Redeem 🎟️</button>
      </div>
    `).join('');
  }

  // 7. Playlist Track Binding
  if (CONFIG.playlist && CONFIG.playlist.length > 0) {
    const firstTrack = CONFIG.playlist[0];
    const modalAlbumArt = document.getElementById('modal-album-art');
    const modalSongTitle = document.getElementById('modal-song-title');
    const modalArtist = document.getElementById('modal-artist');
    const modalQuote = document.getElementById('modal-quote');

    if (modalAlbumArt) modalAlbumArt.src = firstTrack.albumArt;
    if (modalSongTitle) modalSongTitle.textContent = firstTrack.title;
    if (modalArtist) modalArtist.textContent = firstTrack.artist;
    if (modalQuote) modalQuote.textContent = firstTrack.quote;
  }

  // 8. Secret Lock Hint
  const lockHint = document.getElementById('lock-hint');
  if (lockHint && CONFIG.secretHint) {
    lockHint.textContent = `Hint: ${CONFIG.secretHint}`;
  }

  // 9. Future Memories Polaroids
  const futureGrid = document.getElementById('future-grid');
  if (futureGrid) {
    futureGrid.innerHTML = CONFIG.futureMemories.map(m => `
      <div class="future-polaroid">
        <h4>${m.title}</h4>
        <p>${m.text}</p>
      </div>
    `).join('');
  }
}
