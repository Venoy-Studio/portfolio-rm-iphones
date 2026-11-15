import { PRODUCTS, TRADE_MODELS } from './products.js';
import { initHeroCinematic } from './hero-cine.js';

// Estado global da aplicação
const state = {
  products: [...PRODUCTS],
  filteredProducts: [...PRODUCTS],
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'default',
  currentModalProduct: null,
  whatsappNumber: '5511999990000', // WhatsApp Oficial da RM iPhones
};

// Formatação monetária BRL
const formatBRL = (val) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(val);
};

// Gerador de link de WhatsApp com mensagem codificada
const getWhatsAppUrl = (message) => {
  return `https://wa.me/${state.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

// Inicialização segura após o DOM carregar
function bootstrap() {
  try {
    initHeroCinematic(); // Hero Cinematográfico Scroll-Driven estilo Tec2D
  } catch (err) {
    console.warn('Erro ao inicializar Hero Cinematográfico:', err);
  }

  try {
    initCatalog();
    initCategoryTabs();
    initSearchAndSort();
    initTradeSimulator();
    initInstallmentSimulator();
    initFaqAccordion();
    initModal();
    initMobileMenu();
    initWhatsAppPopup();
  } catch (err) {
    console.error('Erro ao inicializar componentes da página:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}

/* ==========================================================================
   CATÁLOGO & CARDS DE PRODUTO
   ========================================================================== */

function initCatalog() {
  renderProductGrid();
}

function renderProductGrid() {
  const grid = document.getElementById('productGrid');
  const countBadge = document.getElementById('productCount');
  
  if (!grid) return;

  const items = state.filteredProducts;
  if (countBadge) {
    countBadge.textContent = `${items.length} aparelhos disponíveis`;
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <svg style="margin: 0 auto 16px; width: 48px; height: 48px; opacity: 0.5;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 style="color: var(--text-primary); font-size: 1.2rem; margin-bottom: 8px;">Nenhum aparelho encontrado</h3>
        <p style="font-size: 0.95rem;">Tente buscar por outro termo ou selecione outra categoria.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(product => {
    const isLacrado = product.condition.toLowerCase().includes('lacrado');
    const batteryClass = product.battery >= 90 ? '#34c759' : '#e5c358';
    const mainImg = product.images[0] || '/img/hero/hero-iphones.webp';
    const hoverImg = product.images[1] || mainImg;
    const photoCount = product.images.length;

    const waMsg = `Olá, RM iPhones! Quero comprar o aparelho ${product.name} ${product.storage} ${product.color} (código: *${product.code}*). Está disponível hoje?`;

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-media" onclick="window.openProductDetails('${product.id}')">
          <div class="product-badges">
            <span class="battery-badge" style="color: ${batteryClass};">
              <svg class="battery-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
                <line x1="22" y1="11" x2="22" y2="13"></line>
                <line x1="6" y1="11" x2="10" y2="11"></line>
              </svg>
              ${product.battery}% Saúde
            </span>
            <span class="photo-count-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
              ${photoCount} fotos
            </span>
          </div>

          <img class="img-main" src="${mainImg}" alt="${product.name}" loading="lazy" />
          <img class="img-hover" src="${hoverImg}" alt="${product.name} em outro ângulo" loading="lazy" />

          <span class="status-tag ${isLacrado ? 'lacrado' : ''}">
            ${product.condition}
          </span>
        </div>

        <div class="product-body">
          <span class="product-code">CÓDIGO: #${product.code}</span>
          <h3 class="product-name">${product.name}</h3>
          
          <div class="product-meta">
            <span class="meta-chip">${product.color}</span>
            <span class="meta-chip">${product.storage}</span>
            <span class="meta-chip">${product.badge}</span>
          </div>

          <div class="product-pricing">
            <div class="price-pix">
              <span class="val">${formatBRL(product.pricePix)}</span>
              <span class="label">à vista no Pix</span>
            </div>
            <span class="price-card">ou até ${product.installments}</span>
          </div>

          <div class="product-actions">
            <a href="${getWhatsAppUrl(waMsg)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" aria-label="Comprar no WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.97.546 1.761.821 2.781.821 3.182 0 5.767-2.587 5.768-5.768.001-3.182-2.585-5.768-5.768-5.768zm3.364 8.163c-.14.394-.716.744-1.026.786-.31.042-.656.069-2.023-.497-1.368-.567-2.327-1.921-2.42-2.046-.094-.125-.758-1.009-.758-1.923 0-.914.478-1.365.647-1.551.17-.186.371-.233.495-.233.124 0 .248.002.355.008.113.006.265-.043.414.316.155.372.531 1.295.578 1.389.047.094.078.203.016.328-.063.125-.094.203-.188.312-.094.109-.198.243-.283.326-.094.092-.192.193-.083.38.109.188.484.798 1.04 1.293.715.637 1.317.834 1.504.927.188.094.298.079.407-.047.11-.125.469-.547.594-.734.125-.188.25-.156.422-.094.172.063 1.094.516 1.281.609.188.094.313.141.359.219.047.078.047.453-.093.847z"/>
              </svg>
              Comprar
            </a>

            <button type="button" class="btn btn-secondary btn-sm" onclick="window.openProductDetails('${product.id}')" title="Ver fotos e especificações">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   FILTROS, CATEGORIAS & BUSCA
   ========================================================================== */

function initCategoryTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeCategory = tab.dataset.category;
      applyFilters();
    });
  });
}

function initSearchAndSort() {
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      applyFilters();
    });
  }
}

function applyFilters() {
  let list = [...state.products];

  // Filtro por categoria
  if (state.activeCategory !== 'all') {
    list = list.filter(p => p.category === state.activeCategory);
  }

  // Filtro por busca
  if (state.searchQuery) {
    list = list.filter(p => {
      const text = `${p.name} ${p.color} ${p.storage} ${p.code} ${p.condition}`.toLowerCase();
      return text.includes(state.searchQuery);
    });
  }

  // Ordenação
  if (state.sortBy === 'price-asc') {
    list.sort((a, b) => a.pricePix - b.pricePix);
  } else if (state.sortBy === 'price-desc') {
    list.sort((a, b) => b.pricePix - a.pricePix);
  } else if (state.sortBy === 'battery-desc') {
    list.sort((a, b) => b.battery - a.battery);
  }

  state.filteredProducts = list;
  renderProductGrid();
}

/* ==========================================================================
   SIMULADOR DE TROCA INTELIGENTE (TRADE-IN)
   ========================================================================== */

function initTradeSimulator() {
  const selectModel = document.getElementById('tradeMyModel');
  const selectCondition = document.getElementById('tradeCondition');
  const selectBattery = document.getElementById('tradeBattery');
  const selectTarget = document.getElementById('tradeTargetModel');
  const resultVal = document.getElementById('tradeEstimatedValue');
  const targetDiffVal = document.getElementById('tradeDifferenceValue');
  const tradeWaBtn = document.getElementById('tradeWhatsAppBtn');

  if (!selectModel || !resultVal) return;

  // Popula os modelos de usados
  selectModel.innerHTML = TRADE_MODELS.map(m => `
    <option value="${m.model}" data-base="${m.baseValue}">${m.model}</option>
  `).join('');

  // Popula os modelos de destino
  if (selectTarget) {
    selectTarget.innerHTML = state.products
      .filter(p => p.category.startsWith('linha'))
      .map(p => `
        <option value="${p.id}" data-price="${p.pricePix}">Quero um ${p.name} ${p.storage} (${formatBRL(p.pricePix)})</option>
      `).join('');
  }

  function calculateTrade() {
    const selectedOption = selectModel.selectedOptions[0];
    const baseValue = parseFloat(selectedOption?.dataset?.base || 2000);
    const condMult = parseFloat(selectCondition?.value || 1);
    const batMult = parseFloat(selectBattery?.value || 1);

    const estimatedUsed = Math.round(baseValue * condMult * batMult);
    resultVal.textContent = formatBRL(estimatedUsed);

    const targetOption = selectTarget?.selectedOptions[0];
    const targetPrice = parseFloat(targetOption?.dataset?.price || 4590);
    const diff = Math.max(0, targetPrice - estimatedUsed);

    if (targetDiffVal) {
      targetDiffVal.innerHTML = `
        Diferença a pagar: <strong>${formatBRL(diff)}</strong> 
        <span style="font-size: 0.85rem; color: var(--text-secondary); display: block;">ou até 18x de ${formatBRL(Math.round((diff * 1.12) / 18))}</span>
      `;
    }

    if (tradeWaBtn) {
      const myModel = selectModel.value;
      const targetName = targetOption ? targetOption.text.split('(')[0].trim() : 'iPhone mais novo';
      const msg = `Olá, RM iPhones! Fiz uma simulação de troca no site:\n\n📱 *Meu usado:* ${myModel}\n💰 *Estimativa de entrada:* ${formatBRL(estimatedUsed)}\n🎯 *Quero pegar:* ${targetName}\n\nPodemos fazer a avaliação final para eu levar meu novo iPhone?`;
      tradeWaBtn.href = getWhatsAppUrl(msg);
    }
  }

  selectModel.addEventListener('change', calculateTrade);
  selectCondition.addEventListener('change', calculateTrade);
  selectBattery.addEventListener('change', calculateTrade);
  selectTarget.addEventListener('change', calculateTrade);

  calculateTrade();
}

/* ==========================================================================
   SIMULADOR DE PARCELAMENTO EM ATÉ 18X
   ========================================================================== */

function initInstallmentSimulator() {
  const amountInput = document.getElementById('calcAmountInput');
  const installmentsTable = document.getElementById('installmentsTable');

  if (!amountInput || !installmentsTable) return;

  function updateTable() {
    let amount = parseFloat(amountInput.value) || 3000;
    if (amount < 200) amount = 200;

    const rates = [
      { x: 1, rate: 0.00 },
      { x: 3, rate: 0.04 },
      { x: 6, rate: 0.07 },
      { x: 10, rate: 0.10 },
      { x: 12, rate: 0.12 },
      { x: 18, rate: 0.15 }
    ];

    installmentsTable.innerHTML = rates.map(r => {
      const total = amount * (1 + r.rate);
      const perMonth = total / r.x;
      const isBest = r.x === 18;

      return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border-radius: var(--radius-md); background: ${isBest ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.03)'}; border: 1px solid ${isBest ? 'var(--border-highlight)' : 'var(--border-subtle)'};">
          <div>
            <strong style="color: ${isBest ? 'var(--accent-titanium)' : 'var(--text-primary)'}; font-size: 1rem;">${r.x}x de ${formatBRL(perMonth)}</strong>
            <span style="display: block; font-size: 0.75rem; color: var(--text-muted);">${r.rate === 0 ? 'Sem juros' : 'Taxa reduzida cartão'}</span>
          </div>
          <span style="font-size: 0.88rem; font-weight: 600; color: var(--text-secondary);">Total: ${formatBRL(total)}</span>
        </div>
      `;
    }).join('');
  }

  amountInput.addEventListener('input', updateTable);
  updateTable();
}

/* ==========================================================================
   MODAL DE DETALHES & GALERIA VIP
   ========================================================================== */

function initModal() {
  const overlay = document.getElementById('productModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!overlay) return;

  const closeModal = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };
  window.closeModal = closeModal;

  closeBtn?.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });

  window.openProductDetails = (id) => {
    const p = state.products.find(item => item.id === id);
    if (!p) return;
    state.currentModalProduct = p;
    renderModalContent(p);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
}

function renderModalContent(p) {
  const mainImg = document.getElementById('modalMainImg');
  const thumbsContainer = document.getElementById('modalThumbs');
  const title = document.getElementById('modalTitle');
  const code = document.getElementById('modalCode');
  const badge = document.getElementById('modalBadge');
  const desc = document.getElementById('modalDesc');
  const pricePix = document.getElementById('modalPricePix');
  const priceCard = document.getElementById('modalPriceCard');
  const specsList = document.getElementById('modalSpecs');
  const waBtn = document.getElementById('modalWhatsAppBtn');

  if (title) title.textContent = p.name;
  if (code) code.textContent = `Código de Estoque: #${p.code}`;
  if (badge) badge.textContent = `${p.condition} • Bateria ${p.battery}%`;
  if (desc) desc.textContent = p.description;
  if (pricePix) pricePix.textContent = formatBRL(p.pricePix);
  if (priceCard) priceCard.textContent = `ou até ${p.installments}`;

  if (mainImg) {
    mainImg.src = p.images[0] || '/img/hero/hero-iphones.webp';
    mainImg.alt = p.name;
  }

  if (thumbsContainer) {
    thumbsContainer.innerHTML = p.images.map((imgSrc, idx) => `
      <button type="button" class="thumb-btn ${idx === 0 ? 'active' : ''}" onclick="window.changeModalImg('${imgSrc}', this)">
        <img src="${imgSrc}" alt="${p.name} thumb ${idx+1}" />
      </button>
    `).join('');
  }

  if (specsList && p.specs) {
    const specsItems = Object.entries(p.specs).map(([k, v]) => `
      <li>
        <span style="text-transform: capitalize;">${k.replace(/([A-Z])/g, ' $1')}:</span>
        <span>${v}</span>
      </li>
    `).join('');

    specsList.innerHTML = `
      ${specsItems}
      <li>
        <span>Garantia:</span>
        <span style="color: var(--accent-green); font-weight: 700;">${p.warranty}</span>
      </li>
      <li>
        <span>Checklist de Bancada:</span>
        <span style="color: var(--accent-titanium); font-weight: 700;">35 Itens Aprovados</span>
      </li>
    `;
  }

  if (waBtn) {
    const msg = `Olá, RM iPhones! Gostaria de fechar o aparelho ${p.name} ${p.storage} ${p.color} (código: *${p.code}*). Como combinamos o pagamento e a entrega?`;
    waBtn.href = getWhatsAppUrl(msg);
  }

  window.changeModalImg = (src, btn) => {
    if (mainImg) mainImg.src = src;
    document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  };
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* ==========================================================================
   MENU MOBILE
   ========================================================================== */

function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('mobileNav');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const active = nav.classList.toggle('active');
    nav.style.display = active ? 'block' : 'none';
    toggle.setAttribute('aria-expanded', active);
  });

  links.forEach(l => {
    l.addEventListener('click', () => {
      nav.classList.remove('active');
      nav.style.display = 'none';
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   WHATSAPP POPUP INTELIGENTE
   ========================================================================== */

function initWhatsAppPopup() {
  const popup = document.getElementById('waPopup');
  const closeBtn = document.getElementById('waPopupClose');

  if (!popup) return;

  setTimeout(() => {
    if (!sessionStorage.getItem('wa_popup_closed')) {
      popup.style.display = 'flex';
    }
  }, 4500);

  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    popup.style.display = 'none';
    sessionStorage.setItem('wa_popup_closed', 'true');
  });
}
