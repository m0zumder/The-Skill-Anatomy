export type SkillCategory = {
  label: string;
  description: string;
  sectors: Record<string, string[]>;
};

export const skillsData: Record<string, SkillCategory> = {
  head_brain: {
    label: "Cognitive, Science & Technology",
    description: "The center for logic, computation, memory, academic knowledge, and strategy.",
    sectors: {
      "Computer Science & IT": [
        "Software Engineering", "Cloud Architecture", "Cybersecurity", "Blockchain Development", 
        "Database Administration", "DevOps & CI/CD", "System Design", "Network Engineering"
      ],
      "Artificial Intelligence & Data": [
        "Machine Learning", "Deep Learning", "Natural Language Processing (NLP)", "Computer Vision",
        "Data Science", "Statistical Analysis", "Predictive Modeling", "Big Data Engineering"
      ],
      "Natural Sciences & Mathematics": [
        "Quantum Physics", "Organic Chemistry", "Genetics & Biology", "Astrophysics",
        "Calculus & Linear Algebra", "Neuroscience", "Botany", "Environmental Science"
      ],
      "Humanities & Philosophy": [
        "Formal Logic", "Ethics", "Historical Analysis", "Anthropology", "Political Science"
      ]
    }
  },
  head_eyes: {
    label: "Observation, Visual Arts & Spatial",
    description: "Skills relying on visual perception, aesthetics, architecture, and spatial intelligence.",
    sectors: {
      "Visual Arts & Design": [
        "Graphic Design", "UI/UX Design", "3D Animation & Rigging", "Typography",
        "Illustration", "Oil Painting", "Concept Art", "Color Theory"
      ],
      "Photography & Filmmaking": [
        "Cinematography", "Portrait Photography", "Video Editing", "Color Grading",
        "Lighting Design", "Drone Videography", "Visual Effects (VFX)"
      ],
      "Architecture & Spatial": [
        "Architectural Drafting", "Interior Design", "Urban Planning", "Cartography",
        "Landscape Architecture", "CAD Modeling", "Pattern Recognition"
      ]
    }
  },
  mouth_throat: {
    label: "Communication, Linguistics & Vocal",
    description: "The expression center for spoken languages, negotiation, writing, and auditory arts.",
    sectors: {
      "Linguistics & Languages": [
        "Bilingual/Polyglot", "Translation & Interpretation", "Phonetics", "Etymology",
        "Sign Language", "Syntax & Grammar"
      ],
      "Public Speaking & Persuasion": [
        "Public Speaking", "Debate", "Negotiation", "Diplomacy", "Sales Pitching",
        "Conflict Resolution", "Broadcast Journalism"
      ],
      "Written Communication": [
        "Creative Writing", "Copywriting", "Technical Writing", "Journalism",
        "Screenwriting", "Poetry", "Grant Writing"
      ],
      "Vocal & Audio Arts": [
        "Singing (Tenor/Soprano/Bass)", "Voice Acting", "Audio Mixing & Mastering", "Podcast Hosting"
      ]
    }
  },
  chest_heart: {
    label: "Empathy, Care, Healthcare & Leadership",
    description: "Soft skills, human connection, medical care, and community management.",
    sectors: {
      "Healthcare & Medicine": [
        "General Medicine", "Nursing", "Surgery", "Pediatrics", "Pharmacology",
        "First Aid & CPR", "Dentistry", "Veterinary Medicine"
      ],
      "Psychology & Counseling": [
        "Cognitive Behavioral Therapy", "Psychoanalysis", "Crisis Intervention",
        "Marriage Counseling", "Child Psychology", "Empathy & Active Listening"
      ],
      "Leadership & Education": [
        "Organizational Leadership", "Pedagogy & Teaching", "Curriculum Development",
        "Human Resources", "Mentorship", "Event Organization", "Public Relations"
      ]
    }
  },
  arms_hands: {
    label: "Craftsmanship, Trades & Engineering",
    description: "Tactile skills requiring dexterity, physical creation, and manipulation of the world.",
    sectors: {
      "Mechanical & Physical Trades": [
        "Carpentry & Woodworking", "Welding & Metallurgy", "Plumbing", "Electrical Wiring",
        "Automotive Mechanics", "Machining (CNC)", "Masonry & Bricklaying"
      ],
      "Fine Crafts & Dexterity": [
        "Tailoring & Sewing", "Pottery & Ceramics", "Jewelry Making", "Watchmaking (Horology)",
        "Leatherworking", "Sculpting", "Calligraphy"
      ],
      "Culinary Arts": [
        "Professional Cooking", "Baking & Pastry", "Fermentation", "Mixology",
        "Food Science", "Butchery"
      ],
      "Musical Instruments": [
        "Piano", "Acoustic/Electric Guitar", "Violin", "Drums & Percussion", "Wind Instruments"
      ]
    }
  },
  core_gut: {
    label: "Business, Finance, Strategy & Survival",
    description: "The foundation of operations, economics, productivity, and resilience.",
    sectors: {
      "Business & Finance": [
        "Corporate Finance", "Accounting & Bookkeeping", "Investment Banking", "Venture Capital",
        "Entrepreneurship", "Market Research", "Supply Chain Management", "Real Estate"
      ],
      "Productivity & Management": [
        "Project Management (Agile/Scrum)", "Time Management", "Risk Assessment",
        "Operations Management", "Strategic Planning", "Data Entry & Administration"
      ],
      "Survival & Resilience": [
        "Wilderness Survival", "Foraging & Hunting", "Navigation & Orienteering",
        "Stress Tolerance", "Farming & Agriculture", "Self-Sufficiency"
      ]
    }
  },
  legs_feet: {
    label: "Mobility, Athletics, Fitness & Dance",
    description: "Movement, physical conditioning, sports, and kinesthetic awareness.",
    sectors: {
      "Athletics & Sports": [
        "Sprinting", "Marathon Running", "Soccer/Football", "Basketball", "Tennis",
        "Swimming", "Rock Climbing", "Gymnastics"
      ],
      "Strength & Physical Fitness": [
        "Weightlifting", "Powerlifting", "Calisthenics", "CrossFit", "Aerobic Conditioning",
        "Kinesiology", "Physical Therapy"
      ],
      "Martial Arts & Combat": [
        "Boxing", "Brazilian Jiu-Jitsu (BJJ)", "Muay Thai", "Judo", "Wrestling", "Taekwondo"
      ],
      "Dance & Kinesthetics": [
        "Ballet", "Contemporary Dance", "Hip Hop Dance", "Salsa & Latin Dance",
        "Yoga", "Pilates", "Balance & Posture"
      ]
    }
  }
};