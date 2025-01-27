import { Project, Language } from "@/types";

// Project data
export const projectsData: Record<string, Project> = {
  "1": {
    id: 1,
    title: {
      en: "Magazzino sul Po - Digital Marketing Strategy",
      it: "Magazzino sul Po - Strategia di Marketing Digitale"
    },
    description: {
      en: `As **Digital Marketing & Communications Specialist**, I led the digital transformation of one of Turin's main cultural venues, managing integrated communication and marketing strategies to promote cultural and musical events.
Key Results 2023:

Social Media Performance:
• Facebook: 31,203 followers (+3.1% YoY)
- Reach: 545,960 (+97.6%)
- Visits: 91,723 (+90.6%)
• Instagram: 12,911 followers (+44.2% YoY)
- Reach: 502,784 (+550.6%)
- Visits: 66,153 (+93.9%)

Website Performance:
• 37,455 annual users (+88.2% YoY)
• 3,121 average monthly users
• Main traffic sources:
- Social Media: 8,500+ users
- Organic Search: 5,800+ users
- Direct Access: 4,950+ users

E-commerce & Newsletter:
• €15,583 online ticket revenue
• 2,915 tickets sold (+134% YoY)
• 44,514 newsletter subscribers (+54%)
• 32% average newsletter open rate

Special Projects:
• **FIUMEDENTRO Crowdfunding:**
- €5,597 raised
- 300+ supporters
- Multichannel communication strategy

Digital Advertising:
• Budget managed: €3,097
• Q3 2023 Performance:
- Average CPC: €0.10
- CPM: €1.57
- Average CTR: 0.74%
- Campaign ROI: 2.46x`,
      it: `Come **Digital Marketing & Communications Specialist**, ho guidato la trasformazione digitale di uno dei principali luoghi di aggregazione culturale di Torino, gestendo strategie integrate di comunicazione e marketing per promuovere eventi culturali e musicali.
Risultati Chiave 2023:

Performance Social Media:
• Facebook: 31.203 follower (+3,1% YoY)
- Copertura: 545.960 (+97,6%)
- Visite: 91.723 (+90,6%)
• Instagram: 12.911 follower (+44,2% YoY)
- Copertura: 502.784 (+550,6%)
- Visite: 66.153 (+93,9%)

Performance Sito Web:
• 37.455 utenti annuali (+88,2% YoY)
• 3.121 utenti mensili medi
• Principale provenienza traffico:
- Social Media: 8.500+ utenti
- Ricerca organica: 5.800+ utenti
- Accesso diretto: 4.950+ utenti

E-commerce & Newsletter:
• €15.583 ricavi da biglietteria online
• 2.915 biglietti venduti (+134% YoY)
• 44.514 iscritti newsletter (+54%)
• 32% tasso medio di apertura newsletter

Progetti Speciali:
• **Crowdfunding "FIUMEDENTRO":**
- €5.597 raccolti
- 300+ sostenitori
- Strategia comunicazione multicanale

Advertising Digitale:
• Budget gestito: €3.097
• Performance Q3 2023:
- CPC medio: €0,10
- CPM: €1,57
- CTR medio: 0,74%
- ROI campagne: 2,46x`
    },
    image: "/assets/banner-magazzino.webp",
    technologies: ["Social Media Strategy", "Web Development & Analytics", "Content Creation", "Event & Email Marketing"],
    link: "#"
  },
  // ... other project data remains the same
};

// Project metrics
export const projectMetrics: Record<string, Array<{
  icon: string;
  value: string;
  label: Record<Language, string>;
}>> = {
  "1": [
    {
      icon: "rjzlcjqi",
      value: "44,114",
      label: { en: "Total Social Followers", it: "Follower Social Totali" }
    },
    {
      icon: "gkosxwgv",
      value: "+550%",
      label: { en: "Instagram Growth", it: "Crescita Instagram" }
    },
    {
      icon: "mzjnwzka",
      value: "37,455",
      label: { en: "Annual Users", it: "Utenti Annuali" }
    }
  ],
  // ... other metrics remain the same
};

// Gallery images
export const projectImages = {
  "1": [
    "/assets/oldsocial1.png",
    "/assets/oldsocial2.png",
    "/assets/sito-eventi-1.png",
  ]
};

// Section translations
export const translations = {
  back: {
    en: "Back to Projects",
    it: "Torna ai Progetti"
  },
  overview: {
    en: "Project Overview",
    it: "Panoramica del Progetto"
  },
  tools: {
    en: "Tools & Platforms",
    it: "Strumenti e Piattaforme"
  },
  gallery: {
    en: "Project Gallery",
    it: "Galleria del Progetto"
  },
  navigation: {
    previous: {
      en: "Previous",
      it: "Precedente"
    },
    next: {
      en: "Next",
      it: "Successivo"
    }
  }
};
