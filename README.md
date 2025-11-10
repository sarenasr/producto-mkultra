# MK-ULTRA - Proyecto de Historia

Una página web interactiva sobre el programa MK-ULTRA de la CIA, creada con React y desplegada en GitHub Pages.

## 📋 Descripción

Este proyecto documenta la historia del Proyecto MK-ULTRA, un programa secreto de la CIA durante la Guerra Fría que involucró experimentos de control mental y modificación de comportamiento en sujetos humanos. La página web está basada exclusivamente en documentos gubernamentales desclasificados, testimonios del Congreso y fuentes académicas verificables.

## 🎯 Características

- **Diseño Responsivo**: Funciona perfectamente en dispositivos móviles, tabletas y escritorio
- **Animaciones Interactivas**: Utiliza Framer Motion para transiciones suaves y efectos visuales
- **Navegación Intuitiva**: Menú fijo con navegación smooth scroll
- **Contenido Estructurado**: 8 secciones principales con información detallada
- **Fuentes Verificables**: Todas las afirmaciones están respaldadas por documentos oficiales
- **Tema Oscuro**: Diseño elegante con paleta de colores dorado (#c9a961) y negro

## 🛠️ Tecnologías Utilizadas

- **React 18.2.0**: Biblioteca principal de JavaScript
- **Framer Motion 10.16.4**: Animaciones y transiciones
- **gh-pages 6.1.0**: Despliegue en GitHub Pages
- **Google Fonts**: Inter y Playfair Display

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Git

### Pasos de Instalación

1. **Clonar el repositorio**

   ```powershell
   git clone https://github.com/sarenasr/producto-mkultra.git
   cd producto-mkultra
   ```

2. **Instalar dependencias**

   ```powershell
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```powershell
   npm start
   ```
   La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

## 🚀 Despliegue en GitHub Pages

### Configuración Inicial

1. **Asegúrate de que tu repositorio esté en GitHub**

   ```powershell
   git remote -v
   ```

   Debe mostrar: `https://github.com/sarenasr/producto-mkultra.git`

2. **Verifica el campo `homepage` en package.json**
   ```json
   "homepage": "https://sarenasr.github.io/producto-mkultra"
   ```

### Desplegar la Aplicación

Ejecuta el siguiente comando para construir y desplegar:

```powershell
npm run deploy
```

Este comando:

1. Construye la versión de producción (`npm run build`)
2. Despliega el contenido a la rama `gh-pages`
3. La página estará disponible en: `https://sarenasr.github.io/producto-mkultra`

### Actualizar el Sitio

Para actualizar el sitio después de hacer cambios:

```powershell
git add .
git commit -m "Descripción de los cambios"
git push origin main
npm run deploy
```

## 📁 Estructura del Proyecto

```
producto-mkultra/
├── public/
│   ├── index.html          # Template HTML principal
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navigation.js    # Barra de navegación
│   │   ├── Navigation.css
│   │   ├── Hero.js          # Sección hero
│   │   ├── Hero.css
│   │   ├── Introduction.js  # Introducción
│   │   ├── Introduction.css
│   │   ├── Context.js       # Contexto histórico
│   │   ├── Context.css
│   │   ├── Timeline.js      # Línea de tiempo
│   │   ├── Timeline.css
│   │   ├── Actors.js        # Actores clave
│   │   ├── Actors.css
│   │   ├── Methods.js       # Métodos y experimentos
│   │   ├── Methods.css
│   │   ├── Investigations.js # Investigaciones
│   │   ├── Investigations.css
│   │   ├── Sources.js       # Fuentes y referencias
│   │   ├── Sources.css
│   │   ├── Footer.js        # Pie de página
│   │   └── Footer.css
│   ├── App.js              # Componente principal
│   ├── App.css             # Estilos principales
│   ├── index.js            # Punto de entrada
│   └── index.css           # Estilos globales
├── context/
│   └── context.xml         # Datos fuente del proyecto
├── package.json            # Dependencias y scripts
└── README.md              # Este archivo
```

## 🎨 Secciones del Sitio

1. **Hero**: Presentación visual impactante con título animado
2. **Introducción**: Descripción general del programa MK-ULTRA
3. **Contexto Histórico**: Guerra Fría y antecedentes del programa
4. **Cronología**: Línea de tiempo interactiva (1950-1995)
5. **Actores Clave**: Perfiles de 6 figuras principales
6. **Métodos**: Detalles de 6 técnicas experimentales
7. **Investigaciones**: 5 investigaciones gubernamentales y legado
8. **Fuentes**: 5 fuentes primarias y recursos adicionales

## 📝 Scripts Disponibles

- `npm start`: Ejecuta la aplicación en modo desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm test`: Ejecuta los tests
- `npm run deploy`: Despliega a GitHub Pages
- `npm run predeploy`: Pre-comando que ejecuta build antes de deploy

## 🎓 Información Académica

**Institución**: Universidad de los Andes  
**Ubicación**: Bogotá, Colombia  
**Propósito**: Proyecto educativo e histórico  
**Licencia**: CC BY-NC 4.0 (Creative Commons Attribution-NonCommercial 4.0 International)

## 📚 Fuentes Principales

1. **Senate MK-ULTRA Hearing (1977)** - Audiencias del Senado de EE.UU.
2. **The National Security Archive** - Documentos desclasificados
3. **Church Committee Report (1976)** - Investigación del Senado
4. **Comisión Rockefeller (1975)** - Investigación presidencial
5. Investigaciones académicas y periodísticas verificadas

## ⚠️ Aviso de Contenido

Este sitio web describe experimentos que involucraron abuso físico y psicológico, trauma severo y violaciones de derechos humanos. El contenido se presenta con fines educativos e históricos, manteniendo el respeto por las víctimas y sus familias.

## 🤝 Contribuciones

Este es un proyecto académico. Para sugerencias o correcciones:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia CC BY-NC 4.0 (Creative Commons Attribution-NonCommercial 4.0 International).

Puedes:

- Compartir: copiar y redistribuir el material
- Adaptar: remezclar, transformar y construir sobre el material

Bajo los siguientes términos:

- **Atribución**: Debes dar crédito apropiado
- **No Comercial**: No puedes usar el material con fines comerciales

## 👥 Autores

Proyecto desarrollado como parte de un trabajo académico en la Universidad de los Andes.

## 🙏 Agradecimientos

En memoria de las víctimas de MK-ULTRA y sus familias, quienes sufrieron violaciones irreparables de sus derechos humanos.

---

**Nota**: Todo el contenido está basado en documentos gubernamentales desclasificados y fuentes verificables. No se incluyen teorías conspirativas no documentadas ni especulaciones sin fundamento.
