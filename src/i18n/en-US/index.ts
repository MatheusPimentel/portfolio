import logoTagnosEducacao from 'assets/logo_tagnos_educacao.png';
import logoTagnosSocial from 'assets/logo_tagnos_social.png';

export default {
  nav: {
    brand: 'Matheus Pimentel',
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    work: 'Work',
    contact: 'Contact',
    theme: 'Toggle theme',
    language: 'Toggle language',
  },
  hero: {
    greeting: 'Hello, I am',
    name: 'Matheus Pimentel',
    role: 'Full-Stack Software Developer',
    punchline: 'I build efficient and scalable web applications, bridging robust back-ends with elegant, user-centric interfaces.',
    ctaDownload: 'Download CV',
    ctaGithub: 'View GitHub',
    visualizar: 'View Site',
  },
  about: {
    title: 'About me',
    subtitle: 'Passionate about creating delightful digital products that balance performance, accessibility, and aesthetics.',
    description: 'I am a software developer passionate about creating end-to-end solutions, from database structuring to the final user interface. I have a strong focus on best practices and design patterns, such as Clean Architecture, ensuring that the code is clean, scalable, and highly maintainable. \n\n My expertise flows seamlessly between the Java ecosystem (Spring Boot) on the back-end and modern front-end frameworks, primarily Vue.js (with Quasar) and React. Beyond coding, I enjoy orchestrating standardized and efficient development environments using tools like Docker and relational databases like PostgreSQL. My goal is always to optimize processes and build solid applications that solve real-world problems.',
    highlights: [
      'Vue 3 specialist',
      'Component-driven architecture',
      'UI performance & accessibility',
      'Typescript',
      'Javascript',
      "PostgreSQL",
    ],
  },
  skills: {
    title: 'Skills & Tools',
    subtitle: 'Technologies I use to design, build, and ship modern products.',
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
          { name: 'Generative AI', icon: 'fa-solid fa-brain', color: '#a855f7' },
        ],
      },
      {
        title: 'Databases',
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
        title: 'Process & Management',
        items: [
          { name: 'Scrum', icon: 'fa-solid fa-diagram-project', color: '#9333ea' },
          { name: 'Kanban', icon: 'fa-solid fa-table-columns', color: '#0ea5e9' },
          { name: 'Jira', icon: 'fa-brands fa-jira', color: '#0052cc' },
        ],
      },
    ],
  },
  projects: {
    title: 'Selected Work',
    subtitle: 'A few projects showcasing the blend of design systems, performance, and product thinking.',
    items: [
      {
        title: 'Tagnos Educação',
        description: 'Project built by TDR Informática focused on schools and educational institutions.',
        tech: ['Vue 2', 'Quasar', 'Javascript', 'Spring Boot', 'Java', 'PostgreSQL', 'JasperStudio', 'Jenkins', 'Docker'],
        liveUrl: 'https://tagnos.com.br/',
        image: logoTagnosEducacao,
        backgroundColor: '#eb8217',
        repoUrl: null
      },
      {
        title: 'Tagnos Social',
        description: 'Project built by TDR Informática focused on social care for municipalities.',
        tech: ['Vue 2', 'Quasar', 'Javascript', 'Spring Boot', 'Java', 'PostgreSQL', 'JasperStudio', 'Jenkins', 'Docker'],
        liveUrl: 'https://social.tagnos.com.br/',
        image: logoTagnosSocial,
        backgroundColor: '#005c51',
        repoUrl: null
      }
    ],
  },
  contact: {
    title: 'Let’s collaborate',
    subtitle: 'Tell me about your idea, product, or challenge. I will get back to you quickly.',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      emailHint: 'We use EmailJS. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in your env.',
      success: 'Message sent! I will reply soon.',
      error: 'Could not send the message. Please try again.',
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
