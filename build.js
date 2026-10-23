const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Usuario\\.gemini\\antigravity\\scratch\\artefactos-electricos-ninos';

const css = fs.readFileSync(path.join(srcDir, 'styles.css'), 'utf8');
const data = fs.readFileSync(path.join(srcDir, 'data.js'), 'utf8');
const app = fs.readFileSync(path.join(srcDir, 'app.js'), 'utf8');

const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Los 10 Artefactos Eléctricos de Mayor Consumo | Para Niños</title>
  <style>
${css}
  </style>
</head>
<body>
  <div id="app-container">
    <div id="view-content" class="view-container">
      <!-- Contenido interactivo renderizado por app.js -->
    </div>
  </div>

  <script>
${data}
${app}
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(srcDir, 'standalone.html'), html, 'utf8');
console.log('standalone.html created in scratch folder');
