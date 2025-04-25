export default {
  metadata: {
    'home': {
      title: "Portfolio",
      description: "Ethan Le Neindre, {age} years old, currently a 3rd year student in a Bachelor's degree in Computer Science in Caen.",
    },
    'profile': {
      title: "Profile",
      description: "Ethan Le Neindre, {age} years old, currently a 3rd year student in a Bachelor's degree in Computer Science in Caen.",
    },
    'skills': {
      title: "Skills",
      description: "Here is the list of my skills, as a representation.",
    },
    'projects': {
      title: "Projects",
      description: "Here are my current and future projects.",
    },
    'links': {
      title: "Links",
      description: "Find here all the useful links to know more about me, and contact me.",
    },
    'documents': {
      title: "Documents",
      description: "Here is the list of my documents.",
    },
    'cv': {
      title: "CV",
      description: "Here is my minimalist CV, entirely in web and downloadable.",
    },
  },
  title: "My portfolio",
  me: "Ethan Le Neindre, fullstack and web developper.",
  description: "Hi! Welcome to my portfolio. You will find my skills, my projects, my links and my documents, and all about me. You can navigate threw the site with the buttons below, and the buttons in the navigation icon in the top left corner of each page. Vous pouvez aussi changer de langue avec l'icone de traduction en haut à droite :). Enjoy your visit!",
  buttons: {
    'home': 'Home',
    'profile': 'Profile',
    'skills': 'Skills',
    'projects': 'Projects',
    'links': 'Links',
    'documents': 'Documents'
  },
  documents: {
    description: "Welcome to my documents page.",
    export: "Export to:",
    buttons: {
      back: "Back",
    }
  },
  profile: {
    description: "Learn more about me.",
    texts: {
      scolarship: "I completed a general baccalaureate in France, with NSI (IT speciality) and mathematics options, and DNL maths (math studies in english) and Maths expertes (harder math) options. Then, I prepared a university bachelor's degree in computer science (which I am currently finishing). I plan to become an IT engineer, with the E-payment and Cybersecurity training from ENSICAEN.",
      professional: "During my university career, I completed a 10-week internship at Distritech, during which I produced the company's display site, and started to create a stock management site between SMEs. This year, I am doing a work-study program at SAP Labs France, where I am a fullstack developer on associative and internal projects.",
      personal: "I am passionate about computer science, and I love learning new things. I like sports, and I play basketball at SUAPS Caen. I also love music (ROCK !! 🤘). In my free time, I like to walk, meet and talk to people, and develop websites and web applications (yes, it's compatible :) ). I challenge myself, like painting, playing guitar and piano, learning German. In short, vita est dives in inventa (life is rich in discoveries)!"
    },
    titles: {
      scolarship: "School experience",
      professional: "Professional experience in IT",
      personal: "Personal experience"
    }
  },
  skills: {
    levels: {
      project: "In project",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      expert: "Expert"
    },
    texts: {
      description: "Here is the list of my skills, as a representation.",
      languages: "Programming languages",
      frameworks: "Frameworks",
      tools: "Tools",
      skillDetails: "Skills details"
    },
    errors: {
      noPic: 'No picture for the moment',
    },
  },
  links: {
    texts: {
      description: "You can foolow me on all the following links."
    },
    errors: {},
  },
  projects: {
    list: {
      covoit: "Covoit is a small Laravel application I created to manage carpooling trips with tracking and payments with my friends.",
      portfolio: "Portfolio is a project (this page) I created to manage my portfolio, with NextJS and TailwindCSS.",
      puissance4: "Puissance 4 is one of my first team projects with 2 of my high school classmates, Titouan and Evan.",
      solution_trombinoscope: "Solution trombinoscope is a project I created at university. It allows to manage photos, people and roles in C#.",
      youteam: "YouTeam is one of my personal projects of a video publishing site, like YouTube. It aims to allow users to publish videos securely with group management, and potentially sharing through an integrated chat (the project is still in progress, the link is a dev version not stable and temporary).",
      '4kwizz': "4Kwizz is a project I created with a friend, it is a quiz site with a lot of quizzes and a lot of questions, with a ranking system and a user system.",
      share_portfolio: "Share my portfolio is a project of portfolio sharing, where you can share your portfolio with other people, by feeding it with your projects and your skills, with syles I would create. It would be downloadable to self-hosted it in React/NextJS.",
    },
    texts: {
      description: "Here is the list of my projects, finished and/or published, and future projects.",
      current: "Current projects",
      future: "Future projects",
    },
    errors: {},
  },
} as const

