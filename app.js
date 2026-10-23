// ==========================================================================
// APLICACIÓN INTERACTIVA INFANTIL: SINGLE SCREEN (SIN SCROLL) & 100% RESPONSIVE
// ==========================================================================

let soundEnabled = true;
let audioCtx = null;
let currentUtterance = null;
let isSpeaking = false;

// Inicializador de Web Audio API para efectos de sonido animados sin archivos externos
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Reproducción de efectos de sonido sintetizados divertidos
function playSound(type) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === 'pop') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.1);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.11);
    } else if (type === 'whoosh') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(460, now + 0.12);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.14);
    }
  } catch (e) {
    console.warn("Audio Context error:", e);
  }
}

// Síntesis de voz para leer en voz alta a los niños
function toggleSpeech(text) {
  if (!('speechSynthesis' in window)) {
    alert("Tu navegador no soporta lectura de voz.");
    return;
  }

  if (isSpeaking) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    updateSpeechButtons();
    return;
  }

  window.speechSynthesis.cancel();
  const cleanText = text.replace(/[*#_`]/g, '');
  currentUtterance = new SpeechSynthesisUtterance(cleanText);
  currentUtterance.lang = 'es-ES';
  currentUtterance.rate = 0.95;
  currentUtterance.pitch = 1.05;

  const voices = window.speechSynthesis.getVoices();
  const esVoice = voices.find(v => v.lang.startsWith('es'));
  if (esVoice) currentUtterance.voice = esVoice;

  currentUtterance.onstart = () => {
    isSpeaking = true;
    updateSpeechButtons();
  };

  currentUtterance.onend = () => {
    isSpeaking = false;
    updateSpeechButtons();
  };

  currentUtterance.onerror = () => {
    isSpeaking = false;
    updateSpeechButtons();
  };

  window.speechSynthesis.speak(currentUtterance);
}

function stopSpeech() {
  if ('speechSynthesis' in window && isSpeaking) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    updateSpeechButtons();
  }
}

function updateSpeechButtons() {
  const btn = document.getElementById('btn-speech-reader');
  if (!btn) return;
  if (isSpeaking) {
    btn.classList.add('speaking');
    btn.innerHTML = `<span>⏹️</span> Detener Lectura`;
  } else {
    btn.classList.remove('speaking');
    btn.innerHTML = `<span>🔊</span> ¡Léemelo en Voz Alta!`;
  }
}

// ==========================================================================
// RENDERIZADO DE VISTAS (PANTALLA ÚNICA SIN SCROLL)
// ==========================================================================

// 1. Vista Principal (Home) - 10 Artefactos en Pantalla Única
// SOLO LA IMAGEN DE REFERENCIA CON EL NOMBRE
function renderHome() {
  stopSpeech();
  playSound('whoosh');

  const container = document.getElementById('view-content');

  let cardsHtml = '';
  ARTEFACTOS_DATA.forEach((item) => {
    cardsHtml += `
      <div class="appliance-card-screen" onclick="navigateToDetail(${item.id})" role="button" tabindex="0" title="Ver detalles de ${item.nombreCorto}" style="border-color: ${item.colorPrimario}">
        <div class="card-mini-badge" style="background: ${item.colorFondo}; border-color: ${item.colorPrimario}">
          ${item.id}
        </div>
        <div class="card-screen-image" style="background: ${item.colorFondo}">
          ${item.svgIcon}
        </div>
        <div class="card-screen-title" title="${item.nombre}">${item.nombre}</div>
      </div>
    `;
  });

  container.innerHTML = `
    <header class="main-header-compact">
      <div class="header-title-box">
        <span class="header-badge-icon">⚡</span>
        <div>
          <h1 class="main-title-compact">
            Los <span class="highlight">10 Artefactos</span> de Mayor Consumo
          </h1>
          <span class="header-sub-hint">Toca una imagen para ver su consumo y consejos</span>
        </div>
      </div>

      <div class="header-actions-compact">
        <button class="btn-pill-compact btn-vampire-pill" onclick="navigateToVampire()">
          <span>🦇</span> Vampiro
        </button>
        <button class="btn-pill-compact btn-sound-pill" id="btn-toggle-sound" onclick="toggleSound()">
          <span>${soundEnabled ? '🔊' : '🔇'}</span>
        </button>
      </div>
    </header>

    <main class="appliances-grid-screen">
      ${cardsHtml}
    </main>
  `;
}

// 2. Vista Completa de Detalle - Adaptada a 1 Sola Pantalla
function renderDetail(applianceId) {
  stopSpeech();
  playSound('pop');

  const container = document.getElementById('view-content');

  const item = ARTEFACTOS_DATA.find(a => a.id === applianceId);
  if (!item) {
    renderHome();
    return;
  }

  const prevId = item.id === 1 ? 10 : item.id - 1;
  const nextId = item.id === 10 ? 1 : item.id + 1;

  // Generar rayos de nivel de consumo (1 a 5)
  let boltsHtml = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= item.nivelConsumo) {
      boltsHtml += `<span class="bolt-active" title="Nivel ${i}">⚡</span>`;
    } else {
      boltsHtml += `<span class="bolt-inactive">⚡</span>`;
    }
  }

  // Generar lista de recomendaciones
  const recomListHtml = item.recomendaciones.map(rec => {
    const formatted = rec.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return `<li>${formatted}</li>`;
  }).join('');

  // Texto para la síntesis de voz
  const speechText = `Artefacto número ${item.id}: ${item.nombre}. ` +
    `Consumo y potencia: ${item.consumoDetalle}. ` +
    `Datos importantes: ${item.datos}. ` +
    `Comparación clave: ${item.comparacion}. ` +
    `Recomendaciones para ahorrar energía: ${item.recomendaciones.join('. ')}. ` +
    `Consejo infantil: ${item.consejoInfantil}`;

  container.innerHTML = `
    <div class="detail-view-screen">
      <!-- BARRA SUPERIOR DE NAVEGACIÓN Y RETORNO -->
      <nav class="detail-top-nav-compact">
        <button class="btn-back-main" onclick="navigateToHome()" title="Regresar a la página principal">
          <span>🏠</span> ⬅️ Volver a la página principal
        </button>

        <div class="detail-nav-arrows">
          <button class="btn-nav-arrow" onclick="navigateToDetail(${prevId})" title="Ver artefacto anterior">
            <span>◀️</span> Ant.
          </button>
          <span style="font-family: var(--font-display); font-weight: 700; color: #475569; font-size: 0.85rem; padding: 0 4px;">
            ${item.id} / 10
          </span>
          <button class="btn-nav-arrow" onclick="navigateToDetail(${nextId})" title="Ver artefacto siguiente">
            Sig. <span>▶️</span>
          </button>
        </div>
      </nav>

      <!-- BANNER DE INTRODUCCIÓN GENERAL REQUERIDO -->
      <section class="detail-intro-ribbon">
        <span class="ribbon-icon">📋</span>
        <div>
          A continuación, te presento el listado de los <strong>10 artefactos eléctricos de mayor consumo</strong> en una casa familiar, detallando su potencia estimada, consumo promedio, una comparación clave entre ellos (potencia instantánea vs. tiempo de uso) y recomendaciones prácticas de optimización.
        </div>
      </section>

      <!-- CUERPO PRINCIPAL EN 2 COLUMNAS (100% PANTALLA ÚNICA) -->
      <div class="detail-main-layout">
        
        <!-- COLUMNA IZQUIERDA: HERO DEL ARTEFACTO -->
        <aside class="detail-left-hero" style="border-color: ${item.colorPrimario}">
          <div class="detail-category-tag" style="background: ${item.colorFondo}; border-color: ${item.colorPrimario}; color: ${item.colorPrimario}">
            <span>⭐</span> #${item.id} • ${item.categoria}
          </div>
          
          <h2 class="detail-appliance-title">${item.nombre}</h2>

          <div class="detail-hero-svg-box">
            ${item.svgIcon}
          </div>

          <!-- CONSUMÓMETRO COMPACTO -->
          <div class="detail-power-gauge">
            <div class="gauge-row-top">
              <span>🔌 Potencia:</span>
              <span class="gauge-watts-pill" style="color: ${item.colorPrimario}; background: ${item.colorFondo}; border-color: ${item.colorSecundario}">
                ${item.potenciaCorta}
              </span>
            </div>
            <div class="gauge-bolts">
              ${boltsHtml}
            </div>
          </div>

          <!-- BOTÓN DE LECTURA EN VOZ ALTA -->
          <button id="btn-speech-reader" class="btn-speech-screen" onclick="toggleSpeech(\`${speechText.replace(/`/g, '\\`').replace(/"/g, '&quot;')}\`)">
            <span>🔊</span> ¡Léemelo en Voz Alta!
          </button>
        </aside>

        <!-- COLUMNA DERECHA: 4 CARDS (2x2) + TIP INFANTIL -->
        <section class="detail-right-content">
          <div class="detail-cards-2x2">
            
            <!-- 1. CONSUMO / POTENCIA -->
            <article class="compact-info-card" style="border-color: #F97316">
              <div class="compact-card-header">
                <div class="compact-icon-badge" style="background: #FFEDD5; border-color: #EA580C; color: #EA580C">
                  ⚡
                </div>
                <h3 class="compact-card-title" style="color: #C2410C">Consumo / Potencia</h3>
              </div>
              <div class="compact-card-body">
                <p>${item.consumoDetalle.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
              </div>
            </article>

            <!-- 2. DATOS IMPORTANTES -->
            <article class="compact-info-card" style="border-color: #0284C7">
              <div class="compact-card-header">
                <div class="compact-icon-badge" style="background: #E0F2FE; border-color: #0284C7; color: #0284C7">
                  📘
                </div>
                <h3 class="compact-card-title" style="color: #0369A1">Datos Clave</h3>
              </div>
              <div class="compact-card-body">
                <p>${item.datos.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
              </div>
            </article>

            <!-- 3. COMPARACIÓN CLAVE -->
            <article class="compact-info-card" style="border-color: #8B5CF6">
              <div class="compact-card-header">
                <div class="compact-icon-badge" style="background: #EDE9FE; border-color: #8B5CF6; color: #8B5CF6">
                  ⚖️
                </div>
                <h3 class="compact-card-title" style="color: #6D28D9">Comparación Clave</h3>
              </div>
              <div class="compact-card-body">
                <p>${item.comparacion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
              </div>
            </article>

            <!-- 4. RECOMENDACIONES -->
            <article class="compact-info-card" style="border-color: #10B981">
              <div class="compact-card-header">
                <div class="compact-icon-badge" style="background: #D1FAE5; border-color: #059669; color: #059669">
                  💡
                </div>
                <h3 class="compact-card-title" style="color: #047857">Recomendaciones</h3>
              </div>
              <div class="compact-card-body">
                <ul class="compact-recom-list">
                  ${recomListHtml}
                </ul>
              </div>
            </article>

          </div>

          <!-- BANNER INFERIOR CON EL TIP INFANTIL -->
          <footer class="compact-kids-tip">
            <span class="tip-hero-icon">🦸‍♂️</span>
            <div class="compact-kids-tip-text">
              <strong>¡Misión de Ahorro!</strong> ${item.consejoInfantil}
            </div>
          </footer>
        </section>

      </div>
    </div>
  `;
}

// 3. Vista Especial: El Consumo Vampiro
function renderVampire() {
  stopSpeech();
  playSound('pop');

  const container = document.getElementById('view-content');

  const vampire = CONSUMO_VAMPIRO_DATA;

  const speechText = `Consejo extra: El Consumo Vampiro. ` +
    `${vampire.descripcion}. ` +
    `${vampire.impacto}. ` +
    `Cómo solucionarlo: ${vampire.solucion}. ` +
    `Consejo para niños: ${vampire.consejoInfantil}`;

  container.innerHTML = `
    <div class="vampire-single-screen">
      <!-- BARRA SUPERIOR -->
      <nav class="detail-top-nav-compact">
        <button class="btn-back-main" onclick="navigateToHome()" title="Regresar a la página principal">
          <span>🏠</span> ⬅️ Volver a la página principal
        </button>

        <span style="font-family: var(--font-display); font-weight: 700; color: #4338CA; font-size: 0.95rem;">
          🦇 Misión Especial de Ahorro
        </span>
      </nav>

      <!-- CUERPO EN 2 COLUMNAS -->
      <div class="vampire-layout-grid">
        
        <aside class="vampire-left-card">
          <div class="detail-category-tag" style="background: #E0E7FF; border-color: #4338CA; color: #4338CA">
            <span>🦇</span> Consejo Extra
          </div>

          <h2 class="detail-appliance-title" style="color: #312E81;">El Consumo Vampiro</h2>

          <div class="detail-hero-svg-box">
            ${vampire.svgIcon}
          </div>

          <p style="font-size: 0.85rem; font-weight: 700; color: #3730A3; line-height: 1.25;">
            ¡La energía que desaparece en silencio en modo stand-by!
          </p>

          <button id="btn-speech-reader" class="btn-speech-screen" style="background: #4F46E5; border-color: #312E81;" onclick="toggleSpeech(\`${speechText.replace(/`/g, '\\`').replace(/"/g, '&quot;')}\`)">
            <span>🔊</span> ¡Léemelo en Voz Alta!
          </button>
        </aside>

        <section class="detail-right-content">
          <div class="detail-cards-2x2">
            
            <article class="compact-info-card" style="border-color: #6366F1">
              <div class="compact-card-header">
                <div class="compact-icon-badge" style="background: #EEF2FF; border-color: #4F46E5; color: #4F46E5">
                  👀
                </div>
                <h3 class="compact-card-title" style="color: #3730A3">¿Qué es?</h3>
              </div>
              <div class="compact-card-body">
                <p>${vampire.descripcion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
              </div>
            </article>

            <article class="compact-info-card" style="border-color: #EF4444">
              <div class="compact-card-header">
                <div class="compact-icon-badge" style="background: #FEE2E2; border-color: #DC2626; color: #DC2626">
                  📊
                </div>
                <h3 class="compact-card-title" style="color: #991B1B">¿Cuánto gasta?</h3>
              </div>
              <div class="compact-card-body">
                <p>${vampire.impacto.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
              </div>
            </article>

            <article class="compact-info-card" style="border-color: #10B981; grid-column: 1 / -1;">
              <div class="compact-card-header">
                <div class="compact-icon-badge" style="background: #D1FAE5; border-color: #059669; color: #059669">
                  🛡️
                </div>
                <h3 class="compact-card-title" style="color: #065F46">¿Cómo vencer al vampiro?</h3>
              </div>
              <div class="compact-card-body">
                <p>${vampire.solucion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
              </div>
            </article>

          </div>

          <footer class="compact-kids-tip" style="background: #EEF2FF; border-color: #6366F1;">
            <span class="tip-hero-icon">🧛‍♂️</span>
            <div class="compact-kids-tip-text" style="color: #312E81;">
              <strong>¡Sé un Cazador!</strong> ${vampire.consejoInfantil}
            </div>
          </footer>
        </section>

      </div>
    </div>
  `;
}

// ==========================================================================
// CONTROL DE NAVEGACIÓN
// ==========================================================================

function navigateToHome() {
  window.location.hash = '#inicio';
}

function navigateToDetail(id) {
  window.location.hash = `#artefacto-${id}`;
}

function navigateToVampire() {
  window.location.hash = '#consumo-vampiro';
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  playSound('pop');
  const btn = document.getElementById('btn-toggle-sound');
  if (btn) {
    btn.innerHTML = `<span>${soundEnabled ? '🔊' : '🔇'}</span>`;
  }
}

function handleRouting() {
  const hash = window.location.hash;
  if (!hash || hash === '#inicio' || hash === '#') {
    renderHome();
  } else if (hash.startsWith('#artefacto-')) {
    const id = parseInt(hash.replace('#artefacto-', ''), 10);
    if (!isNaN(id) && id >= 1 && id <= 10) {
      renderDetail(id);
    } else {
      renderHome();
    }
  } else if (hash === '#consumo-vampiro') {
    renderVampire();
  } else {
    renderHome();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', handleRouting);
  handleRouting();

  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {};
  }
});
