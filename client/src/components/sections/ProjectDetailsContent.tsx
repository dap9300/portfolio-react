import { Project, Language } from '@/types';

// Project metrics
export const projectMetrics: Record<
  string,
  Array<{
    icon: string;
    value: string;
    label: Record<Language, string>;
  }>
> = {
  '1': [
    {
      icon: 'rjzlcjqi',
      value: '44,114',
      label: { en: 'Total Social Followers', it: 'Follower Social Totali' },
    },
    {
      icon: 'gkosxwgv',
      value: '+550%',
      label: { en: 'Instagram Growth', it: 'Crescita Instagram' },
    },
    {
      icon: 'mzjnwzka',
      value: '37,455',
      label: { en: 'Annual Users', it: 'Utenti Annuali' },
    },
  ]
};

