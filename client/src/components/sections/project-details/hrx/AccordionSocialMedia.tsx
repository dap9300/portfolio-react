import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { 
  FileEdit, 
  Activity, 
  Users, 
  Settings, 
  RefreshCw, 
  BarChart4, 
  TrendingUp,
  MousePointerClick,
  Target,
  LineChart,
  TimerReset,
  BarChart,
  BadgeEuro,
  Euro,
  ShoppingBag,
  Percent,
  Receipt,
  ChartNoAxesCombined
} from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ChartMarketingGrowth from "./ChartMarketingGrowth";

interface HRXMarketingProps {
  project: Project;
  language: Language;
}

const projectDetailsTranslations = {
  projectDetails: {
    marketingStrategy: {
      en: "Digital Marketing Strategy",
      it: "Strategia Marketing Digitale"
    },
    digitalMarketing: {
      overview: {
        title: {
          en: "HRX Motorsport Campaign Overview",
          it: "Panoramica Campagna HRX Motorsport"
        },
        description: {
          en: "A 6-month (//November 2020 - April 2021//) Google Ads digital marketing campaign for //HRX motorsport// apparel, with €8400 budget allocation across //Search (60%)//, //Shopping (25%)// and //Display/Remarketing (15%)// campaigns",
          it: "Una campagna di marketing digitale su Google Ads dalla durata di 6 mesi (//Novembre 2020 - Aprile 2021//) per abbigliamento //motorsport HRX//, con budget di €8400 distribuito tra campagne //Search (60%)//, //Shopping (25%)// e //Display/Remarketing (15%)//"
        },
        keyStrategies: {
          search: {
            en: "Search campaigns targeting racing suits, mechanic wear and brand/competitor terms",
            it: "Campagne Search mirate a tute da corsa, abbigliamento meccanici e termini brand/competitor"
          },
          shopping: {
            en: "Shopping campaigns showcasing premium product catalog with optimized feed",
            it: "Campagne Shopping del catalogo premium con feed ottimizzato"
          },
          display: {
            en: "Display campaigns for brand awareness and retargeting across motorsport audiences",
            it: "Campagne Display per brand awareness e retargeting su audience motorsport"
          }
        }
      },
      metrics: {
        title: {
          en: "Campaign Results",
          it: "Risultati della Campagna"
        },
        improvements: {
          roas: {
            title: { en: "ROAS", it: "ROAS" },
            value: { en: "320%", it: "320%" },
            description: { en: "Return on Ad Spend", it: "Ritorno sulla Spesa Pubblicitaria" }
          },
          cpa: {
            title: { en: "Average CTR", it: "CTR Medio" },
            value: { en: "2,47%", it: "2,47%" },
            description: { en: "Average Click To Rate", it: "Click To Rate medio" }
          },
          cr: {
            title: { en: "Orders", it: "Ordini" },
            value: { en: "110+", it: "110+" },
            description: { en: "Total Orders", it: "Totale Ordini" }
          },
          aov: {
            title: { en: "Sales", it: "Vendite" },
            value: { en: "€26,000+", it: "€26,000+" },
            description: { en: "Total Sales", it: "Totale Vendite" }
          }
        }
      },
      keyActions: {
        title: {
          en: "Key Campaign Actions",
          it: "Azioni Chiave della Campagna"
        },
        items: {
          segmentation: {
            title: { en: "Audience Segmentation", it: "Segmentazione Campagne" },
            description: {
              en: "Separate campaign structure for Brand, Generic and Competitor targeting",
              it: "Struttura separata per campagne Brand, Generico e Competitor"
            }
          },
          optimization: {
            title: { en: "Monthly Optimization", it: "Ottimizzazione Mensile" },
            description: {
              en: "Build-Measure-Learn cycle with monthly data analysis and continuous improvements",
              it: "Ciclo Build-Measure-Learn con analisi dati mensile e miglioramenti continui"
            }
          },
          remarketing: {
            title: { en: "Targeted Remarketing", it: "Remarketing Mirato" },
            description: {
              en: "Dynamic remarketing showing viewed products with cart abandonment strategy",
              it: "Remarketing dinamico con strategia di recupero carrelli abbandonati"
            }
          },
          setup: {
            title: { en: "Setup & Data Collection", it: "Setup e Raccolta Dati" },
            description: {
              en: "Initial campaign setup with broad testing while maintaining budget control",
              it: "Avvio campagne con impostazioni pianificate testando ampiamente e mantenendo controllo sul budget"
            }
          },
          keywords: {
            title: { en: "Keyword & Ad Optimization", it: "Ottimizzazione Keyword e Annunci" },
            description: {
              en: "Refining targeting with data-driven keyword management and bid adjustments",
              it: "Ottimizzazione del targeting con gestione keyword basata sui dati e aggiustamento delle offerte"
            }
          },
          expansion: {
            title: { en: "Advanced Segmentation", it: "Segmentazione Avanzata" },
            description: {
              en: "Expanding successful categories and isolating campaigns for dedicated budgets",
              it: "Espansione delle categorie performanti e isolamento campagne per budget dedicati"
            }
          }
        }
      },
      results: {
        title: {
          en: "Campaign Results",
          it: "Risultati della Campagna"
        },
        metrics: {
          impressions: {
            title: { en: "Impressions", it: "Impression" },
            value: { en: "500,000+", it: "500.000+" }
          },
          clicks: {
            title: { en: "Clicks", it: "Click" },
            value: { en: "15,000+", it: "15.000+" }
          },
          conversions: {
            title: { en: "Conversions", it: "Conversioni" },
            value: { en: "300+", it: "300+" }
          },
          revenue: {
            title: { en: "Revenue Generated", it: "Fatturato Generato" },
            value: { en: "€75,000+", it: "€75.000+" }
          }
        }
      }
    }
  }
};

const HRXMarketing: FC<HRXMarketingProps> = ({ project, language }) => {
  const content = projectDetailsTranslations.projectDetails.digitalMarketing;

  return (
    <AccordionItem value="digital" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <ChartNoAxesCombined className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{projectDetailsTranslations.projectDetails.marketingStrategy[language]}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-4 md:p-6 mt-4">
          {/* Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <BarChart4 className="w-5 h-5 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-lg">{content.overview.title[language]}</h3>
              </div>
              <div className="text-muted-foreground leading-relaxed">
                <p dangerouslySetInnerHTML={{ 
                  __html: content.overview.description[language].replace(
                    /\/\/(.*?)\/\//g, 
                    '<strong>$1</strong>'
                  ) 
                }} />
              </div>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                {Object.values(content.overview.keyStrategies).map((strategy, index) => (
                  <li key={index} className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>{strategy[language]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {/* Results Title above the metrics */}
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">{content.metrics.title[language]}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {Object.entries(content.metrics.improvements).map(([key, improvement]) => {
                  // Determine which icon to use based on the key
                  let icon;
                  switch(key) {
                    case 'roas':
                      icon = <Percent className="w-5 h-5 text-primary" />;
                      break;
                    case 'cpa':
                      icon = <MousePointerClick className="w-5 h-5 text-primary" />;
                      break;
                    case 'cr':
                      icon = <ShoppingBag className="w-5 h-5 text-primary" />;
                      break;
                    case 'aov':
                      icon = <BadgeEuro className="w-5 h-5 text-primary" />;
                      break;
                    default:
                      icon = <TrendingUp className="w-5 h-5 text-primary" />;
                  }

                  return (
                    <div key={key} className="bg-white p-3 md:p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2">
                        {icon}
                        <h4 className="font-semibold text-sm text-gray-600">{improvement.title[language]}</h4>
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-primary mt-1">{improvement.value[language]}</p>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">{improvement.description[language]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Charts Component */}
          <ChartMarketingGrowth language={language} />

          {/* Key Actions Section */}
          <div className="mt-6 md:mt-8 pt-4 md:pt-8">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">{content.keyActions.title[language]}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Strategy items with better mobile spacing */}
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                  <h4 className="font-semibold text-sm text-gray-600">{content.keyActions.items.segmentation.title[language]}</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{content.keyActions.items.segmentation.description[language]}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary flex-shrink-0" />
                  <h4 className="font-semibold text-sm text-gray-600">{content.keyActions.items.optimization.title[language]}</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{content.keyActions.items.optimization.description[language]}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-primary flex-shrink-0" />
                  <h4 className="font-semibold text-sm text-gray-600">{content.keyActions.items.remarketing.title[language]}</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{content.keyActions.items.remarketing.description[language]}</p>
              </div>

              {/* New strategy items based on the context file */}
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-primary flex-shrink-0" />
                  <h4 className="font-semibold text-sm text-gray-600">{content.keyActions.items.setup.title[language]}</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{content.keyActions.items.setup.description[language]}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-primary flex-shrink-0" />
                  <h4 className="font-semibold text-sm text-gray-600">{content.keyActions.items.keywords.title[language]}</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{content.keyActions.items.keywords.description[language]}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <TimerReset className="w-5 h-5 text-primary flex-shrink-0" />
                  <h4 className="font-semibold text-sm text-gray-600">{content.keyActions.items.expansion.title[language]}</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{content.keyActions.items.expansion.description[language]}</p>
              </div>
            </div>
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};

export default HRXMarketing;