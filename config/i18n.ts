export type Locale = "en" | "es" | "fr" | "pt"

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      journal: "Journal",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      cta: "View My Work",
      contact: "Get in Touch",
    },
    terminal: {
      title: "NOW",
      prompt: "antonio@fedora:~$",
    },
    sandbox: {
      title: "The Mental Sandbox",
      subtitle: "Live development log & learning notes",
    },
    journal: {
      title: "Engineering Journal",
      categories: {
        architecture: "Architecture",
        java: "Java Lab",
        cloud: "Cloud & DevOps",
      },
    },
    hunter: {
      message: "I see you're interested in {category}. Want to connect on LinkedIn?",
      placeholder: "your@email.com",
      submit: "Let's Talk",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      journal: "Blog",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      cta: "Ver mi trabajo",
      contact: "Hablemos",
    },
    terminal: {
      title: "AHORA",
      prompt: "antonio@fedora:~$",
    },
    sandbox: {
      title: "El Sandbox Mental",
      subtitle: "Registro de desarrollo y notas de aprendizaje",
    },
    journal: {
      title: "Diario de Ingeniería",
      categories: {
        architecture: "Arquitectura",
        java: "Laboratorio Java",
        cloud: "Cloud & DevOps",
      },
    },
    hunter: {
      message: "Veo que te interesa {category}. ¿Hablamos en LinkedIn?",
      placeholder: "tu@email.com",
      submit: "Conectemos",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      journal: "Blog",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      cta: "Voir mon travail",
      contact: "Contactez-moi",
    },
    terminal: {
      title: "MAINTENANT",
      prompt: "antonio@fedora:~$",
    },
    sandbox: {
      title: "Le Sandbox Mental",
      subtitle: "Journal de développement et notes d'apprentissage",
    },
    journal: {
      title: "Journal d'Ingénierie",
      categories: {
        architecture: "Architecture",
        java: "Labo Java",
        cloud: "Cloud & DevOps",
      },
    },
    hunter: {
      message: "Je vois que {category} vous intéresse. Parlons sur LinkedIn?",
      placeholder: "votre@email.com",
      submit: "Parlons",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      journal: "Blog",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, sou",
      cta: "Ver meu trabalho",
      contact: "Entre em contato",
    },
    terminal: {
      title: "AGORA",
      prompt: "antonio@fedora:~$",
    },
    sandbox: {
      title: "O Sandbox Mental",
      subtitle: "Registro de desenvolvimento e notas de aprendizagem",
    },
    journal: {
      title: "Diário de Engenharia",
      categories: {
        architecture: "Arquitetura",
        java: "Laboratório Java",
        cloud: "Cloud & DevOps",
      },
    },
    hunter: {
      message: "Vejo que você está interessado em {category}. Quer conversar no LinkedIn?",
      placeholder: "seu@email.com",
      submit: "Vamos conversar",
    },
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en
}
