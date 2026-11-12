import logoTagnosEducacao from 'assets/logo_tagnos_educacao.png';
import logoTagnosSocial from 'assets/logo_tagnos_social.png';
import portfolio from 'assets/portfolio.png';

export default {
  nav: {
    rights: 'Todos os direitos reservados.',
    brand: 'Matheus Pimentel',
    home: 'Home',
    about: 'Sobre mim',
    skills: 'Skills',
    work: 'Trabalho',
    contact: 'Contato',
    theme: 'Alternar tema',
    language: 'Alternar idioma',
  },
  hero: {
    name: 'Matheus Pimentel',
    role: 'Desenvolvedor full-stack',
    punchline: 'Trabalho do banco de dados à tela: Java e Spring Boot no back-end, Vue e Quasar no front. Atuo nos sistemas Tagnos, de gestão para escolas e prefeituras.',
    ctaDownload: 'Baixar CV',
    ctaGithub: 'GitHub',
    ctaProjects: 'Ver projetos',
    layers: [
      { label: 'Interface', stack: ['Vue 3', 'Quasar', 'TypeScript', 'Tailwind'] },
      { label: 'API', stack: ['Java', 'Spring Boot'] },
      { label: 'Dados e entrega', stack: ['PostgreSQL', 'Docker', 'Jenkins'] },
    ],
  },
  about: {
    title: 'Sobre mim',
    subtitle: 'Apaixonado por criar produtos digitais que equilibram performance, acessibilidade e estética.',
    description: 'Sou um desenvolvedor de software apaixonado por criar soluções ponta a ponta, desde a estruturação do banco de dados até a interface final do usuário. Tenho um forte foco em boas práticas e padrões de projeto, como a Clean Architecture, garantindo que o código seja limpo, escalável e fácil de manter. \n\n' +
      'Minha atuação transita com fluidez entre o ecossistema Java (Spring Boot) no back-end e frameworks modernos de front-end, principalmente Vue.js (com Quasar) e React. Além de codificar, gosto de orquestrar ambientes de desenvolvimento padronizados e eficientes utilizando ferramentas como Docker e bancos relacionais como PostgreSQL. Meu objetivo é sempre otimizar processos e construir aplicações sólidas que resolvam problemas reais.',
    highlights: [
      'Especialista em Vue 3',
      'Arquitetura orientada a componentes',
      'Performance e acessibilidade',
      'Typescript',
      'Javascript',
      "PostgreSQL",
    ],
  },
  skills: {
    title: 'Skills e Ferramentas',
    subtitle: 'Tecnologias que uso para desenhar, construir e lançar produtos modernos.',
    categories: [
      {
        title: 'Frontend',
        items: [
          { name: 'Vue.js', icon: 'fa-brands fa-vuejs', color: '#42b883' },
          { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
          { name: 'Quasar', icon: 'fa-solid fa-mountain-sun', color: '#1976d2' },
          { name: 'TailwindCSS', icon: 'fa-solid fa-wind', color: '#38bdf8' },
          { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e34f26' },
          { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
          { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
          { name: 'TypeScript', icon: 'fa-solid fa-file-code', color: '#3178c6' },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'Node.js', icon: 'fa-brands fa-node', color: '#3c873a' },
          { name: 'Express', icon: 'fa-solid fa-road', color: '#303030' },
          { name: 'Java', icon: 'fa-brands fa-java', color: '#e76f00' },
          { name: 'Spring Boot', icon: 'fa-solid fa-seedling', color: '#6db33f' },
          { name: 'JasperStudio', icon: 'fa-regular fa-file-lines', color: '#009473' },
          { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
          { name: 'Firebase', icon: 'fa-solid fa-fire-flame-curved', color: '#ffca28' },
          { name: 'IA Generativa', icon: 'fa-solid fa-brain', color: '#a855f7' },
        ],
      },
      {
        title: 'Banco de Dados',
        items: [
          { name: 'PostgreSQL', icon: 'fa-solid fa-database', color: '#336791' },
          { name: 'MongoDB', icon: 'fa-solid fa-leaf', color: '#4caf50' },
          { name: 'Firestore', icon: 'fa-solid fa-database', color: '#ff7043' },
        ],
      },
      {
        title: 'DevOps & CI/CD',
        items: [
          { name: 'Docker', icon: 'fa-brands fa-docker', color: '#0db7ed' },
          { name: 'Jenkins', icon: 'fa-solid fa-gears', color: '#d24939' },
          { name: 'CI/CD', icon: 'fa-solid fa-rotate', color: '#6366f1' },
          { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#f05032' },
        ],
      },
      {
        title: 'Processos & Gestão',
        items: [
          { name: 'Scrum', icon: 'fa-solid fa-diagram-project', color: '#9333ea' },
          { name: 'Kanban', icon: 'fa-solid fa-table-columns', color: '#0ea5e9' },
          { name: 'Jira', icon: 'fa-brands fa-jira', color: '#0052cc' },
        ],
      },
    ],
  },
  projects: {
    title: 'Projetos',
    subtitle: 'O que construí, qual era o desafio e com o que.',
    challenge: 'Desafio',
    stack: 'Stack',
    live: 'Ver online',
    private: 'Código privado (projeto da empresa)',
    items: [
      {
        title: 'Tagnos Educação',
        description: 'Sistema de gestão para escolas e instituições de ensino, da TDR Informática.',
        challenge: 'Reunir matrícula, diário de classe, frequência e notas num único sistema, com documentos e relatórios gerados no servidor.',
        tech: ['Vue 2', 'Quasar', 'Spring Boot', 'PostgreSQL', 'JasperStudio', 'Jenkins', 'Docker'],
        liveUrl: 'https://tagnos.com.br/',
        image: logoTagnosEducacao,
        backgroundColor: '#eb8217',
        repoUrl: null,
      },
      {
        title: 'Tagnos Social',
        description: 'Sistema de atendimento social para municípios, da TDR Informática.',
        challenge: 'Digitalizar o atendimento social das prefeituras, com cadastros e relatórios emitidos pelo próprio sistema.',
        tech: ['Vue 2', 'Quasar', 'Spring Boot', 'PostgreSQL', 'JasperStudio', 'Jenkins', 'Docker'],
        liveUrl: 'https://social.tagnos.com.br/',
        image: logoTagnosSocial,
        backgroundColor: '#005c51',
        repoUrl: null,
      },
      {
        title: 'Portfólio pessoal',
        description: 'Este site: Quasar, Vue 3 e TypeScript.',
        challenge: 'Um site simples de manter: tema claro e escuro, dois idiomas, build em Docker e publicação automática.',
        tech: ['Vue 3', 'Quasar', 'TypeScript', 'Tailwind', 'Docker'],
        liveUrl: 'https://matheuspimentell.com.br/#/',
        image: portfolio,
        backgroundColor: null,
        repoUrl: 'https://github.com/MatheusPimentel/portfolio',
      },
    ],
  },
  contact: {
    title: 'Vamos colaborar',
    subtitle: 'Conte-me sobre sua ideia, produto ou desafio. Vou responder rapidamente.',
    form: {
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar mensagem',
      emailHint: 'Usamos EmailJS. Configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID e VITE_EMAILJS_PUBLIC_KEY no seu env.',
      success: 'Mensagem enviada! Vou responder em breve.',
      error: 'Não foi possível enviar. Tente novamente.',
    },
    social: [
      { name: 'GitHub', url: 'https://github.com/MatheusPimentel', icon: 'fa-brands fa-github', color: '#181717' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/matheus-v-pimentel/', icon: 'fa-brands fa-linkedin', color: '#0A66C2' },
      { name: 'Instagram', url: 'https://www.instagram.com/m.pimentell/', icon: 'fa-brands fa-instagram', color: '#E4405F' },
      { name: 'Gmail', url: 'mailto:matheus200713@gmail.com', icon: 'fa-regular fa-envelope', color: '#D14836' },
      { name: 'Outlook', url: 'mailto:matheus200713@outlook.com', icon: 'fa-regular fa-envelope', color: '#0078D4' },
    ],
  },
};
