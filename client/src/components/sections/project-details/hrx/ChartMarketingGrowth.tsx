import { FC, useState } from "react";
import { Language } from "@/types";
import { 
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  MousePointerClick,
  Euro,
  PieChart as PieChartIcon,
  Share2,
  Maximize2,
  X
} from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ChartMarketingGrowthProps {
  language: Language;
}

const metricColors = {
  roas: "#2563eb",
  ctr: "#16a34a",
  cpa: "#dc2626",
  cr: "#9333ea",
  aov: "#eab308"
};

// Dati aggiornati in base alla tabella fornita
const performanceData = [
  { 
    month: 'Nov 2020', 
    roas: 2.6,
    ctr: 2.2,
    cpa: 93,
    cr: 1.70,
    fatturato: 3600,
    conversioni: 15,
    budget: 1400,
    clic: 1069,
    impressioni: 62908,
    aov: 240
  },
  { 
    month: 'Dic 2020', 
    roas: 2.9,
    ctr: 2.3,
    cpa: 82,
    cr: 1.80,
    fatturato: 4080,
    conversioni: 17,
    budget: 1400,
    clic: 972,
    impressioni: 54012,
    aov: 240
  },
  { 
    month: 'Gen 2021', 
    roas: 2.6,
    ctr: 2.1,
    cpa: 93,
    cr: 1.50,
    fatturato: 3600,
    conversioni: 15,
    budget: 1400,
    clic: 1225,
    impressioni: 81667,
    aov: 240
  },
  { 
    month: 'Feb 2021', 
    roas: 3.3,
    ctr: 2.5,
    cpa: 74,
    cr: 1.90,
    fatturato: 4560,
    conversioni: 19,
    budget: 1400,
    clic: 1346,
    impressioni: 70850,
    aov: 240
  },
  { 
    month: 'Mar 2021', 
    roas: 3.6,
    ctr: 2.6,
    cpa: 67,
    cr: 2.00,
    fatturato: 5040,
    conversioni: 21,
    budget: 1400,
    clic: 1134,
    impressioni: 56713,
    aov: 240
  },
  { 
    month: 'Apr 2021', 
    roas: 4.1,
    ctr: 3.1,
    cpa: 58,
    cr: 2.56,
    fatturato: 5760,
    conversioni: 24,
    budget: 1400,
    clic: 2123,
    impressioni: 82917,
    aov: 240
  }
];

// Questi dati rimangono invariati come richiesto
const budgetData = [
  { name: 'Search', value: 60, color: '#2563eb' },
  { name: 'Shopping', value: 25, color: '#16a34a' },
  { name: 'Display', value: 15, color: '#dc2626' }
];

const customTooltipFormatter = (value: number, name: string) => {
  switch (name.toLowerCase()) {
    case 'roas':
      return `${value.toFixed(1)}x`;
    case 'ctr':
      return `${value.toFixed(1)}%`;
    case 'cpa':
      return `€${value.toFixed(0)}`;
    case 'cr':
      return `${value.toFixed(2)}%`;
    case 'fatturato':
      return `€${value.toLocaleString()}`;
    case 'budget':
      return `€${value.toLocaleString()}`;
    case 'aov':
      return `€${value.toFixed(0)}`;
    default:
      return value;
  }
};

interface ExpandableChartContainerProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  language: Language;
}

// Versione mobile-friendly del ChartContainer
const ExpandableChartContainer: FC<ExpandableChartContainerProps> = ({ 
  title, 
  icon, 
  children,
  language
}) => {
  const expandText = language === 'en' ? 'Expand' : 'Espandi';

  return (
    <div className="border border-gray-200 rounded-lg p-3 md:p-4 bg-white shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 flex-shrink">
          {icon}
          <h3 className="font-semibold text-lg leading-tight">{title}</h3>
        </div>

        {/* Pulsante Espandi su dispositivi mobili */}
        <div className="block md:hidden flex-shrink-0">
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm font-medium whitespace-nowrap">
                <Maximize2 className="w-4 h-4" />
                <span>{expandText}</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[90vw] max-h-[90vh] overflow-y-auto p-1 sm:p-6">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-6">{title}</h2>
                <div className="h-[65vh]">
                  {children}
                </div>
              </div>

              <button 
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => document.querySelector('[data-radix-dialog-close]')?.click()}
              >
                <X className="w-8 h-8 text-white" />
              </button>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="h-64 md:h-80 w-full">
        {children}
      </div>
    </div>
  );
};

const ChartMarketingGrowth: FC<ChartMarketingGrowthProps> = ({ language }) => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 mb-3 md:mb-8 overflow-visible">
        <ExpandableChartContainer 
          title={language === 'en' ? 'ROAS & CTR Evolution' : 'Evoluzione ROAS e CTR'}
          icon={<TrendingUp className="w-5 h-5 text-primary" />}
          language={language}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={performanceData}
              margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" ticks={['Dic 2020', 'Feb 2021', 'Apr 2021']} />
              <YAxis yAxisId="left" domain={[2.5, 4.5]} />
              <YAxis yAxisId="right" orientation="right" domain={[1.5, 2.7]} />
              <Tooltip formatter={customTooltipFormatter} />
              <Legend verticalAlign="bottom" height={36} />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="roas"
                name="ROAS"
                stroke={metricColors.roas}
                strokeWidth={2}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="ctr"
                name="CTR %"
                stroke={metricColors.ctr}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ExpandableChartContainer>

        <ExpandableChartContainer 
          title={language === 'en' ? 'CPA & CVR Trends' : 'Andamento CPA e CVR'}
          icon={<MousePointerClick className="w-5 h-5 text-primary" />}
          language={language}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={performanceData}
              margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" ticks={['Dic 2020', 'Feb 2021', 'Apr 2021']} />
              <YAxis yAxisId="left" domain={[45, 75]} />
              <YAxis yAxisId="right" orientation="right" domain={[1, 1.6]} />
              <Tooltip formatter={customTooltipFormatter} />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="cpa"
                name="CPA (€)"
                stroke={metricColors.cpa}
                strokeWidth={2}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="cr"
                name={language === 'en' ? 'Conversion Rate %' : 'CVR %'}
                stroke={metricColors.cr}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ExpandableChartContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 pt-0 md:pt-4 overflow-visible">
        <ExpandableChartContainer 
          title={language === 'en' ? 'Budget Allocation' : 'Distribuzione Budget'}
          icon={<PieChartIcon className="w-5 h-5 text-primary" />}
          language={language}
        >
          <ResponsiveContainer width="100%" height="100%">
                  <PieChart margin={{ top: 35, bottom: 20 }}>
              <Pie
                data={budgetData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="40%"
                outerRadius={65}
                label={({ value }) => `${value}%`}
              >
                {budgetData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend verticalAlign="bottom" height={40} />
            </PieChart>
          </ResponsiveContainer>
        </ExpandableChartContainer>

        <ExpandableChartContainer 
          title={language === 'en' ? 'Total Sales' : 'Totale Vendite'}
          icon={<Euro className="w-5 h-5 text-primary" />}
          language={language}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={performanceData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" ticks={['Dic 2020', 'Feb 2021', 'Apr 2021']} />
              <YAxis domain={[0, 6000]} />
              <Tooltip formatter={customTooltipFormatter} />
              <Legend />
              <Area
                type="monotone"
                dataKey="fatturato"
                name={language === 'en' ? 'Sales (€)' : 'Vendite (€)'}
                fill={metricColors.roas}
                stroke={metricColors.roas}
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ExpandableChartContainer>
      </div>
    </div>
  );
};

export default ChartMarketingGrowth;