export type SkillCategory = {
  label: string;
  description: string;
  sectors: Record<string, string[]>;
};

export const skillsData: Record<string, SkillCategory> = {
  head_brain: {
    label: "Cognitive, Analytical & Technical",
    description: "The processing center for logic, computation, memory, and strategy.",
    sectors: {
      "Artificial Intelligence & ML": [
        "A* Pathfinding", "Minimax Algorithm", "Constraint Satisfaction Problems", "Deep Learning", 
        "Neural Networks", "Prompt Engineering", "Computer Vision", "Natural Language Processing",
      ],
      "Software Engineering": [
        "Next.js App Router", "React Component Architecture", "Context API State Management",
        "Tailwind CSS", "Python Programming", "TypeScript", "System Architecture",
        "API Integration", "Database Management", "Cloud Deployment (Vercel)"
      ],
      "Search Engine Optimization": [
        "Technical SEO", "Generative Engine Optimization (GEO)", "Answer Engine Optimization (AEO)",
        "Programmatic SEO", "Schema Structured Data", "Core Web Vitals"
      ]
    }
  },
  head_eyes: {
    label: "Observation, Visual Arts & Spatial",
    description: "Skills relying on visual perception, aesthetics, and spatial intelligence.",
    sectors: {
      "Photography & Cinematography": [
        "Astrophotography", "Manual Exposure Control", "Long Exposure (Expert RAW)",
        "Color Grading", "Lighting Design", "Composition"
      ],
      "Design & UI/UX": [
        "User Interface Mockups", "User Journey Mapping", "Wireframing", "Typography",
        "Color Theory", "Logo Design"
      ]
    }
  },
  mouth_throat: {
    label: "Communication, Linguistics & Vocal",
    description: "The expression center for speech, negotiation, and auditory arts.",
    sectors: {
      "Languages & Linguistics": [
        "PTE Academic Speaking", "Grammar & Syntax", "Translation", "Interpretation"
      ],
      "Public Speaking & Persuasion": [
        "Debate", "Pitching & Presentation", "Negotiation", "Sales Psychology"
      ]
    }
  },
  chest_heart: {
    label: "Emotional Intelligence & Leadership",
    description: "Soft skills, human connection, and community management.",
    sectors: {
      "Leadership & Management": [
        "Team Building", "Event Organization", "Crisis Management", "Mentorship"
      ],
      "Interpersonal Skills": [
        "Networking", "Relationship Maintenance", "Cross-cultural Communication"
      ]
    }
  },
  arms_hands: {
    label: "Craftsmanship, Formulation & Precision",
    description: "Tactile skills requiring dexterity, creation, and manipulation of the physical world.",
    sectors: {
      "Formulation & Chemistry": [
        "Extrait de Parfum Formulation", "Olfactory Blending (ISO E Super, Hedione)", 
        "Raw Material Sourcing", "Cosmetic Formulation"
      ],
      "Digital Dexterity": [
        "Touch Typing (100+ WPM)", "Mouse Precision (FPS Gaming)", "Digital Illustration"
      ]
    }
  },
  core_gut: {
    label: "Business, Strategy & Discipline",
    description: "The foundation of daily operations, risk-taking, and endurance.",
    sectors: {
      "Entrepreneurship & Business": [
        "B2B Pre-order Operations", "Micro-Sourcing (1688/Alibaba)", "Door-to-Door Cargo Logistics",
        "Financial Modeling", "Market Validation"
      ],
      "Productivity & Systems": [
        "Timeboxing", "Routine Optimization", "Task Delegation", "Workflow Automation"
      ]
    }
  },
  legs_feet: {
    label: "Mobility & Physical Fitness",
    description: "Movement, physical conditioning, and foundational strength.",
    sectors: {
      "Strength & Conditioning": [
        "Calisthenics", "Spider Curls", "Russian Twists", "Ab Wheel Rollouts",
        "Flat Barbell Bench Press", "Hypertrophy Training"
      ],
      "Mobility & Athletics": [
        "Sprinting", "Endurance Running", "Parkour", "Yoga"
      ]
    }
  }
};