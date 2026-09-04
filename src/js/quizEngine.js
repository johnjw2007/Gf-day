/* ==========================================================================
   Girlfriend's Day — 25 Bestie + Flirty Quiz Engine Module
   ========================================================================== */

import { CONFIG } from '../../config.js';

export class QuizEngine {
  constructor(canvasEngine) {
    this.canvasEngine = canvasEngine;
    this.currentIndex = 0;
    this.questions = CONFIG.quizQuestions;

    this.questionBox = document.getElementById('quiz-question-box');
    this.questionText = document.getElementById('quiz-question-text');
    this.optionsContainer = document.getElementById('quiz-options-container');
    this.progressFill = document.getElementById('quiz-progress-fill');
    this.stepLabel = document.getElementById('quiz-step-label');

    this.reactionModal = document.getElementById('quiz-reaction-modal');
    this.reactionEmoji = document.getElementById('reaction-emoji');
    this.reactionText = document.getElementById('reaction-text');
    this.nextBtn = document.getElementById('next-question-btn');

    this.completeCard = document.getElementById('quiz-complete-card');
    this.claimRewardBtn = document.getElementById('claim-reward-btn');

    this.initListeners();
    this.renderQuestion();
  }

  resetQuiz() {
    this.currentIndex = 0;
    if (this.questionBox) this.questionBox.classList.remove('hidden');
    if (this.reactionModal) this.reactionModal.classList.add('hidden');
    if (this.completeCard) this.completeCard.classList.add('hidden');
    this.renderQuestion();
  }

  initListeners() {
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.reactionModal.classList.add('hidden');
        this.questionBox.classList.remove('hidden');

        this.currentIndex++;
        if (this.currentIndex < this.questions.length) {
          this.renderQuestion();
        } else {
          this.showQuizComplete();
        }
      });
    }

    if (this.claimRewardBtn) {
      this.claimRewardBtn.addEventListener('click', () => {
        const rewardModal = document.getElementById('modal-bestie-reward');
        if (rewardModal) rewardModal.classList.remove('hidden');
        this.canvasEngine.triggerBigHeartFireworks();
      });
    }

    // Modal reward action buttons
    document.querySelectorAll('.reward-action-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        alert("🎉 DATE NIGHT CONFIRMED! Can't wait! ❤️");
        document.getElementById('modal-bestie-reward').classList.add('hidden');
        this.canvasEngine.triggerConfetti();
      });
    });
  }

  renderQuestion() {
    const q = this.questions[this.currentIndex];
    if (!q) return;

    // Update Progress
    const pct = Math.round(((this.currentIndex + 1) / this.questions.length) * 100);
    if (this.progressFill) this.progressFill.style.width = `${pct}%`;
    if (this.stepLabel) this.stepLabel.textContent = `Question ${this.currentIndex + 1} of ${this.questions.length}`;

    // Render Question & Options
    if (this.questionText) this.questionText.textContent = q.question;
    if (this.optionsContainer) {
      this.optionsContainer.innerHTML = q.options.map((opt, i) => `
        <button class="quiz-option-btn" data-option-index="${i}">
          ${opt.text}
        </button>
      `).join('');

      // Add click listeners to option buttons
      const btnEls = this.optionsContainer.querySelectorAll('.quiz-option-btn');
      btnEls.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(btn.getAttribute('data-option-index'), 10);
          this.handleOptionSelect(q, idx, e);
        });
      });
    }
  }

  handleOptionSelect(q, optionIdx, event) {
    const selectedOption = q.options[optionIdx];

    // Trigger Sparkles
    if (event) {
      this.canvasEngine.spawnBurst(event.clientX, event.clientY, 10);
    }

    // Reaction setup
    this.questionBox.classList.add('hidden');
    this.reactionModal.classList.remove('hidden');

    if (this.reactionEmoji) {
      this.reactionEmoji.textContent = selectedOption.isCorrect ? '💖' : '😏';
    }
    if (this.reactionText) {
      this.reactionText.textContent = selectedOption.response;
    }

    if (selectedOption.isCorrect) {
      this.canvasEngine.triggerConfetti();
    }
  }

  showQuizComplete() {
    if (this.questionBox) this.questionBox.classList.add('hidden');
    if (this.reactionModal) this.reactionModal.classList.add('hidden');
    if (this.completeCard) this.completeCard.classList.remove('hidden');

    this.canvasEngine.triggerBigHeartFireworks();
  }
}
