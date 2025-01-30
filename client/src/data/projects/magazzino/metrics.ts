import { ProjectMetric } from '@/types';
import { ICON_KEYS } from '@/lib/constants';

export const metrics: ProjectMetric[] = [
  {
    icon: ICON_KEYS.USERS,
    value: '60,396',
    label: {
      en: 'Users Total Website',
      it: 'Utenti Attivi Sito Web'
    }
  },
  {
    icon: ICON_KEYS.TRENDING,
    value: '+143%',
    label: {
      en: 'Instagram Growth',
      it: 'Crescita Instagram'
    }
  },
  {
    icon: ICON_KEYS.CALENDAR,
    value: '250+',
    label: {
      en: 'Events organized',
      it: 'Eventi Gestiti'
    }
  }
];
