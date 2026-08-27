/* ==========================================================================
   Girlfriend's Day — Interactive Canvas Particles (Hearts, Sparkles, Rose Petals)
   ========================================================================== */

import confetti from 'canvas-confetti';

export class CanvasEngine {
  constructor() {
    this.canvas = document.getElementById('particle-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.particles = [];
    this.rosePetals = [];
    this.isRosePetalActive = false;

    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    this.initAmbientHearts();
    this.initClickSparkleTrail();
    this.animate();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initAmbientHearts() {
    const heartCount = window.innerWidth < 600 ? 12 : 25;
    for (let i = 0; i < heartCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 12 + 8,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: Math.sin(Math.random() * Math.PI) * 0.4,
        opacity: Math.random() * 0.5 + 0.3,
        color: ['#FF4D6D', '#FF85A1', '#FFCCD5', '#B8A8D9'][Math.floor(Math.random() * 4)]
      });
    }
  }

  initClickSparkleTrail() {
    window.addEventListener('click', (e) => {
      this.spawnBurst(e.clientX, e.clientY, 8);
    });

    window.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        this.spawnBurst(e.touches[0].clientX, e.touches[0].clientY, 8);
      }
    });
  }

  spawnBurst(x, y, count = 10) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      this.particles.push({
        x: x,
        y: y,
        size: Math.random() * 10 + 6,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        opacity: 1,
        fade: Math.random() * 0.03 + 0.015,
        color: ['#FF4D6D', '#FFCCD5', '#FFD166', '#FFFFFF'][Math.floor(Math.random() * 4)],
        isClickBurst: true
      });
    }
  }

  startRosePetalShower() {
    this.isRosePetalActive = true;
    const petalCount = 40;
    for (let i = 0; i < petalCount; i++) {
      this.rosePetals.push({
        x: Math.random() * this.canvas.width,
        y: -Math.random() * 200,
        size: Math.random() * 15 + 10,
        speedY: Math.random() * 2 + 1,
        speedX: Math.sin(Math.random() * Math.PI) * 1.5,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 2,
        color: ['#C9184A', '#FF4D6D', '#FF758F'][Math.floor(Math.random() * 3)]
      });
    }
  }

  triggerConfetti() {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF4D6D', '#FF85A1', '#FFD166', '#F3E8FF']
    });
  }

  triggerBigHeartFireworks() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#FF4D6D', '#FFCCD5', '#FFD166', '#C9184A']
      });
    }, 250);
  }

  drawHeart(x, y, size, color, opacity) {
    this.ctx.save();
    this.ctx.globalAlpha = opacity;
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    const topCurveHeight = size * 0.3;
    this.ctx.moveTo(x, y + topCurveHeight);
    this.ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
    this.ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + size, x, y + size);
    this.ctx.bezierCurveTo(x, y + size, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
    this.ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Render Ambient Particles & Bursts
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];

      if (p.isClickBurst) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= p.fade;

        if (p.opacity <= 0) {
          this.particles.splice(i, 1);
          continue;
        }
      } else {
        p.y -= p.speedY;
        p.x += Math.sin(p.y * 0.02) * p.speedX;

        if (p.y < -20) {
          p.y = this.canvas.height + 20;
          p.x = Math.random() * this.canvas.width;
        }
      }

      this.drawHeart(p.x, p.y, p.size, p.color, p.opacity);
    }

    // Render Falling Rose Petals
    if (this.isRosePetalActive) {
      for (let i = 0; i < this.rosePetals.length; i++) {
        const petal = this.rosePetals[i];
        petal.y += petal.speedY;
        petal.x += Math.sin(petal.y * 0.03) * 1.2;
        petal.rotation += petal.rotSpeed;

        if (petal.y > this.canvas.height + 20) {
          petal.y = -20;
          petal.x = Math.random() * this.canvas.width;
        }

        this.ctx.save();
        this.ctx.translate(petal.x, petal.y);
        this.ctx.rotate((petal.rotation * Math.PI) / 180);
        this.ctx.fillStyle = petal.color;
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, petal.size / 2, petal.size, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}
