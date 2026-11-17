/**
 * RM IPHONES — HERO CINEMATOGRÁFICO DE ALTA PERFORMANCE
 * Animação contínua em 60fps da rotação 3D dos iPhones com transição Apple fluida.
 */

export function initHeroCinematic() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  const video = heroSection.querySelector('.t2d-cine-video');
  const copyLinesContainer = heroSection.querySelector('.t2d-cine-lines');
  const supportText = heroSection.querySelector('.t2d-cine-support');
  const railBar = heroSection.querySelector('.t2d-cine-rail i');
  const lines = Array.from(copyLinesContainer?.querySelectorAll('.t2d-cine-line') || []);

  const PHRASES = [
    {
      title: 'Seu próximo <em>upgrade</em> começa aqui.',
      support: 'Aparelhos novos lacrados, seminovos selecionados e procedência auditada com garantia formalizada.'
    },
    {
      title: 'Potência máxima. <em>Estética impecável<span class="t2d-cine-stop">.</span></em>',
      support: 'Construção em titânio grau aeroespacial, câmeras profissionais e laudo eletrônico de 35 itens.'
    },
    {
      title: 'Do detalhe à <em>experiência<span class="t2d-cine-stop">.</span></em>',
      support: 'Saúde de bateria informada com transparência e procedência 100% original em cada unidade.'
    },
    {
      title: 'Você escolhe. A <em>RM iPhones</em> cuida.',
      support: 'Troca inteligente com avaliação justa do seu seminovo e parcelamento facilitado em até 18x.'
    }
  ];

  let currentIndex = 0;
  let phraseTimer = null;
  const ROTATION_INTERVAL = 4500; // 4.5 segundos por frase

  // Iniciar vídeo em autoplay seguro com loop contínuo
  if (video) {
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const tryPlay = () => {
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {
          // Autoplay aguarda primeira interação
          const onFirstTouch = () => {
            video.play();
            window.removeEventListener('pointerdown', onFirstTouch);
            window.removeEventListener('scroll', onFirstTouch);
          };
          window.addEventListener('pointerdown', onFirstTouch, { once: true, passive: true });
          window.addEventListener('scroll', onFirstTouch, { once: true, passive: true });
        });
      }
    };

    video.addEventListener('loadedmetadata', tryPlay);
    video.addEventListener('canplay', tryPlay);
    tryPlay();
  }

  // Transição suave entre as frases
  function showPhrase(index) {
    currentIndex = index % PHRASES.length;

    // Atualizar linhas de texto com transição suave
    lines.forEach((line, i) => {
      if (i === currentIndex) {
        line.innerHTML = PHRASES[currentIndex].title;
        line.classList.add('is-active');
        line.style.opacity = '1';
        line.style.transform = 'translate3d(0, 0, 0)';
        line.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      } else {
        line.classList.remove('is-active');
        line.style.opacity = '0';
        line.style.transform = 'translate3d(0, -10px, 0)';
        line.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      }
    });

    if (supportText && PHRASES[currentIndex].support) {
      supportText.style.opacity = '0';
      supportText.style.transform = 'translate3d(0, 8px, 0)';
      setTimeout(() => {
        supportText.textContent = PHRASES[currentIndex].support;
        supportText.style.opacity = '1';
        supportText.style.transform = 'translate3d(0, 0, 0)';
        supportText.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      }, 200);
    }

    // Animar barra de progresso da frase
    if (railBar) {
      railBar.style.transition = 'none';
      railBar.style.transform = 'scaleX(0)';
      requestAnimationFrame(() => {
        railBar.style.transition = `transform ${ROTATION_INTERVAL}ms linear`;
        railBar.style.transform = 'scaleX(1)';
      });
    }
  }

  // Iniciar ciclo de frases
  function startCycle() {
    showPhrase(0);
    clearInterval(phraseTimer);
    phraseTimer = setInterval(() => {
      showPhrase(currentIndex + 1);
    }, ROTATION_INTERVAL);
  }

  startCycle();

  // Efeito 3D tilt sutil ao mover o mouse sobre o palco
  const stage = heroSection.querySelector('.t2d-cine-stage');
  const frame = heroSection.querySelector('.t2d-cine-frame');
  if (stage && frame && window.matchMedia('(hover: hover)').matches) {
    stage.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      frame.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg) scale3d(1.02, 1.02, 1.02)`;
      frame.style.transition = 'transform 0.15s ease-out';
    }, { passive: true });

    stage.addEventListener('mouseleave', () => {
      frame.style.transform = 'none';
      frame.style.transition = 'transform 0.6s ease-out';
    });
  }
}
