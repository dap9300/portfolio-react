// src/i18n/translations/dtc.ts

// Type definitions
interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
  growth?: string;
}

interface ContentType {
  name: string;
  rate: string;
}

interface SeoMetric {
  metric: string;
  value: string;
}

interface DTCTranslations {
  project: {
    title: string;
    description: string;
    metrics: {
      organicTraffic: MetricItem;
      leadGeneration: MetricItem;
      conversionRate: MetricItem;
    };
  };
  sections: {
    objectives: {
      title: string;
      items: Array<{
        title: string;
        icon: string;
        achievement: string;
        details: string;
      }>;
    };
    teamManagement: {
      title: string;
      overview: string;
      teamMetrics: {
        overview: string[];
        cards: {
          timeEfficiency: MetricItem;
          productivity: MetricItem;
          qualityScore: MetricItem;
          teamSize: MetricItem;
        };
        efficiency: {
          title: string;
          metrics: {
            delivery: MetricItem;
            velocity: MetricItem;
            satisfaction: MetricItem;
          };
        };
      };
    };
    contentStrategy: {
      title: string;
      editorialStrategy: {
        title: string;
        items: string[];
      };
      developedContent: {
        title: string;
        items: string[];
      };
      metrics: {
        pageViews: MetricItem;
        timeOnPage: MetricItem;
        conversionRate: MetricItem;
        keywordRanking: MetricItem;
      };
      performance: {
        title: string;
        types: ContentType[];
      };
    };
    leadGeneration: {
      title: string;
      strategy: {
        title: string;
        description: string;
        achievements: string[];
      };
      metrics: {
        title: string;
        leadRate: MetricItem;
        conversionRate: MetricItem;
      };
      summary: {
        monthlyLeads: MetricItem;
        conversionRate: MetricItem;
        roi: MetricItem;
      };
    };
    analytics: {
      title: string;
      kpi: {
        title: string;
        metrics: {
          organicTraffic: MetricItem;
          serpRankings: MetricItem;
        };
      };
      seoMetrics: {
        title: string;
        items: SeoMetric[];
      };
      trends: {
        title: string;
      };
      achievements: {
        title: string;
        items: string[];
      };
    };
  };
}

export const dtcTranslations = {
  it: {
    project: {
      title: "Digital Trade Capital - Strategia dei Contenuti & Gestione Editoriale | SEO Tecnico & Ottimizzazione Website | Lead Generation & Gestione Contatti",
      description: "Ho gestito il coordinamento strategico e operativo in un'organizzazione fintech, con focus sullo sviluppo di strategie digitali integrate, sull'ottimizzazione delle performance e sulla gestione di team cross-funzionali",
      metrics: {
        organicTraffic: {
          label: "Traffico Organico",
          value: "+85%"
        },
        leadGeneration: {
          label: "Generazione Lead",
          value: "+150%"
        },
        conversionRate: {
          label: "Tasso di Conversione",
          value: "4.5x"
        }
        }
        },
        sections: {
        objectives: {
        title: "Obiettivi",
        items: [
          {
            title: "Ottimizzazione SEO",
            icon: "📈",
            achievement: "Target superato: +85%",
            details: "Significativo aumento del traffico organico"
          },
          {
            title: "Lead Generation",
            icon: "🎯",
            achievement: "Superato target: +150%",
            details: "Incremento sostanziale nella generazione di lead qualificati"
          },
          {
            title: "Performance Team",
            icon: "👥",
            achievement: "Raggiunto: +65%",
            details: "Miglioramento efficienza dei processi di team"
          },
          {
            title: "Engagement Contenuti",
            icon: "📱",
            achievement: "Completato +120%",
            details: "Incremento significativo nell'engagement dei contenuti"
          }
        ]
        },
        teamManagement: {
        title: "Gestione Team",
        overview: "Performance del Team",
        teamMetrics: {
          overview: [
            "Coordinamento team cross-funzionale",
            "Ottimizzazione workflow e automazione",
            "Implementazione metodologie agile",
            "Condivisione conoscenze e documentazione",
            "Monitoraggio performance e KPI"
          ],
          cards: {
            timeEfficiency: {
              label: "Efficienza Temporale",
              value: "+65%",
              subtext: "miglioramento"
            },
            productivity: {
              label: "Produttività",
              value: "+85%",
              subtext: "incremento"
            },
            qualityScore: {
              label: "Quality Score",
              value: "9.2",
              subtext: "su 10"
            },
            teamSize: {
              label: "Dimensione Team",
              value: "12",
              subtext: "membri"
            }
          },
          efficiency: {
            title: "Metriche di Efficienza del Team",
            metrics: {
              delivery: {
                label: "Consegna Progetti",
                value: "95%",
                subtext: "completamento nei tempi"
              },
              velocity: {
                label: "Velocità Sprint",
                value: "+45%",
                subtext: "miglioramento medio"
              },
              satisfaction: {
                label: "Soddisfazione Team",
                value: "4.8/5",
                subtext: "score dipendenti"
              }
            }
          }
        }
        },
          contentStrategy: {
            title: "Strategia dei Contenuti",
            editorialStrategy: {
              title: "Strategia Editoriale",
              items: [
                "Content audit e gap analysis",
                "Keyword research e mappatura contenuti",
                "Sviluppo linee guida editoriali",
                "Ottimizzazione contenuti esistenti",
                "Creazione nuovi contenuti verticali"
              ]
            },
            developedContent: {
              title: "Contenuti Sviluppati",
              items: [
                "White paper settoriali",
                "Case study e success stories",
                "Guide tecniche e tutorial",
                "Newsletter tematiche",
                "Articoli di approfondimento"
              ]
            },
            metrics: {
              pageViews: {
                label: "Visualizzazioni Pagina",
                value: "+180%",
                subtext: "incremento YoY"
              },
              timeOnPage: {
                label: "Tempo sulla Pagina",
                value: "4:30",
                subtext: "media"
              },
              conversionRate: {
                label: "Tasso di Conversione",
                value: "4.5%",
                subtext: "media"
              },
              keywordRanking: {
                label: "Ranking Keywords",
                value: "+200%",
                subtext: "crescita"
              }
            },
            performance: {
              title: "Performance per Tipo di Contenuto",
              types: [
                { name: "White Paper", rate: "6.8%" },
                { name: "Case Study", rate: "5.2%" },
                { name: "Guide Tecniche", rate: "4.7%" }
              ]
            }
          },
          leadGeneration: {
            title: "Generazione Lead",
            strategy: {
              title: "Strategia Lead Generation",
              description: "Implementazione di una strategia integrata di lead generation focalizzata sul settore fintech.",
              achievements: [
                "Crescita lead qualificati: +150% YoY",
                "Tasso di conversione: 4.5x miglioramento",
                "Quality score leads: 8.5/10",
                "ROI campagne: +180%"
              ]
            },
            metrics: {
              title: "Metriche Performance",
              leadRate: {
                label: "Lead Rate",
                value: "4.5x",
                growth: "+150% YoY",
                subtext: "miglioramento"
              },
              conversionRate: {
                label: "Conversion Rate",
                value: "8.5%",
                growth: "+180% YoY",
                subtext: "media"
              }
            },
            summary: {
              monthlyLeads: {
                value: "550+",
                label: "Lead Mensili"
              },
              conversionRate: {
                value: "8.5%",
                label: "Conversion Rate"
              },
              roi: {
                value: "180%",
                label: "ROI"
              }
            }
          },
          analytics: {
            title: "Analytics & Performance",
            kpi: {
              title: "KPI Principali",
              metrics: {
                organicTraffic: {
                  label: "Traffico Organico",
                  value: "+85%",
                  subtext: "Crescita YoY"
                },
                serpRankings: {
                  label: "Posizionamenti SERP",
                  value: "Top 3",
                  subtext: "Termini Chiave"
                }
              }
            },
            seoMetrics: {
              title: "Metriche SEO",
              items: [
                { metric: "Domain Authority", value: "65/100" },
                { metric: "Qualità Backlink", value: "8.5/10" },
                { metric: "Page Speed Score", value: "95/100" },
                { metric: "Core Web Vitals", value: "Superati" }
              ]
            },
            trends: {
              title: "Trend Traffico e Conversioni"
            },
            achievements: {
              title: "Achievement Chiave",
              items: [
                "Miglioramento page speed del 40%",
                "Riduzione bounce rate del 25%",
                "Incremento dwell time del 60%",
                "Ottimizzazione mobile-first completa"
              ]
            }
          }
          }
          },
          en: {
          project: {
          title: "Digital Trade Capital - Content Strategy & Editorial Management | Technical SEO & Website Optimization | Lead Generation & Contact Management",
          description: "Managed strategic and operational coordination in a fintech organization, focusing on developing integrated digital strategies, performance optimization, and cross-functional team management",
          metrics: {
            organicTraffic: {
              label: "Organic Traffic",
              value: "+85%"
            },
            leadGeneration: {
              label: "Lead Generation",
              value: "+150%"
            },
            conversionRate: {
              label: "Conversion Rate",
              value: "4.5x"
            }
          }
          },
            sections: {
              objectives: {
                title: "Objectives",
                items: [
                  {
                    title: "SEO Optimization",
                    icon: "📈",
                    achievement: "Target exceeded: +85%",
                    details: "Significant increase in organic traffic"
                  },
                  {
                    title: "Lead Generation",
                    icon: "🎯",
                    achievement: "Target exceeded: +150%",
                    details: "Substantial increase in qualified lead generation"
                  },
                  {
                    title: "Team Performance",
                    icon: "👥",
                    achievement: "Achieved: +65%",
                    details: "Improvement in team process efficiency"
                  },
                  {
                    title: "Content Engagement",
                    icon: "📱",
                    achievement: "Completed: +120%",
                    details: "Significant increase in content engagement"
                  }
                ]
              },
              teamManagement: {
                title: "Team Management",
                overview: "Team Performance",
                teamMetrics: {
                  overview: [
                    "Cross-functional team coordination",
                    "Workflow optimization and automation",
                    "Agile methodology implementation",
                    "Knowledge sharing and documentation",
                    "Performance tracking and KPI"
                  ],
                  cards: {
                    timeEfficiency: {
                      label: "Time Efficiency",
                      value: "+65%",
                      subtext: "improvement"
                    },
                    productivity: {
                      label: "Productivity",
                      value: "+85%",
                      subtext: "increase"
                    },
                    qualityScore: {
                      label: "Quality Score",
                      value: "9.2",
                      subtext: "out of 10"
                    },
                    teamSize: {
                      label: "Team Size",
                      value: "12",
                      subtext: "members"
                    }
                  },
                  efficiency: {
                    title: "Team Efficiency Metrics",
                    metrics: {
                      delivery: {
                        label: "Project Delivery",
                        value: "95%",
                        subtext: "on-time completion"
                      },
                      velocity: {
                        label: "Sprint Velocity",
                        value: "+45%",
                        subtext: "average improvement"
                      },
                      satisfaction: {
                        label: "Team Satisfaction",
                        value: "4.8/5",
                        subtext: "employee score"
                      }
                    }
                  }
                }
              },
              contentStrategy: {
                title: "Content Strategy",
                editorialStrategy: {
                  title: "Editorial Strategy",
                  items: [
                    "Content audit and gap analysis",
                    "Keyword research and content mapping",
                    "Editorial guidelines development",
                    "Existing content optimization",
                    "New vertical content creation"
                  ]
                },
                developedContent: {
                  title: "Developed Content",
                  items: [
                    "Industry white papers",
                    "Case studies and success stories",
                    "Technical guides and tutorials",
                    "Thematic newsletters",
                    "In-depth articles"
                  ]
                },
                metrics: {
                  pageViews: {
                    label: "Page Views",
                    value: "+180%",
                    subtext: "YoY increase"
                  },
                  timeOnPage: {
                    label: "Time on Page",
                    value: "4:30",
                    subtext: "average"
                  },
                  conversionRate: {
                    label: "Conversion Rate",
                    value: "4.5%",
                    subtext: "average"
                  },
                  keywordRanking: {
                    label: "Keyword Ranking",
                    value: "+200%",
                    subtext: "growth"
                  }
                },
                performance: {
                  title: "Content Type Performance",
                  types: [
                    { name: "White Papers", rate: "6.8%" },
                    { name: "Case Studies", rate: "5.2%" },
                    { name: "Technical Guides", rate: "4.7%" }
                  ]
                }
              },
              leadGeneration: {
                title: "Lead Generation",
                strategy: {
                  title: "Lead Generation Strategy",
                  description: "Implementation of an integrated lead generation strategy focused on the fintech sector.",
                  achievements: [
                    "Qualified lead growth: +150% YoY",
                    "Conversion rate: 4.5x improvement",
                    "Lead quality score: 8.5/10",
                    "Campaign ROI: +180%"
                  ]
                },
                metrics: {
                  title: "Performance Metrics",
                  leadRate: {
                    label: "Lead Rate",
                    value: "4.5x",
                    growth: "+150% YoY",
                    subtext: "improvement"
                  },
                  conversionRate: {
                    label: "Conversion Rate",
                    value: "8.5%",
                    growth: "+180% YoY",
                    subtext: "average"
                  }
                },
                summary: {
                  monthlyLeads: {
                    value: "550+",
                    label: "Monthly Leads"
                  },
                  conversionRate: {
                    value: "8.5%",
                    label: "Conversion Rate"
                  },
                  roi: {
                    value: "180%",
                    label: "ROI"
                  }
                }
              },
              contentStrategy: {
                title: "Content Strategy",
                editorialStrategy: {
                  title: "Editorial Strategy",
                  items: [
                    "Content audit and gap analysis",
                    "Keyword research and content mapping",
                    "Editorial guidelines development",
                    "Existing content optimization",
                    "New vertical content creation"
                  ]
                },
                developedContent: {
                  title: "Developed Content",
                  items: [
                    "Industry white papers",
                    "Case studies and success stories",
                    "Technical guides and tutorials",
                    "Thematic newsletters",
                    "In-depth articles"
                  ]
                },
                metrics: {
                  pageViews: {
                    label: "Page Views",
                    value: "+180%",
                    subtext: "YoY increase"
                  },
                  timeOnPage: {
                    label: "Time on Page",
                    value: "4:30",
                    subtext: "average"
                  },
                  conversionRate: {
                    label: "Conversion Rate",
                    value: "4.5%",
                    subtext: "average"
                  },
                  keywordRanking: {
                    label: "Keyword Ranking",
                    value: "+200%",
                    subtext: "growth"
                  }
                },
                performance: {
                  title: "Content Type Performance",
                  types: [
                    { name: "White Papers", rate: "6.8%" },
                    { name: "Case Studies", rate: "5.2%" },
                    { name: "Technical Guides", rate: "4.7%" }
                  ]
                }
              },
              leadGeneration: {
                title: "Lead Generation",
                strategy: {
                  title: "Lead Generation Strategy",
                  description: "Implementation of an integrated lead generation strategy focused on the fintech sector.",
                  achievements: [
                    "Qualified lead growth: +150% YoY",
                    "Conversion rate: 4.5x improvement",
                    "Lead quality score: 8.5/10",
                    "Campaign ROI: +180%"
                  ]
                },
                metrics: {
                  title: "Performance Metrics",
                  leadRate: {
                    label: "Lead Rate",
                    value: "4.5x",
                    growth: "+150% YoY",
                    subtext: "improvement"
                  },
                  conversionRate: {
                    label: "Conversion Rate",
                    value: "8.5%",
                    growth: "+180% YoY",
                    subtext: "average"
                  }
                },
                summary: {
                  monthlyLeads: {
                    value: "550+",
                    label: "Monthly Leads"
                  },
                  conversionRate: {
                    value: "8.5%",
                    label: "Conversion Rate"
                  },
                  roi: {
                    value: "180%",
                    label: "ROI"
                  }
                }
              },
              analytics: {
                      title: "Analytics & Performance",
                      kpi: {
                        title: "Key Performance Indicators",
                        metrics: {
                          organicTraffic: {
                            label: "Organic Traffic",
                            value: "+85%",
                            subtext: "YoY Growth"
                          },
                          serpRankings: {
                            label: "SERP Rankings",
                            value: "Top 3",
                            subtext: "Key Terms"
                          }
                        }
                      },
                      seoMetrics: {
                        title: "SEO Metrics",
                        items: [
                          { metric: "Domain Authority", value: "65/100" },
                          { metric: "Backlink Quality", value: "8.5/10" },
                          { metric: "Page Speed Score", value: "95/100" },
                          { metric: "Core Web Vitals", value: "Passed" }
                        ]
                      },
                      trends: {
                        title: "Traffic & Conversion Trends"
                      },
                      achievements: {
                        title: "Key Achievements",
                        items: [
                          "40% page speed improvement",
                          "25% bounce rate reduction",
                          "60% dwell time increase",
                          "Complete mobile-first optimization"
                        ]
                      }
                    }
                  }
                }
              } as const;