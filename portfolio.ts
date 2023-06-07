import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Lucas Wong',
  title: "Hey, Nice to meet you! I'm Lucas!",
  description:
    "Hello! I am a software developer with four years of experience. My passion for learning and tackling new challenges has been the driving force behind my career. I am always eager to explore the latest technologies, continuously improving my skills to reach new milestones. I believe that my dedication, adaptability, and commitment to growth make me an ideal candidate for any innovative organization.",
  resumeLink:
    'https://drive.google.com/file/d/1yiLNSO8bIb_eJILL-gldVWZsLLRArmZO/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'lucaszj99',
};

export const contact = {
  email:"lucasw0221@gmail.com",
};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/lucas-wong-zi-jiang/',
  github: 'https://github.com/lucaszj99',
  instagram: 'https://www.instagram.com/lu_cas.zj/',
  facebook: 'https://www.facebook.com/wongzijiang.zjwong/',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Full Stack Developer who wants to explore every tech stack',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/developer-lottie.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building responsive websites using Next.js / React.js'),
        emoji('⚡ Building RESTful APIs in NodeJs & Nestjs Framework'),
        emoji('⚡ Postgresql , MySQL & Redis Database Management'),
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          fontAwesomeClassName: 'vscode-icons:file-type-typescript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Nestjs',
          fontAwesomeClassName: 'vscode-icons:file-type-nestjs',
        },
        {
          skillName: 'Graphql',
          fontAwesomeClassName: 'vscode-icons:file-type-graphql',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'Java',
          fontAwesomeClassName: 'logos:java',
        },
        {
          skillName: 'Spring Boot',
          fontAwesomeClassName: 'logos:spring-icon',
        },
      ],
    }
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '50', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Multimedia University',
    subHeader: 'Bachelor of Computer Science (Hons) in Software Engineering',
    duration: 'July 2017 - September 2021',
    desc: '',
    grade: 'CGPA 3.75',
    descBullets: [
      `Final Year Project (FYP) - Real Time Business Occupancy Tracking System (ReBOT)`,
      `Develop an web & mobile application for premise to track in-store occupancy and
      record customer visits`,
      `Develop with ReactJs, React Native, Express & Firebase`
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Junior Software Developer',
    company: 'One2Deal Sdn Bhd',
    companyLogo: '/img/icons/common/one2deal.jpeg',
    date: 'Oct 2022 – Present',
    desc: `Design and develop an Enterprise Resource Planning (ERP) solution for a ecommerce company to handle their inventory, order, shipping, and accounting management.`,
    descBullets:[`API integration involving FedEx, WooCommerce, Easy Parcel & Shopee`,
    `Tech involved: NextJS (Typescript), NestJS with TypeORM (Typescript), PostgreSQL,
    Redis, GraphQL`],
  },
  {
    role: 'Junior Software Developer',
    company: 'Grandshopware Sdn Bhd',
    companyLogo: '/img/icons/common/grandshopware.png',
    date: 'Jan 2022 – Mar 2022',
    desc: 'Design and develop an Enterprise Resource Planning (ERP) solution from scratch.',
    descBullets:[`Engage in ongoing discussions with clients to gather and clarify requirements.`,
    `•Scrape product information from other official websites using puppeteer`,
    `Tech involved: NextJS (Typescript), NestJS with TypeORM (Typescript), PostgreSQL,
    Redis, GraphQL`],
  },
  {
    role: 'Software Engineer (Part-time & Intern)',
    company: 'Leocode Sdn Bhd',
    companyLogo: '/img/icons/common/leocode.png',
    date: 'Dec 2019 - June 2021',
    desc: `Participated in client meetings to discuss project requirements. Assist with development of new features and bug fixes.`,
    descBullets:[
      `Tech Involved: Spring Boot with MyBatis (Java), Django (Python), MySQL`
    ]
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Real Time Business Occupancy Tracking System (ReBOT) -Merchant',
    github:'https://github.com/lucaszj99/rebot_merchant',
    desc: `Web application for premise to track in-store occupancy and
    record customer visits`,
  },

  {
    name: 'Real Time Business Occupancy Tracking System (ReBOT)- App',
    github:'https://github.com/lucaszj99/rebot-app',
    desc: `Mobile application for check in and out of premise and reserve a slot for visits`,
  },

  {
    name: 'Working Hard',
    desc:'Trying to make more projects... Coming soon!'
  }
];

export const feedbacks: FeedbackType[] = [
  
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Lucas Wong',
  description:
    'A passionate Software Developer.',
  author: 'Lucas Wong',
  image: 'https://drive.google.com/file/d/155bvxqXMiEFE5AnSaO8erwTLJdpc0DM5/view?usp=drivesdk',
  url: 'https://lucas-wong-portfolio.vercel.app/',
  keywords: [
    'Lucas Wong',
    '@lucaszj99',
    'lucaszj99',
    'Portfolio',
    'Lucas Wong Portfolio ',
    'Wong Zi Jiang Portfolio',
  ],
};
