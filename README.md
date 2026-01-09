# 🚀 Proyecto Curriculum - White Label Platform

Plataforma de portafolio profesional de marca blanca con arquitectura modular, diseñada para ingenieros Staff/Principal nivel.

## ✨ Características

### 🎨 Tech-Noir Design System
- Modo oscuro profundo (zinc-950) con bordes quirúrgicos
- Tipografía Geist Sans + Geist Mono
- Efectos de glow perimetral y animaciones fluidas
- Mobile-first responsive

### 🛠️ Arquitectura White Label

**Desacoplamiento Total:**
- `config/identity.json` - Datos personales centralizados
- `config/theme.json` - Sistema de theming dinámico con CSS Variables
- `config/i18n.ts` - Soporte nativo multi-idioma (ES, EN, FR, PT)

**Inyección de Estilos:**
El ThemeProvider inyecta automáticamente las variables del `theme.json` como CSS Variables para uso dinámico con Tailwind.

### 📦 Módulos Incluidos

1. **Navbar** - Selector de idioma, toggle light/dark, menú móvil
2. **Hero** - Avatar con glow effect, stats dinámicas, bio
3. **Terminal NOW** - Simulación de terminal Fedora con typing effect
4. **Mental Sandbox** - Timeline cronológico con badges de estado [LEARNING, SOLVING, BLOCKED, EUREKA]
5. **Bento Grid** - GitHub stats, redes sociales, The Shelf (libros), Spotify widget
6. **Engineering Journal** - Blog con categorías (Architecture, Java Lab, Cloud)
7. **The Hunter** - Widget inteligente de captura de leads con tracking

### 🔧 Stack Técnico

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 con tokens semánticos
- **Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **TypeScript:** Tipado completo

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build producción
npm run build
npm start
```

## 🎯 Personalización

### 1. Modificar Identidad
Edita `config/identity.json`:

```json
{
  "name": "Tu Nombre",
  "title": "Tu Título",
  "headline": "Tu Headline",
  "bio": "Tu biografía...",
  "avatar": "/tu-avatar.png",
  "socials": { ... }
}
```

### 2. Personalizar Tema
Edita `config/theme.json`:

```json
{
  "colors": {
    "primary": "oklch(0.7 0.25 220)",
    "accent": "oklch(0.65 0.28 180)",
    ...
  },
  "borderRadius": "0.5rem",
  "fontFamily": {
    "sans": "Tu Font",
    "mono": "Tu Mono Font"
  }
}
```

### 3. Añadir Traducciones
Modifica `config/i18n.ts` para agregar nuevos textos o idiomas.

## 🔗 Integración con Backend

La plataforma está lista para consumir APIs Java 21. Endpoints sugeridos:

```typescript
// Ejemplo de integración
GET /api/identity      // Obtener datos de identity.json
GET /api/articles      // Listar artículos del journal
POST /api/leads        // Capturar leads desde The Hunter
GET /api/analytics     // Stats de tracking
```

## 📊 Analytics & Tracking

El módulo `lib/tracking.ts` incluye un tracker mock que registra:
- Profundidad de scroll
- Secciones visitadas
- Interacciones por categoría

Listo para integrar con servicios reales (Mixpanel, Segment, Google Analytics).

## 🌐 Multi-idioma

Cambia el idioma usando el selector en el Navbar. Los textos se cargan dinámicamente desde `config/i18n.ts`.

Idiomas soportados:
- 🇬🇧 English (en)
- 🇪🇸 Español (es)
- 🇫🇷 Français (fr)
- 🇵🇹 Português (pt)

## 📝 Licencia

Proyecto de marca blanca - Libre para personalizar y usar.

---

**Built with ❤️ by v0** - Ready for Java 21 Backend Integration
