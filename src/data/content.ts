// Todo el texto de la web vive aquí. Edita este archivo para actualizar tu portafolio.

export type Lang = 'es' | 'en';

export const profile = {
  name: 'Angel Serrano',
  email: 'angelmserranog@gmail.com',
  // En Argentina, el link de WhatsApp a celulares lleva un 9 después del 54
  whatsapp: '5493517609164',
  phone: '+54 351 760-9164',
  linkedin: 'https://www.linkedin.com/in/angelmserrano18',
  github: 'https://github.com/AMSG2647',
  cv: '/cv/AngelSerrano_CV.pdf',
};

// Habilidades principales con nivel. Ajusta años y nivel (0-100) a tu criterio.
// level: 'expert' | 'advanced' | 'intermediate'
export const topSkills = [
  { name: 'PHP', years: 7, level: 'expert', pct: 95 },
  { name: 'Laravel', years: 4, level: 'expert', pct: 90 },
  { name: 'MySQL', years: 7, level: 'expert', pct: 90 },
  { name: 'JavaScript', years: 7, level: 'advanced', pct: 88 },
  { name: 'React.js', years: 4, level: 'advanced', pct: 82 },
  { name: 'PostgreSQL', years: 4, level: 'advanced', pct: 82 },
  { name: 'Git', years: 7, level: 'advanced', pct: 85 },
  { name: 'Claude / IA', years: 2, level: 'advanced', pct: 80 },
  { name: 'Docker', years: 2, level: 'intermediate', pct: 65 },
  { name: 'Next.js', years: 2, level: 'intermediate', pct: 62 },
  { name: 'Linux / Nginx', years: 3, level: 'intermediate', pct: 65 },
  { name: 'AWS', years: 1, level: 'intermediate', pct: 50 },
] as const;

export const levelLabel = {
  es: { expert: 'Experto', advanced: 'Avanzado', intermediate: 'Intermedio' },
  en: { expert: 'Expert', advanced: 'Advanced', intermediate: 'Intermediate' },
} as const;

export const skills = [
  { group: { es: 'Backend', en: 'Backend' }, items: ['PHP', 'Laravel', 'Slim', 'REST API', 'MVC', 'OOP'] },
  {
    group: { es: 'Frontend', en: 'Frontend' },
    items: ['JavaScript', 'React.js', 'Next.js', 'Backbone.js', 'HTML5', 'CSS3', 'SASS', 'Material UI', 'Bootstrap'],
  },
  { group: { es: 'Bases de datos', en: 'Databases' }, items: ['MySQL', 'PostgreSQL', 'Oracle'] },
  {
    group: { es: 'DevOps', en: 'DevOps' },
    items: ['Docker', 'CI/CD', 'Linux', 'Nginx', 'AWS', 'Git', 'GitHub', 'GitLab'],
  },
  {
    group: { es: 'IA', en: 'AI' },
    items: ['Claude', 'Claude Code', 'Prompt Engineering', { es: 'Desarrollo asistido por IA', en: 'AI-assisted development' }],
  },
  {
    group: { es: 'Prácticas', en: 'Practices' },
    items: ['Scrum', 'Clean Code', { es: 'Arquitectura de Software', en: 'Software Architecture' }, { es: 'Seguridad Web', en: 'Web Security' }],
  },
] as const;

export const t = {
  es: {
    meta: {
      title: 'Angel Serrano — Desarrollador Full Stack (PHP · Laravel · React)',
      description:
        'Desarrollador Full Stack con 7 años de experiencia en PHP, Laravel, React y Next.js. Disponible para nuevos proyectos y posiciones remotas.',
    },
    nav: { about: 'Sobre mí', projects: 'Proyectos', experience: 'Experiencia', skills: 'Habilidades', contact: 'Contacto' },
    hero: {
      badge: 'Disponible para trabajar',
      hello: 'Hola, soy',
      role: 'Desarrollador Full Stack',
      tagline:
        'Construyo productos web robustos y escalables con PHP (Laravel) y JavaScript (React / Next.js). 7 años llevando sistemas a producción, desde pasarelas de pago hasta procesamiento asíncrono.',
      cta1: 'Descargar CV',
      cta2: 'Contactar',
      location: 'Córdoba, Argentina · Remoto',
    },
    stats: [
      { value: '7+', label: 'años de experiencia' },
      { value: '40K+', label: 'usuarios en sistemas que construí' },
      { value: '10+', label: 'clientes' },
    ],
    about: {
      title: 'Sobre mí',
      body: [
        'Soy Ingeniero en Informática y desarrollador Full Stack. Me especializo en PHP (Laravel) y JavaScript (React.js / Next.js), con sólido manejo de bases de datos relacionales como MySQL y PostgreSQL.',
        'Trabajo con buenas prácticas como Clean Code, OOP y metodologías ágiles (Scrum). Uso Docker y pipelines de CI/CD para que cada cambio llegue a producción de forma segura.',
        'Incorporo herramientas de IA generativa como Claude y Claude Code en mi flujo diario para acelerar el desarrollo, el debugging y la documentación sin resignar calidad.',
      ],
    },
    projects: {
      title: 'Proyectos destacados',
      subtitle: 'Sistemas reales, en producción, con usuarios reales.',
      problem: 'Desafío',
      solution: 'Solución',
      result: 'Resultado',
      items: [
        {
          name: 'JEX — Sistema de Gestión de Expedientes Judiciales',
          context: 'Estudio jurídico · Remoto',
          images: [
            { src: '/projects/jex-modulos.jpg', alt: 'Panel de módulos de JEX: expedientes, novedades, adjuntos, cuentas judiciales, liquidaciones y más', w: 1800, h: 972 },
            { src: '/projects/jex-login.jpg', alt: 'Pantalla de inicio de sesión de JEX', w: 1800, h: 968 },
          ],
          problem:
            'Los estudios jurídicos gestionaban expedientes y procesos legales de forma manual y dispersa.',
          solution:
            'Sistema web con módulos de expedientes, novedades, cédulas de notificación, cuentas judiciales, liquidaciones, órdenes de pago y títulos electrónicos. Backend Laravel con Jobs/Queues para procesar expedientes por abogado en segundo plano, frontend React con formularios dinámicos y datatables, y API REST sobre PostgreSQL.',
          result:
            'Desplegado con Docker en Linux/Nginx, con CI/CD que automatiza build, pruebas y despliegue en cada cambio.',
          stack: ['Laravel', 'React', 'PostgreSQL', 'Docker', 'Nginx', 'CI/CD'],
        },
        {
          name: 'Sistema de Cobro de Impuestos Municipales',
          context: 'Sysprim · Venezuela',
          images: [],
          problem:
            'Los municipios necesitaban recaudar impuestos de forma digital, con pagos en línea a través de los principales bancos del país.',
          solution:
            'Lideré el desarrollo desde cero con Laravel y React, integrando las pasarelas de pago de Mercantil, Banesco, BDV y BOD.',
          result: 'En uso por más de 6 entes gubernamentales y más de 40.000 usuarios.',
          stack: ['Laravel', 'React', 'MySQL', 'Pasarelas de pago'],
        },
        {
          name: 'Sistema Crediticio y PRELAFT',
          context: 'Informar Argentina S.A.',
          images: [],
          problem:
            'Las empresas necesitaban informes crediticios confiables y herramientas para detectar y prevenir el lavado de activos y la financiación del terrorismo (PRELAFT).',
          solution:
            'Desarrollé y optimicé secciones clave de los informes crediticios y fui responsable del módulo PRELAFT, con consultas de alto volumen en MySQL y PostgreSQL.',
          result: 'Alto impacto en la prevención de riesgos financieros para una base de 10.000 usuarios.',
          stack: ['PHP', 'Slim', 'Backbone.js', 'MySQL', 'PostgreSQL'],
        },
      ],
    },
    experience: {
      title: 'Experiencia',
      present: 'Presente',
      items: [
        {
          role: 'Desarrollador Full Stack',
          company: 'Estudio jurídico',
          place: 'Remoto',
          period: ['2025', null],
          points: [
            'Diseño y desarrollo completo de un sistema web para estudios jurídicos.',
            'Laravel con Jobs/Queues, React, API REST y PostgreSQL.',
            'Docker, Nginx y pipelines de CI/CD.',
            'Desarrollo asistido por IA (Claude, Claude Code) para código, tests y documentación.',
          ],
        },
        {
          role: 'Desarrollador Full Stack',
          company: 'Informar Argentina S.A.',
          place: 'Córdoba, Argentina',
          period: ['2022', '2026'],
          points: [
            'Desarrollé y optimicé secciones clave de informes crediticios para 10.000 usuarios.',
            'PHP con Slim y Backbone.js; interfaces responsive con Bootstrap 5.',
            'Responsable del módulo de prevención de lavado de dinero.',
            'Reportes de alto volumen en MySQL y PostgreSQL.',
          ],
        },
        {
          role: 'Desarrollador Full Stack & Project Manager',
          company: 'Sysprim',
          place: 'Venezuela',
          period: ['2019', '2022'],
          points: [
            'Lideré desde cero un sistema de cobro de impuestos municipales (+40.000 usuarios).',
            'Frontend y backend con React y Laravel.',
            'Integración de pasarelas de pago bancarias (Mercantil, Banesco, BDV, BOD).',
            'Gestión de proyectos y atención al cliente.',
          ],
        },
      ],
      education: {
        title: 'Educación',
        items: [
          { name: 'Ingeniería en Informática', place: 'UPTAEB · Venezuela', period: '2016 – 2021' },
          { name: 'Formación continua', place: 'Platzi / Udemy — Laravel, React, AWS, arquitectura', period: '2021 – Presente' },
        ],
      },
    },
    skills: { title: 'Habilidades', subtitle: 'Años de experiencia y nivel en mis tecnologías principales.', years: (n: number) => (n === 1 ? '1 año' : `${n} años`), more: 'También trabajo con' },
    contact: {
      title: '¿Trabajamos juntos?',
      body: 'Estoy buscando nuevas oportunidades como desarrollador Full Stack, remoto o en Córdoba. Escríbeme y te respondo pronto.',
      email: 'Enviar email',
      whatsappMsg: 'Hola Angel, vi tu portafolio y me gustaría hablar contigo.',
      languages: 'Español nativo · Inglés básico-intermedio',
    },
    footer: 'Hecho con Astro y Tailwind CSS.',
    langSwitch: { label: 'EN', href: '/en/' },
  },

  en: {
    meta: {
      title: 'Angel Serrano — Full Stack Developer (PHP · Laravel · React)',
      description:
        'Full Stack Developer with 7 years of experience in PHP, Laravel, React and Next.js. Open to new projects and remote positions.',
    },
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
    hero: {
      badge: 'Open to work',
      hello: "Hi, I'm",
      role: 'Full Stack Developer',
      tagline:
        'I build robust, scalable web products with PHP (Laravel) and JavaScript (React / Next.js). 7 years shipping systems to production, from payment gateways to background processing.',
      cta1: 'Download CV',
      cta2: 'Get in touch',
      location: 'Córdoba, Argentina · Remote',
    },
    stats: [
      { value: '7+', label: 'years of experience' },
      { value: '40K+', label: 'users on systems I built' },
      { value: '10+', label: 'clients' },
    ],
    about: {
      title: 'About me',
      body: [
        "I'm a Computer Engineer and Full Stack Developer. I specialize in PHP (Laravel) and JavaScript (React.js / Next.js), with strong experience in relational databases like MySQL and PostgreSQL.",
        'I follow good practices such as Clean Code, OOP and agile methodologies (Scrum). I use Docker and CI/CD pipelines so every change reaches production safely.',
        'I use generative AI tools like Claude and Claude Code every day to speed up development, debugging and documentation without compromising quality.',
      ],
    },
    projects: {
      title: 'Featured projects',
      subtitle: 'Real systems, in production, with real users.',
      problem: 'Challenge',
      solution: 'Solution',
      result: 'Outcome',
      items: [
        {
          name: 'JEX — Legal Case Management System',
          context: 'Law firm · Remote',
          images: [
            { src: '/projects/jex-modulos.jpg', alt: 'JEX modules dashboard: case files, updates, attachments, court accounts, settlements and more', w: 1800, h: 972 },
            { src: '/projects/jex-login.jpg', alt: 'JEX login screen', w: 1800, h: 968 },
          ],
          problem: 'Law firms were managing case files and legal processes manually and in scattered places.',
          solution:
            'Web system with modules for case files, updates, notification notices, court accounts, settlements, payment orders and electronic titles. Laravel backend with Jobs/Queues to process case files per lawyer in the background, React frontend with dynamic forms and data tables, and a REST API on PostgreSQL.',
          result:
            'Deployed with Docker on Linux/Nginx, with CI/CD that automates build, tests and deployment on every change.',
          stack: ['Laravel', 'React', 'PostgreSQL', 'Docker', 'Nginx', 'CI/CD'],
        },
        {
          name: 'Municipal Tax Collection System',
          context: 'Sysprim · Venezuela',
          images: [],
          problem:
            'Municipalities needed to collect taxes digitally, with online payments through the main banks in the country.',
          solution:
            'I led the development from scratch with Laravel and React, integrating payment gateways from Mercantil, Banesco, BDV and BOD.',
          result: 'Used by more than 6 government agencies and over 40,000 users.',
          stack: ['Laravel', 'React', 'MySQL', 'Payment gateways'],
        },
        {
          name: 'Credit Reporting & AML (PRELAFT) System',
          context: 'Informar Argentina S.A.',
          images: [],
          problem: 'Companies needed reliable credit reports and tools to detect and prevent money laundering and terrorist financing (PRELAFT).',
          solution:
            'I built and optimized key sections of the credit reports and owned the PRELAFT module, with high-volume queries on MySQL and PostgreSQL.',
          result: 'High impact on financial risk prevention for a base of 10,000 users.',
          stack: ['PHP', 'Slim', 'Backbone.js', 'MySQL', 'PostgreSQL'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      present: 'Present',
      items: [
        {
          role: 'Full Stack Developer',
          company: 'Law firm',
          place: 'Remote',
          period: ['2025', null],
          points: [
            'End-to-end design and development of a web system for law firms.',
            'Laravel with Jobs/Queues, React, REST API and PostgreSQL.',
            'Docker, Nginx and CI/CD pipelines.',
            'AI-assisted development (Claude, Claude Code) for code, tests and documentation.',
          ],
        },
        {
          role: 'Full Stack Developer',
          company: 'Informar Argentina S.A.',
          place: 'Córdoba, Argentina',
          period: ['2022', '2026'],
          points: [
            'Built and optimized key sections of credit reports for 10,000 users.',
            'PHP with Slim and Backbone.js; responsive UIs with Bootstrap 5.',
            'Owner of the anti-money laundering module.',
            'High-volume reporting on MySQL and PostgreSQL.',
          ],
        },
        {
          role: 'Full Stack Developer & Project Manager',
          company: 'Sysprim',
          place: 'Venezuela',
          period: ['2019', '2022'],
          points: [
            'Led a municipal tax collection system from scratch (40,000+ users).',
            'Frontend and backend with React and Laravel.',
            'Integrated bank payment gateways (Mercantil, Banesco, BDV, BOD).',
            'Project management and client support.',
          ],
        },
      ],
      education: {
        title: 'Education',
        items: [
          { name: 'Computer Engineering', place: 'UPTAEB · Venezuela', period: '2016 – 2021' },
          { name: 'Continuous learning', place: 'Platzi / Udemy — Laravel, React, AWS, architecture', period: '2021 – Present' },
        ],
      },
    },
    skills: { title: 'Skills', subtitle: 'Years of experience and level in my core technologies.', years: (n: number) => (n === 1 ? '1 year' : `${n} years`), more: 'I also work with' },
    contact: {
      title: "Let's work together",
      body: "I'm looking for new opportunities as a Full Stack Developer, remote or in Córdoba. Send me a message and I'll get back to you soon.",
      email: 'Send email',
      whatsappMsg: "Hi Angel, I saw your portfolio and I'd like to talk.",
      languages: 'Spanish (native) · English (basic-intermediate)',
    },
    footer: 'Built with Astro and Tailwind CSS.',
    langSwitch: { label: 'ES', href: '/' },
  },
} as const;
