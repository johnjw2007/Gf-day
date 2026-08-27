/* ==========================================================================
   Girlfriend's Day — Global Audio Player Module
   ========================================================================== */

import { CONFIG } from '../../config.js';

export class AudioPlayer {
  constructor() {
    this.audio = document.getElementById('bg-music');
    this.stickyBar = document.getElementById('sticky-audio-bar');
    this.stickyPlayBtn = document.getElementById('sticky-play-btn');
    this.stickySongTitle = document.getElementById('sticky-song-title');
    this.stickySongStatus = document.getElementById('sticky-song-status');
    this.stickyVinyl = document.getElementById('sticky-vinyl');

    this.playlist = CONFIG.playlist || [];
    this.currentTrackIndex = 0;
    this.isPlaying = false;

    if (this.playlist.length > 0) {
      this.loadTrack(this.playlist[0]);
    }

    this.initListeners();
  }

  loadTrack(track) {
    if (!this.audio || !track) return;
    const wasPlaying = this.isPlaying;
    this.audio.src = track.audioUrl;
    if (this.stickySongTitle) {
      this.stickySongTitle.textContent = `${track.title} • ${track.artist}`;
    }

    // Modal UI elements update
    const modalAlbumArt = document.getElementById('modal-album-art');
    const modalSongTitle = document.getElementById('modal-song-title');
    const modalArtist = document.getElementById('modal-artist');
    const modalQuote = document.getElementById('modal-quote');

    if (modalAlbumArt) modalAlbumArt.src = track.albumArt;
    if (modalSongTitle) modalSongTitle.textContent = track.title;
    if (modalArtist) modalArtist.textContent = track.artist;
    if (modalQuote) modalQuote.textContent = track.quote;

    if (wasPlaying) {
      this.play();
    }
  }

  setTrackById(trackId) {
    const idx = this.playlist.findIndex(t => t.id === trackId);
    if (idx !== -1) {
      this.currentTrackIndex = idx;
      this.loadTrack(this.playlist[idx]);
    }
  }

  initListeners() {
    if (this.stickyPlayBtn) {
      this.stickyPlayBtn.addEventListener('click', () => this.togglePlay());
    }

    // Playlist buttons
    const btnBst = document.getElementById('track-btn-bst');
    const btnLoveMe = document.getElementById('track-btn-loveme');

    if (btnBst) {
      btnBst.addEventListener('click', () => {
        btnBst.classList.add('active-track');
        if (btnLoveMe) btnLoveMe.classList.remove('active-track');
        this.setTrackById('bst');
      });
    }

    if (btnLoveMe) {
      btnLoveMe.addEventListener('click', () => {
        if (btnLoveMe) btnLoveMe.classList.add('active-track');
        if (btnBst) btnBst.classList.remove('active-track');
        this.setTrackById('loveme');
      });
    }
  }

  showStickyBar() {
    if (this.stickyBar) {
      this.stickyBar.classList.remove('hidden');
    }
  }

  togglePlay() {
    if (!this.audio) return;

    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    if (!this.audio) return;
    this.audio.play().then(() => {
      this.isPlaying = true;
      if (this.stickyPlayBtn) this.stickyPlayBtn.innerHTML = '⏸️';
      if (this.stickySongStatus) this.stickySongStatus.textContent = 'Now Playing 💕';
      if (this.stickyVinyl) this.stickyVinyl.classList.add('spinning');
    }).catch(err => {
      console.log('Audio autoplay prevented or error loading:', err);
    });
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    if (this.stickyPlayBtn) this.stickyPlayBtn.innerHTML = '▶️';
    if (this.stickySongStatus) this.stickySongStatus.textContent = 'Paused';
    if (this.stickyVinyl) this.stickyVinyl.classList.remove('spinning');
  }
}
