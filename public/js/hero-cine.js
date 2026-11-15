/**
 * RM IPHONES — HERO CINEMATOGRÁFICO SCROLL-DRIVEN
 * Motor cinematográfico com rotação 3D do iPhone a 60fps (Padrão Oficial Tec2D).
 */

export function initHeroCinematic() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  const stage = heroSection.querySelector('.t2d-cine-stage');
  const video = heroSection.querySelector('.t2d-cine-video');
  const copyContainer = heroSection.querySelector('.t2d-cine-copy');
  const copyLinesContainer = heroSection.querySelector('.t2d-cine-lines');
  const supportText = heroSection.querySelector('.t2d-cine-support');
  const cueContainer = heroSection.querySelector('.t2d-cine-cue');
  const statusReady = heroSection.querySelector('.t2d-cine-status');

  if (!stage || !video) return;

  const lines = Array.from(copyLinesContainer?.querySelectorAll('.t2d-cine-line') || []);

  // Janelas de transição das 4 frases sequenciais Apple (idêntico Tec2D)
  const LINE_WINDOWS = [
    [0.00, 0.00, 0.11, 0.16],
    [0.19, 0.25, 0.40, 0.46],
    [0.46, 0.52, 0.67, 0.73],
    [0.73, 0.79, 0.92, 0.97]
  ];

  const VIDEO_SRC = {
    desktop: '/video/tec2d-scroll/tec2d-scroll-desktop-dark.mp4',
    mobile: '/video/tec2d-scroll/tec2d-scroll-mobile-dark.mp4',
    poster: '/video/tec2d-scroll/tec2d-scroll-poster-dark.webp',
    final: '/video/tec2d-scroll/tec2d-scroll-final-dark.webp'
  };

  const DURATION_CAP = 0.88;

  function clamp(val, min = 0, max = 1) {
    return Math.min(max, Math.max(min, val));
  }

  function smoothStep(val) {
    const t = clamp(val);
    return t * t * (3 - 2 * t);
  }

  function calculateWindowOpacity(progress, [startIn, fullIn, startOut, fullOut]) {
    if (progress < startIn || progress > fullOut) return 0;
    const inFactor = fullIn > startIn ? smoothStep((progress - startIn) / (fullIn - startIn)) : 1;
    const outFactor = fullOut > startOut ? 1 - smoothStep((progress - startOut) / (fullOut - startOut)) : 1;
    return Math.min(inFactor, outFactor);
  }

  // Respeita preferência do usuário por redução de movimento
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroSection.dataset.mode = 'static';
    heroSection.style.setProperty('--cine-progress', '1');
    lines.forEach((line, idx) => {
      line.style.opacity = idx === 0 ? '1' : '0';
      line.style.transform = 'none';
    });
    if (supportText) supportText.style.opacity = '1';
    if (cueContainer) cueContainer.style.opacity = '0';
    return;
  }

  // Detecção mobile
  const isMobile = window.matchMedia('(max-width: 767px), (hover: none) and (pointer: coarse)').matches;
  const videoSrc = isMobile ? VIDEO_SRC.mobile : VIDEO_SRC.desktop;
  const seekThreshold = isMobile ? 0.03 : 0.015;

  let targetProgress = 0;
  let currentProgress = 0;
  let rafId = 0;
  let scrollRafId = 0;
  let isSeeking = false;
  let seekTime = 0;
  let lastTime = 0;
  let isInitialized = false;

  function getVideoDuration() {
    const d = video?.duration;
    return Number.isFinite(d) && d && d > 0 ? d : 0;
  }

  function updateVisuals(progress) {
    heroSection.style.setProperty('--cine-progress', progress.toFixed(4));
    
    // Véu de transição final
    const veil = smoothStep((progress - 0.90) / 0.10);
    heroSection.style.setProperty('--cine-veil', veil.toFixed(4));

    if (copyContainer) {
      copyContainer.style.opacity = (1 - smoothStep((progress - 0.93) / 0.07)).toFixed(3);
    }

    // Linhas de texto
    for (let i = 0; i < lines.length; i++) {
      const op = calculateWindowOpacity(progress, LINE_WINDOWS[i]);
      lines[i].style.opacity = op.toFixed(3);
      lines[i].style.transform = `translate3d(0, ${((1 - op) * 12).toFixed(2)}px, 0)`;
    }

    // Texto de apoio inicial
    if (supportText) {
      const op = calculateWindowOpacity(progress, [0, 0, 0.14, 0.20]);
      supportText.style.opacity = op.toFixed(3);
      supportText.style.transform = `translate3d(0, ${((1 - op) * 10).toFixed(2)}px, 0)`;
    }

    // Cue indicator inferior
    if (cueContainer) {
      cueContainer.style.opacity = (1 - smoothStep((progress - 0.84) / 0.08)).toFixed(3);
    }
  }

  function onScroll() {
    if (!heroSection || !stage) return;
    scrollRafId = 0;
    const top = heroSection.getBoundingClientRect().top + window.scrollY;
    const scrollableDistance = Math.max(1, heroSection.offsetHeight - stage.offsetHeight);
    targetProgress = clamp((window.scrollY - top) / scrollableDistance);

    if (!isInitialized) {
      isInitialized = true;
      currentProgress = targetProgress;
    }

    updateVisuals(targetProgress);

    if (!rafId) {
      rafId = window.requestAnimationFrame(renderLoop);
    }
  }

  function requestScroll() {
    if (!scrollRafId) {
      scrollRafId = window.requestAnimationFrame(onScroll);
    }
  }

  function renderLoop(timestamp) {
    rafId = 0;
    const delta = lastTime ? Math.min(64, timestamp - lastTime) : 16.7;
    lastTime = timestamp;

    const lerpFactor = 1 - Math.pow(1 - 0.22, delta / 16.7);
    currentProgress += (targetProgress - currentProgress) * lerpFactor;

    if (Math.abs(targetProgress - currentProgress) < 0.0004) {
      currentProgress = targetProgress;
    }

    if (isSeeking && (video.seeking === false || timestamp - seekTime > 400)) {
      isSeeking = false;
    }

    const duration = getVideoDuration();
    if (duration > 0 && !isSeeking && video && !video.seeking) {
      const targetTime = clamp(currentProgress / DURATION_CAP) * Math.max(0, duration - 0.04);
      if (Math.abs(video.currentTime - targetTime) > seekThreshold) {
        isSeeking = true;
        seekTime = timestamp;
        try {
          video.currentTime = targetTime;
        } catch (e) {
          isSeeking = false;
        }
      }
    }

    if (Math.abs(targetProgress - currentProgress) >= 0.0004 || isSeeking) {
      rafId = window.requestAnimationFrame(renderLoop);
    } else {
      lastTime = 0;
    }
  }

  function onSeeked() {
    isSeeking = false;
    if (!rafId) {
      rafId = window.requestAnimationFrame(renderLoop);
    }
  }

  function onLoadedData() {
    heroSection.dataset.mode = 'video';
    if (statusReady) statusReady.classList.add('is-ready');
    onScroll();
  }

  function onError() {
    heroSection.dataset.mode = 'static';
  }

  function primeVideo() {
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        video.pause();
        onScroll();
      }).catch(() => {
        onScroll();
      });
    }
  }

  video.addEventListener('loadedmetadata', onScroll);
  video.addEventListener('loadeddata', onLoadedData, { once: true });
  video.addEventListener('canplay', onScroll);
  video.addEventListener('seeked', onSeeked);
  video.addEventListener('error', onError);

  window.addEventListener('scroll', requestScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('pointerdown', primeVideo, { once: true, passive: true });

  const currentSrc = video.getAttribute('src');
  if (!currentSrc || (isMobile && !currentSrc.includes('mobile')) || (!isMobile && !currentSrc.includes('desktop'))) {
    video.src = videoSrc;
    video.load();
  }

  primeVideo();
  onScroll();
}
