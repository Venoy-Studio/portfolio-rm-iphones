/**
 * Venoy Studio ® • Proposal Notice & Floating Card Component
 * Apresentação de Modelo Demonstrativo de Proposta com Design Autoral
 */

(function () {
  'use strict';

  function initProposalNotice(options) {
    const config = Object.assign(
      {
        clientName: 'RM iPhones',
        companyType: 'loja especializada em Apple e iPhones',
        logoSrc: '/img/venoy-logo.png',
        instagramHandle: 'venoystudio',
        instagramUrl: 'https://www.instagram.com/venoystudio/',
        defaultOpen: true,
      },
      options || {}
    );

    // Evitar injeção duplicada
    if (document.getElementById('vn-proposal-root')) return;

    // Criar o container raiz
    const root = document.createElement('div');
    root.id = 'vn-proposal-root';

    root.innerHTML = `
      <!-- 1. POP-UP MODAL INICIAL -->
      <div class="vn-proposal-overlay" id="vnOverlay" role="dialog" aria-modal="true" aria-labelledby="vnDialogTitle">
        <div class="vn-proposal-dialog">
          
          <!-- Top Bar: Pill Tag & Close -->
          <div class="vn-dialog-top">
            <span class="vn-badge-pill">
              <span class="vn-pulse-dot"></span>
              <span>Modelo Demonstrativo · Proposta</span>
            </span>
            <button type="button" class="vn-btn-close" id="vnBtnCloseModal" aria-label="Fechar apresentação">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- Header: Logo & Title -->
          <div class="vn-dialog-header">
            <img src="${config.logoSrc}" alt="Logo Venoy Studio" class="vn-agency-logo" />
            <div>
              <h2 class="vn-dialog-title" id="vnDialogTitle">Apresentação de Proposta de Site</h2>
              <p class="vn-dialog-subtitle">
                Modelo conceitual desenvolvido para a <strong>${config.clientName}</strong>
              </p>
            </div>
          </div>

          <!-- Descrição -->
          <p class="vn-dialog-desc">
            Este site é um <strong>modelo demonstrativo de proposta</strong> desenvolvido com engenharia visual e estratégica de alta conversão para valorizar o catálogo da <strong>${config.clientName}</strong>.
          </p>

          <!-- 3 Feature Cards -->
          <div class="vn-feature-cards">
            <div class="vn-feature-card">
              <div class="vn-feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div class="vn-feature-body">
                <strong>Baseado em Informações Públicas</strong>
                <p>Estruturado a partir do catálogo, presença online e referências comerciais públicas da marca.</p>
              </div>
            </div>

            <div class="vn-feature-card">
              <div class="vn-feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <div class="vn-feature-body">
                <strong>Caráter Ilustrativo & Estratégico</strong>
                <p>Navegação fluida, checklist visual e fechamento direto via WhatsApp para exemplificar o padrão final.</p>
              </div>
            </div>

            <div class="vn-feature-card">
              <div class="vn-feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <div class="vn-feature-body">
                <strong>Totalmente Personalizável</strong>
                <p>Todos os modelos, cores, textos, banners e canais de contato podem ser adaptados sob medida.</p>
              </div>
            </div>
          </div>

          <!-- Card Instagram Venoy Studio -->
          <a href="${config.instagramUrl}" target="_blank" rel="noopener noreferrer" class="vn-instagram-card">
            <div class="vn-instagram-left">
              <div class="vn-instagram-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div>
                <span class="vn-instagram-text-tag">Desenvolvido por Venoy Studio</span>
                <span class="vn-instagram-handle">@${config.instagramHandle}</span>
              </div>
            </div>
            <span class="vn-instagram-cta">
              <span>Instagram</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>

          <!-- Botão Principal CTA -->
          <button type="button" class="vn-btn-explore" id="vnBtnExplore">
            <span>Explorar Modelo do Site</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <p class="vn-sub-note">
            Você pode consultar os detalhes ou falar conosco pelo card no canto a qualquer momento.
          </p>
        </div>
      </div>

      <!-- 2. CARD FLUTUANTE NO CANTO INFERIOR (APÓS SAIR DO POP-UP) -->
      <aside class="vn-floating-card-wrapper" id="vnFloatingWrapper" aria-label="Aviso de Proposta de Site">
        
        <!-- Versão Card Completo (Top) -->
        <div class="vn-floating-card" id="vnFloatingCard">
          <div class="vn-card-top-row">
            <div class="vn-card-brand">
              <img src="${config.logoSrc}" alt="Venoy Studio Logo" class="vn-card-mini-logo" />
              <div class="vn-card-title-box">
                <span class="vn-card-title">Venoy Studio ®</span>
                <span class="vn-card-status-badge">
                  <span class="vn-card-status-dot"></span>
                  <span>Modelo de Proposta</span>
                </span>
              </div>
            </div>
            <button type="button" class="vn-card-btn-minimize" id="vnBtnMinimize" title="Minimizar card" aria-label="Minimizar">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>

          <p class="vn-card-body-text">
            Conceito estratégico e autoral criado especialmente para a <strong>${config.clientName}</strong>.
          </p>

          <div class="vn-card-actions">
            <button type="button" class="vn-card-btn-details" id="vnBtnReopenModal">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>Ver Proposta</span>
            </button>
            <a href="${config.instagramUrl}" target="_blank" rel="noopener noreferrer" class="vn-card-btn-instagram">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <!-- Versão Pílula Compacta (Quando minimizado) -->
        <button type="button" class="vn-floating-pill" id="vnFloatingPill" aria-label="Expandir aviso de proposta">
          <img src="${config.logoSrc}" alt="Venoy Studio" />
          <span class="vn-pulse-dot"></span>
          <span>Modelo de Proposta</span>
        </button>

      </aside>
    `;

    document.body.appendChild(root);

    const overlay = document.getElementById('vnOverlay');
    const floatingWrapper = document.getElementById('vnFloatingWrapper');
    const btnCloseModal = document.getElementById('vnBtnCloseModal');
    const btnExplore = document.getElementById('vnBtnExplore');
    const btnReopenModal = document.getElementById('vnBtnReopenModal');
    const btnMinimize = document.getElementById('vnBtnMinimize');
    const floatingPill = document.getElementById('vnFloatingPill');

    function openModal() {
      overlay.classList.add('vn-active');
      floatingWrapper.classList.remove('vn-visible');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      overlay.classList.remove('vn-active');
      document.body.style.overflow = '';
      setTimeout(() => {
        floatingWrapper.classList.add('vn-visible');
      }, 200);
    }

    // Eventos
    btnCloseModal.addEventListener('click', closeModal);
    btnExplore.addEventListener('click', closeModal);

    // Fechar ao clicar no overlay escuro
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeModal();
      }
    });

    // Tecla ESC fecha modal
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('vn-active')) {
        closeModal();
      }
    });

    // Reabrir modal a partir do card
    btnReopenModal.addEventListener('click', openModal);

    // Minimizar para pílula
    btnMinimize.addEventListener('click', function () {
      floatingWrapper.classList.add('vn-minimized');
    });

    // Expandir da pílula para o card
    floatingPill.addEventListener('click', function () {
      floatingWrapper.classList.remove('vn-minimized');
    });

    // Abrir o modal inicialmente após um breve delay elegante
    if (config.defaultOpen) {
      setTimeout(openModal, 400);
    } else {
      floatingWrapper.classList.add('vn-visible');
    }
  }

  // Inicializar quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initProposalNotice(window.__VENOY_PROPOSAL_CONFIG__ || {});
    });
  } else {
    initProposalNotice(window.__VENOY_PROPOSAL_CONFIG__ || {});
  }
})();
