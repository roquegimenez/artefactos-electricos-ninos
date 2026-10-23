// Datos completos de los 10 artefactos eléctricos de mayor consumo + Consejo Vampiro
// Con ilustraciones SVG vectoriales en estilo infantil colorido y amigable

const ARTEFACTOS_DATA = [
  {
    id: 1,
    slug: "aire-acondicionado",
    nombre: "Aire Acondicionado (Frío / Calor)",
    nombreCorto: "Aire Acondicionado",
    categoria: "Climatización",
    colorPrimario: "#0284C7",
    colorSecundario: "#38BDF8",
    colorFondo: "#E0F2FE",
    potenciaWatts: "1.000 W a 2.000 W",
    potenciaCorta: "1.000 - 2.000 W",
    nivelConsumo: 5, // 1 a 5
    nivelTexto: "¡Súper Alto Consumo!",
    svgIcon: `<svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-md">
      <defs>
        <linearGradient id="acBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#E2E8F0"/>
        </linearGradient>
        <linearGradient id="acGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8"/>
          <stop offset="100%" stop-color="#0284C7"/>
        </linearGradient>
      </defs>
      <!-- Sombra base -->
      <ellipse cx="100" cy="180" rx="75" ry="12" fill="#00000015" />
      <!-- Unidad Split exterior e interior -->
      <rect x="25" y="45" width="150" height="75" rx="16" fill="url(#acBody)" stroke="#94A3B8" stroke-width="4"/>
      <!-- Rejilla frontal / Display -->
      <rect x="35" y="55" width="130" height="18" rx="8" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="2"/>
      <rect x="130" y="59" width="30" height="10" rx="4" fill="#0F172A"/>
      <text x="145" y="67" font-size="8" font-family="monospace" fill="#38BDF8" font-weight="bold" text-anchor="middle">24°C</text>
      <!-- Ojitos tiernos y carita -->
      <circle cx="85" cy="88" r="6" fill="#1E293B"/>
      <circle cx="87" cy="86" r="2" fill="#FFFFFF"/>
      <circle cx="115" cy="88" r="6" fill="#1E293B"/>
      <circle cx="117" cy="86" r="2" fill="#FFFFFF"/>
      <!-- Sonrisa -->
      <path d="M 94 96 Q 100 102 106 96" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- Mejillas sonrosadas -->
      <ellipse cx="78" cy="94" rx="4" ry="2.5" fill="#FDA4AF"/>
      <ellipse cx="122" cy="94" rx="4" ry="2.5" fill="#FDA4AF"/>
      <!-- Aleta deflectora abierta -->
      <path d="M 35 116 C 55 125, 145 125, 165 116" stroke="#64748B" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- Ráfagas de viento frío (copos y ondas azules) -->
      <path d="M 50 130 Q 40 150 55 165" stroke="#38BDF8" stroke-width="4" stroke-linecap="round" fill="none" stroke-dasharray="3 3"/>
      <path d="M 100 130 Q 100 155 105 170" stroke="#0284C7" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M 150 130 Q 160 150 145 165" stroke="#38BDF8" stroke-width="4" stroke-linecap="round" fill="none" stroke-dasharray="3 3"/>
      <!-- Copo de nieve kawaii -->
      <g transform="translate(30, 140) scale(0.6)">
        <path d="M 15 0 L 15 30 M 0 15 L 30 15 M 5 5 L 25 25 M 5 25 L 25 5" stroke="#0284C7" stroke-width="3" stroke-linecap="round"/>
      </g>
      <!-- Solcito kawaii (modo calor) -->
      <g transform="translate(145, 135) scale(0.65)">
        <circle cx="15" cy="15" r="9" fill="#F59E0B"/>
        <path d="M 15 0 L 15 5 M 15 25 L 15 30 M 0 15 L 5 15 M 25 15 L 30 15" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>`,
    consumoDetalle: "Aprox. **1.000 W a 2.000 W** (según frigorías y si es convencional o Inverter).",
    datos: "Es uno de los equipos que más carga genera en la red eléctrica debido a su uso continuado durante los meses de picos térmicos.",
    comparacion: "Consume hasta 10 veces más que una heladera en funcionamiento instantáneo, pero su impacto en la factura depende estrictamente de cuántas horas al día permanezca encendido.",
    recomendaciones: [
      "Programarlo a **24°C** en verano y **20°C** en invierno (cada grado adicional eleva el consumo cerca de un 8-15%).",
      "Limpiar los filtros mensual o estacionalmente para evitar que el motor trabaje forzado."
    ],
    consejoInfantil: "¡Amiguito! En verano no hace falta ponerlo en 18°C como una cueva de pingüinos. Con 24°C estarás súper fresco y ahorrarás muchísima energía para el planeta."
  },
  {
    id: 2,
    slug: "termotanque-electrico",
    nombre: "Termotanque o Calefón Eléctrico",
    nombreCorto: "Termotanque Eléctrico",
    categoria: "Agua Caliente",
    colorPrimario: "#EA580C",
    colorSecundario: "#FB923C",
    colorFondo: "#FFEDD5",
    potenciaWatts: "1.500 W a 3.000 W",
    potenciaCorta: "1.500 - 3.000 W",
    nivelConsumo: 5,
    nivelTexto: "¡Súper Gigante de Potencia!",
    svgIcon: `<svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-md">
      <defs>
        <linearGradient id="tankBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#F1F5F9"/>
          <stop offset="50%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#CBD5E1"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="185" rx="60" ry="10" fill="#00000015" />
      <!-- Caños arriba -->
      <rect x="75" y="15" width="12" height="25" rx="3" fill="#38BDF8" stroke="#0284C7" stroke-width="2"/>
      <rect x="113" y="15" width="12" height="25" rx="3" fill="#F87171" stroke="#DC2626" stroke-width="2"/>
      <!-- Cuerpo cilíndrico del termotanque -->
      <rect x="55" y="35" width="90" height="135" rx="28" fill="url(#tankBody)" stroke="#94A3B8" stroke-width="4"/>
      <!-- Reloj / Indicador de temperatura -->
      <circle cx="100" cy="70" r="16" fill="#F8FAFC" stroke="#64748B" stroke-width="3"/>
      <path d="M 100 70 L 108 64" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="100" cy="70" r="3" fill="#DC2626"/>
      <!-- Carita divertida -->
      <circle cx="85" cy="110" r="5" fill="#1E293B"/>
      <circle cx="86.5" cy="108.5" r="1.5" fill="#FFFFFF"/>
      <circle cx="115" cy="110" r="5" fill="#1E293B"/>
      <circle cx="116.5" cy="108.5" r="1.5" fill="#FFFFFF"/>
      <path d="M 94 122 Q 100 128 106 122" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- Gotita de agua caliente sonriente -->
      <g transform="translate(140, 75) scale(0.9)">
        <path d="M 15 0 C 15 0 0 16 0 25 C 0 33 6.7 40 15 40 C 23.3 40 30 33 30 25 C 30 16 15 0 15 0 Z" fill="#FB923C"/>
        <circle cx="11" cy="24" r="2" fill="#FFFFFF"/>
        <circle cx="19" cy="24" r="2" fill="#FFFFFF"/>
        <path d="M 13 30 Q 15 32 17 30" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" fill="none"/>
      </g>
      <!-- Base de soporte -->
      <rect x="70" y="165" width="60" height="10" rx="4" fill="#64748B"/>
    </svg>`,
    consumoDetalle: "Aprox. **1.500 W a 3.000 W**.",
    datos: "Al encenderse la resistencia para calentar el volumen total de agua, demanda una gran cantidad de energía de manera sostenida hasta cortar por termostato.",
    comparacion: "Aunque su potencia es similar a la de un horno eléctrico, el termotanque enciende y apaga de forma intermitente durante todo el día para mantener la temperatura del agua.",
    recomendaciones: [
      "No dejarlo encendido al máximo nivel innecesariamente; regularlo a una temperatura templada/confortable (aprox. 45°C - 50°C).",
      "Evaluar apagarlo en horarios nocturnos prolongados si cuenta con una buena aislación térmica."
    ],
    consejoInfantil: "¡Toma duchas cortas como un pececito veloz! El termotanque calienta litros y litros de agua usando muchísima electricidad."
  },
  {
    id: 3,
    slug: "caloventores-estufas",
    nombre: "Caloventores y Estufas Eléctricas (Halógenas / Cuarzo / Convectores)",
    nombreCorto: "Caloventores y Estufas",
    categoria: "Calefacción",
    colorPrimario: "#DC2626",
    colorSecundario: "#F87171",
    colorFondo: "#FEE2E2",
    potenciaWatts: "1.500 W a 2.000 W",
    potenciaCorta: "1.500 - 2.000 W",
    nivelConsumo: 5,
    nivelTexto: "¡Poder Térmico Máximo!",
    svgIcon: `<svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-md">
      <ellipse cx="100" cy="180" rx="55" ry="10" fill="#00000015" />
      <!-- Cuerpo del caloventor -->
      <rect x="45" y="45" width="110" height="110" rx="30" fill="#FEF2F2" stroke="#EF4444" stroke-width="4"/>
      <!-- Asa de transporte superior -->
      <path d="M 80 45 L 80 30 Q 80 22 90 22 L 110 22 Q 120 22 120 30 L 120 45" fill="none" stroke="#DC2626" stroke-width="4"/>
      <!-- Rejilla frontal circular caliente -->
      <circle cx="100" cy="100" r="38" fill="#FEE2E2" stroke="#DC2626" stroke-width="3"/>
      <!-- Espirales de calor incandescentes -->
      <circle cx="100" cy="100" r="28" fill="none" stroke="#F97316" stroke-width="3" stroke-dasharray="8 4"/>
      <circle cx="100" cy="100" r="16" fill="#FBBF24" opacity="0.4"/>
      <!-- Carita alegre en el centro -->
      <circle cx="93" cy="98" r="4.5" fill="#7F1D1D"/>
      <circle cx="94" cy="96" r="1.5" fill="#FFFFFF"/>
      <circle cx="107" cy="98" r="4.5" fill="#7F1D1D"/>
      <circle cx="108" cy="96" r="1.5" fill="#FFFFFF"/>
      <path d="M 96 107 Q 100 111 104 107" stroke="#7F1D1D" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <!-- Botones laterales / selectores -->
      <circle cx="138" cy="65" r="5" fill="#DC2626"/>
      <circle cx="138" cy="80" r="5" fill="#991B1B"/>
      <!-- Patitas de apoyo -->
      <rect x="58" y="153" width="14" height="16" rx="4" fill="#DC2626"/>
      <rect x="128" y="153" width="14" height="16" rx="4" fill="#DC2626"/>
      <!-- Llamitas y ondas de calor flotantes -->
      <path d="M 165 75 Q 185 85 165 100" stroke="#F97316" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M 172 105 Q 192 115 172 130" stroke="#EF4444" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    </svg>`,
    consumoDetalle: "Aprox. **1.500 W a 2.000 W**.",
    datos: "Tienen una eficiencia de conversión directa de electricidad a calor muy alta, pero su impacto económico en invierno es drástico si se usan como principal fuente de calefacción.",
    comparacion: "Un caloventor estándar de 2.000 W consume el doble por hora que un panel calefactor de bajo consumo (aprox. 600 W - 800 W).",
    recomendaciones: [
      "Priorizar métodos de calefacción alternativos a gas cuando sea posible, o utilizar paneles de bajo consumo.",
      "Asegurar un buen aislamiento de aberturas (burletes) para evitar fugas de calor que fuercen el uso continuo del aparato."
    ],
    consejoInfantil: "¡Abrígate con tu buzo o mantita favorita antes de prender el caloventor! Son pequeñitos pero comen energía como un dinosaurio gigante."
  },
  {
    id: 4,
    slug: "horno-electrico",
    nombre: "Horno Eléctrico (de Mesa o Empotrado)",
    nombreCorto: "Horno Eléctrico",
    categoria: "Cocina",
    colorPrimario: "#D97706",
    colorSecundario: "#FBBF24",
    colorFondo: "#FEF3C7",
    potenciaWatts: "1.500 W a 2.500 W",
    potenciaCorta: "1.500 - 2.500 W",
    nivelConsumo: 5,
    nivelTexto: "¡Horno Súper Potente!",
    svgIcon: `<svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-md">
      <ellipse cx="100" cy="182" rx="68" ry="11" fill="#00000015" />
      <!-- Estructura del horno -->
      <rect x="30" y="45" width="140" height="115" rx="14" fill="#334155" stroke="#1E293B" stroke-width="4"/>
      <!-- Puerta con cristal templado -->
      <rect x="42" y="56" width="92" height="92" rx="8" fill="#1E293B" stroke="#64748B" stroke-width="2"/>
      <rect x="52" y="66" width="72" height="72" rx="6" fill="#F59E0B" fill-opacity="0.25"/>
      <!-- Resistencia de calor brillante arriba -->
      <path d="M 58 72 Q 68 76 78 72 Q 88 76 98 72 Q 108 76 118 72" stroke="#EF4444" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- Bandeja con galletitas ricas -->
      <rect x="56" y="105" width="64" height="6" rx="2" fill="#94A3B8"/>
      <circle cx="70" cy="100" r="5" fill="#B45309"/>
      <circle cx="88" cy="100" r="5" fill="#B45309"/>
      <circle cx="106" cy="100" r="5" fill="#B45309"/>
      <!-- Manija de la puerta -->
      <rect x="48" y="142" width="80" height="6" rx="3" fill="#E2E8F0"/>
      <!-- Panel de perillas a la derecha -->
      <rect x="140" y="56" width="22" height="92" rx="6" fill="#475569"/>
      <circle cx="151" cy="72" r="6" fill="#E2E8F0"/>
      <circle cx="151" cy="98" r="6" fill="#E2E8F0"/>
      <circle cx="151" cy="124" r="6" fill="#E2E8F0"/>
      <!-- Lucesita de encendido -->
      <circle cx="151" cy="62" r="2.5" fill="#22C55E"/>
      <!-- Vapor delicioso saliendo -->
      <path d="M 75 35 Q 70 25 78 18" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path d="M 95 35 Q 100 22 93 15" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </svg>`,
    consumoDetalle: "Aprox. **1.500 W a 2.500 W**.",
    datos: "Su resistencia interna requiere mucha potencia para alcanzar temperaturas elevadas de cocción rápidamente.",
    comparacion: "Consume más potencia instantánea que un microondas (que ronda los 800 W - 1.200 W), aunque suele usarse durante bloques de tiempo acotados.",
    recomendaciones: [
      "Evitar precalentar el horno en exceso.",
      "Apagarlo unos minutos antes de terminar la cocción para aprovechar el **calor residual** acumulado en el interior."
    ],
    consejoInfantil: "¡El horno guarda el calor como un cofre mágico! Si se apaga 5 minutitos antes, la comida terminará de cocinarse sola sin gastar más luz."
  },
  {
    id: 5,
    slug: "secarropas",
    nombre: "Secarropas Centrífugo y Secarropas por Calor",
    nombreCorto: "Secarropas",
    categoria: "Lavado y Secado",
    colorPrimario: "#8B5CF6",
    colorSecundario: "#A78BFA",
    colorFondo: "#EDE9FE",
    potenciaWatts: "380 W a 2.500 W",
    potenciaCorta: "380 - 2.500 W",
    nivelConsumo: 4,
    nivelTexto: "¡Consumo Elevado por Calor!",
    svgIcon: `<svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-md">
      <ellipse cx="100" cy="182" rx="55" ry="10" fill="#00000015" />
      <!-- Gabinete del secarropas -->
      <rect x="45" y="35" width="110" height="135" rx="20" fill="#FFFFFF" stroke="#8B5CF6" stroke-width="4"/>
      <!-- Panel de control superior -->
      <rect x="55" y="45" width="90" height="18" rx="6" fill="#F5F3FF" stroke="#DDD6FE" stroke-width="2"/>
      <circle cx="68" cy="54" r="4" fill="#8B5CF6"/>
      <circle cx="80" cy="54" r="4" fill="#C4B5FD"/>
      <!-- Pantallita -->
      <rect x="105" y="49" width="30" height="10" rx="3" fill="#1E1B4B"/>
      <text x="120" y="57" font-size="7" font-family="monospace" fill="#A78BFA" font-weight="bold" text-anchor="middle">45m</text>
      <!-- Puerta de tambor redonda grande -->
      <circle cx="100" cy="115" r="42" fill="#EDE9FE" stroke="#8B5CF6" stroke-width="4"/>
      <circle cx="100" cy="115" r="32" fill="#7C3AED" fill-opacity="0.15" stroke="#C4B5FD" stroke-width="2"/>
      <!-- Ropita dando vueltas adentro -->
      <g transform="translate(100, 115) rotate(25)">
        <!-- Remerita divertida -->
        <path d="M -15 -10 L -8 -15 L 0 -10 L 8 -15 L 15 -10 L 12 -4 L 8 -5 L 8 12 L -8 12 L -8 -5 L -12 -4 Z" fill="#EC4899"/>
        <!-- Mediecita -->
        <path d="M 6 -4 Q 14 -8 18 0 Q 20 8 14 12 L 8 10 Z" fill="#38BDF8"/>
      </g>
      <!-- Espirales de aire caliente / centrifugado -->
      <path d="M 80 95 A 25 25 0 0 1 125 110" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" fill="none" stroke-dasharray="4 3"/>
      <!-- Destellos de ropa limpia y seca -->
      <path d="M 160 50 L 165 40 L 170 50 L 180 55 L 170 60 L 165 70 L 160 60 L 150 55 Z" fill="#FBBF24"/>
      <path d="M 35 110 L 38 103 L 42 110 L 49 113 L 42 117 L 38 124 L 35 117 L 28 113 Z" fill="#A78BFA"/>
    </svg>`,
    consumoDetalle: "Aprox. **380 W** (centrífugo básico) hasta **2.500 W** (secarropas de tambor por resistencia).",
    datos: "Los equipos que utilizan calor para evaporar el agua de las prendas se encuentran entre los que más energía demandan en las tareas del hogar.",
    comparacion: "Un ciclo completo de un secarropas por tambor puede gastar hasta 5 veces más energía que un ciclo de lavado estándar en lavarropas con agua fría.",
    recomendaciones: [
      "Centrifugar la ropa previamente en el lavarropas al máximo de revoluciones posibles para disminuir la humedad antes de pasarla al secarropas.",
      "Aprovechar el secado al aire libre y al sol siempre que el clima lo permita."
    ],
    consejoInfantil: "¡El señor Sol y el viento secan tu ropa gratis con energía 100% limpia y sin enchufes! Colgar la ropa al aire libre es el mejor truco."
  },
  {
    id: 6,
    slug: "pava-electrica",
    nombre: "Pava Eléctrica",
    nombreCorto: "Pava Eléctrica",
    categoria: "Cocina",
    colorPrimario: "#0D9488",
    colorSecundario: "#2DD4BF",
    colorFondo: "#CCFBF1",
    potenciaWatts: "1.800 W a 2.000 W",
    potenciaCorta: "1.800 - 2.000 W",
    nivelConsumo: 4,
    nivelTexto: "¡Potencia Relámpago!",
    svgIcon: `<svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-md">
      <ellipse cx="100" cy="180" rx="55" ry="10" fill="#00000015" />
      <!-- Base conectada -->
      <rect x="60" y="160" width="80" height="12" rx="6" fill="#334155"/>
      <circle cx="100" cy="166" r="3" fill="#2DD4BF"/>
      <!-- Cuerpo de la pava -->
      <path d="M 68 160 L 76 65 Q 78 55 90 55 L 115 55 Q 125 55 128 65 L 136 160 Z" fill="#F0FDFA" stroke="#0D9488" stroke-width="4"/>
      <!-- Tapa superior -->
      <ellipse cx="102" cy="55" rx="20" ry="7" fill="#0D9488"/>
      <circle cx="102" cy="46" r="5" fill="#14B8A6"/>
      <!-- Pico vertedor -->
      <path d="M 76 65 L 50 60 L 73 80 Z" fill="#0D9488"/>
      <!-- Asa lateral grande y cómoda -->
      <path d="M 126 68 C 160 70, 165 140, 134 150" fill="none" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
      <!-- Ventanita medidora de agua transparente con burbujitas -->
      <rect x="94" y="80" width="16" height="55" rx="8" fill="#99F6E4" stroke="#0D9488" stroke-width="2"/>
      <rect x="96" y="100" width="12" height="33" rx="6" fill="#2DD4BF" opacity="0.6"/>
      <circle cx="102" cy="115" r="2" fill="#FFFFFF"/>
      <circle cx="100" cy="123" r="2.5" fill="#FFFFFF"/>
      <!-- Ojitos y carita cute en la pava -->
      <circle cx="86" cy="110" r="4" fill="#0F766E"/>
      <circle cx="87" cy="109" r="1.2" fill="#FFFFFF"/>
      <!-- Humito y vapor de agua caliente -->
      <path d="M 48 55 Q 35 40 45 25 Q 55 15 42 8" stroke="#14B8A6" stroke-width="3" stroke-linecap="round" fill="none" stroke-dasharray="3 3"/>
      <path d="M 58 45 Q 65 30 55 20" stroke="#2DD4BF" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </svg>`,
    consumoDetalle: "Aprox. **1.800 W a 2.000 W**.",
    datos: "Aunque se utiliza durante pocos minutos por vez, su potencia instantánea es muy elevada.",
    comparacion: "En términos de potencia pura, una pava eléctrica consume casi lo mismo que un radiador o un horno en funcionamiento, aunque su uso acumulado diario suele medirse en minutos.",
    recomendaciones: [
      "Calentar únicamente la cantidad exacta de agua que se va a utilizar en el momento (evitar llenarla al máximo si solo se requiere para una taza).",
      "Limpiar el sarro interior periódicamente, ya que la acumulación de minerales aísla la resistencia y enlentece el hervor."
    ],
    consejoInfantil: "¡Si solo quieres una taza de té, no llenes la pava hasta el tope! Calentar agua de más es gastar energía que nadie va a tomar."
  },
  {
    id: 7,
    slug: "lavarropas-automatico",
    nombre: "Lavarropas Automático (con Calentamiento de Agua)",
    nombreCorto: "Lavarropas Automático",
    categoria: "Lavado y Secado",
    colorPrimario: "#2563EB",
    colorSecundario: "#60A5FA",
    colorFondo: "#DBEAFE",
    potenciaWatts: "500 W a 2.500 W",
    potenciaCorta: "500 - 2.500 W",
    nivelConsumo: 4,
    nivelTexto: "¡Ojo con el Agua Caliente!",
    svgIcon: `<svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-md">
      <ellipse cx="100" cy="182" rx="55" ry="10" fill="#00000015" />
      <!-- Gabinete -->
      <rect x="45" y="35" width="110" height="135" rx="18" fill="#FFFFFF" stroke="#2563EB" stroke-width="4"/>
      <!-- Cajonera de jabón y perilla -->
      <rect x="55" y="45" width="35" height="15" rx="4" fill="#EFF6FF" stroke="#93C5FD" stroke-width="2"/>
      <rect x="58" y="50" width="15" height="5" rx="2" fill="#2563EB"/>
      <circle cx="110" cy="52" r="7" fill="#2563EB"/>
      <circle cx="110" cy="52" r="2" fill="#FFFFFF"/>
      <circle cx="132" cy="52" r="4" fill="#22C55E"/>
      <!-- Ojo de buey / puerta de vidrio circular -->
      <circle cx="100" cy="115" r="42" fill="#EFF6FF" stroke="#2563EB" stroke-width="4"/>
      <!-- Agua azul con jabón adentro -->
      <path d="M 68 120 Q 85 110 100 125 Q 115 140 132 120 A 32 32 0 0 1 68 120" fill="#60A5FA" fill-opacity="0.8"/>
      <!-- Burbujas kawaii de jabón -->
      <circle cx="85" cy="100" r="5" fill="#FFFFFF" fill-opacity="0.8" stroke="#3B82F6" stroke-width="1"/>
      <circle cx="115" cy="98" r="7" fill="#FFFFFF" fill-opacity="0.8" stroke="#3B82F6" stroke-width="1"/>
      <circle cx="102" cy="108" r="4" fill="#FFFFFF" fill-opacity="0.8" stroke="#3B82F6" stroke-width="1"/>
      <!-- Carita sonriente en el agua -->
      <circle cx="92" cy="132" r="3" fill="#1E3A8A"/>
      <circle cx="108" cy="132" r="3" fill="#1E3A8A"/>
      <path d="M 97 138 Q 100 142 103 138" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round" fill="none"/>
      <!-- Gotitas salpicando afuera alegremente -->
      <circle cx="165" cy="95" r="4" fill="#38BDF8"/>
      <circle cx="36" cy="85" r="3" fill="#38BDF8"/>
    </svg>`,
    consumoDetalle: "Aprox. **500 W** (lavado en frío) hasta **2.500 W** (si activa la resistencia interna para calentar el agua).",
    datos: "El mayor porcentaje de energía que consume un lavarropas se destina exclusivamente a elevar la temperatura del agua.",
    comparacion: "Usar programas con agua caliente incrementa el consumo eléctrico del ciclo en aproximadamente un **80%** en comparación con el lavado en frío.",
    recomendaciones: [
      "Utilizar siempre que se pueda programas de lavado con **agua fría**.",
      "Juntar ropa para realizar cargas completas en lugar de hacer varios lavados parciales."
    ],
    consejoInfantil: "¡El agua fría deja la ropa súper limpia y brillante! Ayuda a mamá y papá esperando a llenar el tambor antes de ponerlo a lavar."
  },
  {
    id: 8,
    slug: "plancha-de-ropa",
    nombre: "Plancha de Ropa",
    nombreCorto: "Plancha de Ropa",
    categoria: "Cuidado de Ropa",
    colorPrimario: "#E11D48",
    colorSecundario: "#FB7185",
    colorFondo: "#FFE4E6",
    potenciaWatts: "1.000 W a 1.500 W",
    potenciaCorta: "1.000 - 1.500 W",
    nivelConsumo: 3,
    nivelTexto: "¡Calor Concentrado!",
    svgIcon: `<svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-md">
      <ellipse cx="100" cy="180" rx="65" ry="10" fill="#00000015" />
      <!-- Base metálica plateada de la plancha -->
      <path d="M 40 148 L 140 148 Q 165 148 175 138 L 140 138 L 40 138 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
      <!-- Cuerpo ergonómico moderno -->
      <path d="M 45 138 L 138 138 Q 162 138 170 128 C 150 100 115 95 85 95 L 45 95 Z" fill="#F43F5E"/>
      <!-- Tanque de agua transparente -->
      <path d="M 70 115 L 125 115 Q 140 115 145 125 L 65 125 Z" fill="#FDA4AF" opacity="0.6"/>
      <!-- Mango superior -->
      <path d="M 45 95 L 45 65 Q 45 55 60 55 L 120 55 Q 135 55 135 75 L 135 95" fill="none" stroke="#BE123C" stroke-width="12" stroke-linecap="round"/>
      <!-- Perilla de temperatura -->
      <circle cx="85" cy="85" r="9" fill="#FFFFFF" stroke="#BE123C" stroke-width="2"/>
      <!-- Ojito kawaii en la plancha -->
      <circle cx="115" cy="110" r="4.5" fill="#FFFFFF"/>
      <circle cx="116.5" cy="109" r="1.5" fill="#881337"/>
      <!-- Ráfagas de vapor hacia abajo -->
      <path d="M 60 158 L 55 168 M 80 158 L 80 170 M 105 158 L 110 170 M 130 158 L 135 168" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
      <!-- Cable con enchufe divertido -->
      <path d="M 38 120 Q 20 120 22 95 Q 24 70 15 65" fill="none" stroke="#64748B" stroke-width="4" stroke-linecap="round"/>
    </svg>`,
    consumoDetalle: "Aprox. **1.000 W a 1.500 W**.",
    datos: "Su base metálica alcanza temperaturas muy altas mediante una resistencia de alto voltaje.",
    comparacion: "Posee una potencia alta similar a la de un microondas grande, pero al mantenerse conectada y alternando ciclos de calor de forma continua durante toda la sesión de planchado, el gasto acumulado es considerable.",
    recomendaciones: [
      "Planificar el planchado de todas las prendas juntas en una sola tanda en lugar de encenderla para una sola pieza.",
      "Regular la temperatura de acuerdo con el tipo de tela y aprovechar el calor residual desconectándola unos minutos antes de terminar."
    ],
    consejoInfantil: "¡Junta toda la ropa arrugada para plancharla de un solo viaje! Si se enciende y apaga muchas veces, gasta mucho más."
  },
  {
    id: 9,
    slug: "heladera-con-freezer",
    nombre: "Heladera con Freezer",
    nombreCorto: "Heladera con Freezer",
    categoria: "Refrigeración",
    colorPrimario: "#0891B2",
    colorSecundario: "#22D3EE",
    colorFondo: "#CFFAFE",
    potenciaWatts: "150 W a 350 W",
    potenciaCorta: "150 - 350 W",
    nivelConsumo: 3,
    nivelTexto: "¡Prendida 24 Horas al Día!",
    svgIcon: `<svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-md">
      <ellipse cx="100" cy="184" rx="55" ry="10" fill="#00000015" />
      <!-- Cuerpo de la heladera -->
      <rect x="52" y="25" width="96" height="150" rx="16" fill="#F0FDFA" stroke="#0891B2" stroke-width="4"/>
      <!-- Línea divisoria del Freezer superior -->
      <line x1="52" y1="75" x2="148" y2="75" stroke="#0891B2" stroke-width="4"/>
      <!-- Manija del freezer -->
      <rect x="62" y="55" width="6" height="14" rx="3" fill="#0891B2"/>
      <!-- Manija de la heladera abajo -->
      <rect x="62" y="85" width="6" height="30" rx="3" fill="#0891B2"/>
      <!-- Imancitos adorables en la puerta -->
      <circle cx="120" cy="48" r="6" fill="#F43F5E"/> <!-- Manzanita -->
      <polygon points="120,44 122,48 126,48 123,51 124,55 120,52 116,55 117,51 114,48 118,48" fill="#FBBF24" transform="translate(-10, 50)"/> <!-- Estrellita -->
      <rect x="115" y="125" width="16" height="18" rx="2" fill="#FEF08A" stroke="#CA8A04" stroke-width="1"/> <!-- Notita -->
      <!-- Carita tierna en el refrigerador -->
      <circle cx="88" cy="110" r="5" fill="#164E63"/>
      <circle cx="89.5" cy="108.5" r="1.5" fill="#FFFFFF"/>
      <circle cx="112" cy="110" r="5" fill="#164E63"/>
      <circle cx="113.5" cy="108.5" r="1.5" fill="#FFFFFF"/>
      <path d="M 96 118 Q 100 123 104 118" stroke="#164E63" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <!-- Cubito de hielo sonriente al lado -->
      <g transform="translate(142, 110) scale(0.8)">
        <rect x="0" y="0" width="24" height="24" rx="6" fill="#67E8F9" stroke="#0891B2" stroke-width="2"/>
        <circle cx="8" cy="10" r="1.5" fill="#0E7490"/>
        <circle cx="16" cy="10" r="1.5" fill="#0E7490"/>
        <path d="M 9 15 Q 12 18 15 15" stroke="#0E7490" stroke-width="1.5" fill="none"/>
      </g>
      <!-- Destellos de frío -->
      <path d="M 38 45 L 43 50 M 43 45 L 38 50" stroke="#06B6D4" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    consumoDetalle: "Aprox. **150 W a 350 W** (según tecnología).",
    datos: "A diferencia de los aparatos anteriores, su potencia instantánea es moderada, pero es el único gran electrodoméstico que opera **las 24 horas del día de forma ininterrumpida**.",
    comparacion: "Aunque su consumo por hora es bajo en comparación con un aire acondicionado, al sumar todo el mes representa un porcentaje muy elevado del consumo base de la casa.",
    recomendaciones: [
      "Revisar periódicamente el buen estado de los burletes de goma para evitar filtraciones de aire cálido.",
      "Evitar abrir la puerta innecesariamente o dejarla abierta por tiempo prolongado."
    ],
    consejoInfantil: "¡No te quedes mirando dentro de la heladera pensando qué comer! Decide antes de abrirla para que no se escape el frío."
  },
  {
    id: 10,
    slug: "microondas",
    nombre: "Microondas",
    nombreCorto: "Microondas",
    categoria: "Cocina",
    colorPrimario: "#7C3AED",
    colorSecundario: "#C084FC",
    colorFondo: "#F3E8FF",
    potenciaWatts: "800 W a 1.200 W",
    potenciaCorta: "800 - 1.200 W",
    nivelConsumo: 3,
    nivelTexto: "¡Rápido y Eficiente!",
    svgIcon: `<svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-md">
      <ellipse cx="100" cy="182" rx="65" ry="10" fill="#00000015" />
      <!-- Gabinete del microondas -->
      <rect x="32" y="50" width="136" height="105" rx="16" fill="#FAF5FF" stroke="#7C3AED" stroke-width="4"/>
      <!-- Ventana de la puerta con cuadrícula -->
      <rect x="42" y="62" width="82" height="80" rx="8" fill="#1E1B4B" stroke="#A855F7" stroke-width="2"/>
      <rect x="48" y="68" width="70" height="68" rx="6" fill="#FBBF24" fill-opacity="0.25"/>
      <!-- Plato giratorio con pop-corn o tazita humeante -->
      <ellipse cx="83" cy="122" rx="28" ry="7" fill="#64748B"/>
      <!-- Pochoclera o tazón simpático -->
      <path d="M 72 120 L 75 105 L 91 105 L 94 120 Z" fill="#EF4444"/>
      <circle cx="78" cy="102" r="4" fill="#FEF08A"/>
      <circle cx="84" cy="99" r="4.5" fill="#FEF08A"/>
      <circle cx="89" cy="102" r="4" fill="#FEF08A"/>
      <!-- Panel de control a la derecha -->
      <rect x="132" y="62" width="28" height="80" rx="6" fill="#EDE9FE"/>
      <!-- Pantallita digital verde -->
      <rect x="136" y="68" width="20" height="14" rx="3" fill="#022C22"/>
      <text x="146" y="79" font-size="8" font-family="monospace" fill="#4ADE80" font-weight="bold" text-anchor="middle">01:30</text>
      <!-- Botones circulares -->
      <circle cx="146" cy="92" r="3.5" fill="#A855F7"/>
      <circle cx="146" cy="102" r="3.5" fill="#A855F7"/>
      <circle cx="146" cy="112" r="3.5" fill="#A855F7"/>
      <!-- Botón grande de inicio -->
      <rect x="137" y="122" width="18" height="12" rx="4" fill="#22C55E"/>
      <!-- Ondas microondas flotantes -->
      <path d="M 55 85 Q 65 75 75 85 Q 85 95 95 85" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </svg>`,
    consumoDetalle: "Aprox. **800 W a 1.200 W**.",
    datos: "Utiliza magnetrones para calentar los alimentos por fricción de moléculas de agua en tiempos muy cortos.",
    comparacion: "Consume menos de la mitad de energía que un horno eléctrico tradicional para calentar porciones individuales, debido a la eficiencia de su tecnología y la brevedad de su uso.",
    recomendaciones: [
      "Utilizarlo preferentemente para calentar o descongelar en lugar del horno convencional.",
      "Desenchufarlo o apagarlo desde la toma si cuenta con paneles digitales avanzados que mantengan un consumo fantasma (*stand-by*) constante."
    ],
    consejoInfantil: "¡Para calentar tu leche o tu comida, el microondas es súper veloz y gasta mucho menos que el horno grande!"
  }
];

// Consejo extra: El Consumo Vampiro
const CONSUMO_VAMPIRO_DATA = {
  id: 99,
  slug: "consumo-vampiro",
  nombre: "💡 Consejo Extra: El Consumo Vampiro",
  nombreCorto: "El Consumo Vampiro",
  categoria: "Consumo Fantasma",
  colorPrimario: "#6366F1",
  colorSecundario: "#818CF8",
  colorFondo: "#EEF2FF",
  svgIcon: `<svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-md">
    <ellipse cx="100" cy="182" rx="60" ry="10" fill="#00000020" />
    <!-- Capa de vampiro morada -->
    <path d="M 60 70 C 40 100, 30 150, 45 165 C 70 155, 80 140, 100 150 C 120 140, 130 155, 155 165 C 170 150, 160 100, 140 70 Z" fill="#312E81" stroke="#4338CA" stroke-width="3"/>
    <!-- Alitas de murciélago extendidas -->
    <path d="M 65 85 Q 20 60 15 95 Q 25 125 55 115" fill="#4338CA" stroke="#312E81" stroke-width="2"/>
    <path d="M 135 85 Q 180 60 185 95 Q 175 125 145 115" fill="#4338CA" stroke="#312E81" stroke-width="2"/>
    <!-- Cuerpo del vampirito amigable -->
    <rect x="70" y="70" width="60" height="75" rx="30" fill="#4F46E5"/>
    <!-- Moñito rojo de vampiro elegante -->
    <polygon points="100,105 88,98 88,112" fill="#EF4444"/>
    <polygon points="100,105 112,98 112,112" fill="#EF4444"/>
    <circle cx="100" cy="105" r="3" fill="#FBBF24"/>
    <!-- Carita tierna -->
    <circle cx="86" cy="85" r="6" fill="#FFFFFF"/>
    <circle cx="87" cy="84" r="3" fill="#1E1B4B"/>
    <circle cx="114" cy="85" r="6" fill="#FFFFFF"/>
    <circle cx="115" cy="84" r="3" fill="#1E1B4B"/>
    <!-- Sonrisa con colmillitos kawaii -->
    <path d="M 94 95 Q 100 100 106 95" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <polygon points="94,95 96,101 98,95" fill="#FFFFFF"/>
    <polygon points="102,95 104,101 106,95" fill="#FFFFFF"/>
    <!-- Enchufe eléctrico travieso en la mano -->
    <g transform="translate(130, 120) rotate(-20)">
      <rect x="0" y="0" width="22" height="16" rx="4" fill="#1E293B"/>
      <!-- Patitas del enchufe doradas -->
      <rect x="22" y="2" width="10" height="4" rx="1" fill="#FBBF24"/>
      <rect x="22" y="10" width="10" height="4" rx="1" fill="#FBBF24"/>
      <!-- Rayitos de energía -->
      <path d="M 34 -4 L 38 4 L 34 8 L 40 18" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </g>
    <!-- Zapatilla con interruptor off al pie -->
    <rect x="65" y="152" width="40" height="14" rx="4" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
    <rect x="92" y="155" width="8" height="8" rx="2" fill="#EF4444"/>
  </svg>`,
  descripcion: "Muchos artefactos (televisores, consolas de videojuegos, microondas con pantalla, cargadores enchufados sin uso) consumen energía silenciosamente en modo **stand-by**.",
  impacto: "Se estima que este consumo invisible puede representar hasta un **10% o 15% extra** en la factura eléctrica mensual.",
  solucion: "Utilizar zapatillas con interruptor o desenchufar los equipos que no se utilicen de forma frecuente ayuda a mitigarlo.",
  consejoInfantil: "¡Sé un cazador de vampiros de energía! Cuando termines de jugar a la consola o ver la tele, ¡apágalos por completo y no dejes cargadores enchufados sin tu celu!"
};
