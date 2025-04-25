export default {
  metadata: {
    'home': {
      title: "Portfolio",
      description: "Ethan Le Neindre, développeur de {age} ans, actuellement étudiant en 3e année de BUT Informatique à Caen.",
    },
    'profile': {
      title: "Profil",
      description: "Ethan Le Neindre, développeur de {age} ans, actuellement étudiant en 3e année de BUT Informatique à Caen.",
    },
    'skills': {
      title: "Compétences",
      description: "Voici la liste de mes compétences, à titre de représentation.",
    },
    'projects': {
      title: "Projets",
      description: "Voici mes projets actuels et futurs.",
    },
    'links': {
      title: "Liens",
      description: "Retrouvez ici tous les liens utiles pour en savoir plus sur moi, et me contacter.",
    },
    'documents': {
      title: "Documents",
      description: "Voici la liste de mes documents.",
    },
    'cv': {
      title: "CV",
      description: "Voici mon CV minimaliste, entièrement en web et téléchargeable.",
    },
  },
  title: "Mon portfolio",
  me: "Ethan Le Neindre, développeur fullstack et web.",
  description: "Bonjour, bienvenue sur mon portfolio. Vous allez pouvoir découvrir mes compétences, mes projets, mes liens et tout ce qu'il y a à savoir sur moi-même. Vous pouvez naviguer sur le site grâce aux boutons ci-dessous, et aux boutons dans l'icone de navigation en haut à gauche de chaque page. You can also change language by clicking on the translation button in the top right corner :). Bonne visite !",
  buttons: {
    'home': 'Accueil',
    'profile': 'Profil',
    'skills': 'Compétences',
    'projects': 'Projets',
    'links': 'Liens',
    'documents': 'Documents'
  },
  documents: {
    description: "Bienvenue sur la page de documents.",
    export: "Exporter vers :",
    buttons: {
      back: "Retour",
    }
  },
  profile: {
    description: "Apprenez-en plus sur moi.",
    texts: {
      scolarship: "J'ai réalisé un baccalauréat générale en France, avec les options NSI et mathématiques, et les options DNL maths et Maths expertes. Ensuite, j'ai préparé un bachelor universitaire de technologie en informatique (que je suis en train de terminer, en dernière année). J'ai pour projet de devenir ingénieur en informatique, avec la formation E-paiement et Cybersécurité de l'ENSICAEN.",
      professional: "Durant mon parcours universitaire, j'ai réalisé un stage de 10 semaines au sein de Distritech, durant lequel j'ai produit le site vitrine de l'entreprise, et j'ai commencé à réalisé un site de gestion de stocks entre PME. Cette année, je suis en alternance au sein de SAP Labs France, dans laquelle je suis développeur fullstack sur des projets associatifs et internes.",
      personal: "Je suis passionné par l'informatique, et j'aime apprendre de nouvelles choses. J'aime aussi le sport, et je pratique du basketball au SUAPS Caen. J'aime aussi la musique (ROCK !! 🤘). Sur mon temps libre, j'aime me promener, rencontrer et parler à des gens, et développer des sites et applications web (oui c'est compatible). Je me lance des défis, comme faire de la peinture, jouer de la guitare et du piano, apprendre l'Allemand. Bref, vita est dives in inventa (la vie est riche de découvertes)."
    },
    titles: {
      scolarship: "Expérience scolaire",
      professional: "Expérience professionnelle en info",
      personal: "Expérience personnelle"
    }
  },
  skills: {
    levels: {
      project: "En projet",
      beginner: "Débutant",
      intermediate: "Intermédiaire",
      advanced: "Avancé",
      expert: "Expert"
    },
    texts: {
      description: "Voici la liste de mes compétences, à titre de représentation.",
      languages: "Langages de programmation",
      frameworks: "Frameworks",
      tools: "Outils",
      skillDetails: "Détails des compétences"
    },
    errors: {
      noPic: 'Aucune image pour le moment',
    },
  },
  links: {
    texts: {
      description: "Vous pouvez me retrouver sur tous les liens suivants."
    },
    errors: {},
  },
  projects: {
    list: {
      covoit: "Covoit est une petite application en Laravel que j'ai créée pour gérer les trajets de covoiturage avec suivi des trajets et paiements avec des amis.",
      portfolio: "Portfolio est le site que vous êtes en train de visiter. Il est développé en Next.js avec TailwindCSS et des modules Tailwind.",
      puissance4: "Puissance 4 est l'un de mes premiers projet en équipe avec 2 de mes camarades de lycée.",
      solution_trombinoscope: "Solution trombinoscope est un projet que j'ai réalisé dans le cadre universitaire. Il permet de gérer des photos, des personnes et des rôles en C#.",
      youteam: "YouTeam est un de mes projets personnels de site de publication de vidéos, type YouTube. Il a pour but de permettre à des utilisateurs de publier des vidéos de manière sécurisée avec une gestion de groupes, et potentiellement un partage par un chat intégré. (le projet est encore en cours, le lien est une version de dev pas stable et temporaire).",
      '4kwizz': "4Kwizz est un projet de quiz en ligne, avec catégories et questions personnalisées. Il aura pour but d'être disponible sur le web, sur Android et sur Android TV.",
      share_portfolio: "Share my portfolio est un projet de partage de portfolio, qui permettra à des utilisateurs de partager leur portfolio directement en rentrant des descriptions et des images, et en choissisant des styles que j'aurais préparé et que j'ajouterais au fur et à mesure. Il y aurait aussi possibilité de télecharger le portfolio pour pouvoir l'héberger de ses soins, et pouvoir le modifier."
    },
    texts: {
      description: "Voici une liste de tous mes projets, publiés et futurs.",
      current: "Projets finis et/ou publiés",
      future: "Projets futurs"
    },
    errors: {},
  },
} as const

