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
- `config/identity.json` - Datos personales centralizados (Email, Bio, Redes Sociales)
- `config/theme.json` - Sistema de theming dinámico con CSS Variables
- `config/i18n.ts` - Soporte nativo multi-idioma (ES, EN, FR, PT)
- `lib/email/` - Sistema de envío de emails desacoplado (Provider Pattern)

**Inyección de Estilos:**
El ThemeProvider inyecta automáticamente las variables del `theme.json` como CSS Variables para uso dinámico con Tailwind.

### 📦 Módulos Incluidos

1. **Navbar** - Selector de idioma, toggle light/dark, menú móvil
2. **Hero** - Avatar con glow effect, stats dinámicas, bio y enlace de contacto interactivo
3. **Terminal NOW** - Simulación de terminal Fedora con typing effect
4. **Mental Sandbox** - Timeline cronológico con badges de estado [LEARNING, SOLVING, BLOCKED, EUREKA]
5. **Bento Grid** - GitHub stats, redes sociales, The Shelf (libros), Spotify widget
6. **Engineering Journal** - Blog con categorías (Architecture, Java Lab, Cloud)
7. **The Hunter** - Widget inteligente de captura de leads con tracking
8. **Contact** - Formulario funcional integrado con Resend

### 🔧 Stack Técnico

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 con tokens semánticos
- **Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Email:** Resend (Server Actions + Clean Architecture)
- **TypeScript:** Tipado completo

## 🚀 Instalación

```bash
# Instalar dependencias (incluyendo Resend)
npm install

# Modo desarrollo
npm run dev
```

## ⚙️ Configuración (White Label)

### 1. Variables de Entorno (Requerido para Email)
Crea un archivo `.env.local` en la raíz del proyecto para habilitar el formulario de contacto:

```env
# Clave API de Resend (https://resend.com)
RESEND_API_KEY=re_123456789...

# Email donde recibirás los mensajes del formulario
CONTACT_EMAIL=tu-email@dominio.com
```

### 2. Modificar Identidad
Edita `config/identity.json`. Todos los componentes (incluyendo Hero, Footer y Contacto) leen de aquí:

```json
{
  "name": "Tu Nombre",
  "title": "Tu Título",
  "headline": "Tu Headline",
  "bio": "Tu biografía...",
  "avatar": "/tu-avatar.png",
  "email": "contacto@tudominio.dev", // Se usa para la funcionalidad del botón de contacto
  "socials": { ... }
}
```

### 3. Personalizar Tema
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

### 4. Añadir Traducciones
Modifica `config/i18n.ts` para agregar nuevos textos o idiomas.
- `hero.email_prefix`: Prefijo del botón de email en el Hero.
- `contact.*`: Textos del formulario de contacto.

## 🔗 Integración Backend & Arquitectura

La plataforma usa Server Actions para procesar formularios, manteniendo la seguridad y velocidad.

**Estructura de Email:**
- `lib/email/service.ts`: Interfaz del servicio (Desacoplamiento).
- `lib/email/providers/resend.ts`: Implementación concreta con Resend.
- `app/actions/send-email.ts`: Server Action que orquesta el envío.

## 📊 Analytics & Tracking

El módulo `lib/tracking.ts` incluye un tracker mock que registra:
- Profundidad de scroll
- Secciones visitadas
- Interacciones por categoría

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
