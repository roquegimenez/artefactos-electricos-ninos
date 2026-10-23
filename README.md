# ⚡ Guía Interactiva Infantil: Los 10 Artefactos Eléctricos de Mayor Consumo

¡Bienvenido al proyecto interactivo diseñado para niños y familias sobre el consumo responsable de energía eléctrica en el hogar!

## 🚀 Cómo abrir y usar la aplicación

1. **Abrir directamente en tu navegador**:
   - Haz doble clic en [`standalone.html`](./standalone.html) para abrir la versión completa en un solo archivo (ideal para compartir o usar sin conexión).
   - O abre [`index.html`](./index.html) para la versión modular.

2. **Estructura del Proyecto**:
   - [`index.html`](./index.html): Documento principal de la aplicación.
   - [`styles.css`](./styles.css): Estilos visuales coloridos, animaciones infantiles y diseño responsivo.
   - [`data.js`](./data.js): Base de datos con los 10 artefactos, el Consejo Vampiro y las ilustraciones vectoriales (SVG).
   - [`app.js`](./app.js): Lógica de navegación entre vistas (SPA), efectos de sonido sintetizados (`Web Audio API`) y lector de voz (`SpeechSynthesis`).
   - [`standalone.html`](./standalone.html): Versión autocontenida que reúne todo en un único archivo.

## 🎯 Características Principales

- **Página Principal**: Grilla de tarjetas donde únicamente se muestra la ilustración del artefacto y su nombre, con efecto de rebote y numeración.
- **Página de Detalle Completo**: Al hacer clic en cualquier artefacto, se despliega una vista completa con:
  - Potencia estimada y consumo detallado.
  - Consumómetro visual con rayos de energía (⚡).
  - Datos clave y comparaciones de uso.
  - Recomendaciones prácticas para optimizar el gasto de energía.
  - Consejo especial redactado para niños.
  - Botón de audio para escuchar la explicación en voz alta.
  - Botón siempre visible **"⬅️ Volver a la página principal"**.
- **El Consumo Vampiro 🦇**: Página especial interactiva para aprender a cazar el consumo fantasma en modo stand-by.
