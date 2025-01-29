import { ProjectMetric } from '@/types';
import { ICON_KEYS } from '@/lib/constants';

export const metrics: ProjectMetric[] = [
  {
    icon: ICON_KEYS.USERS,
    value: '44,114',
    label: {
      en: 'Total Social Followers',
      it: 'Follower Social Totali'
    }
  },
  {
    icon: ICON_KEYS.TRENDING,
    value: '+550%',
    label: {
      en: 'Instagram Growth',
      it: 'Crescita Instagram'
    }
  },
  {
    icon: ICON_KEYS.CALENDAR,
    value: '37,455',
    label: {
      en: 'Annual Users',
      it: 'Utenti Annuali'
    }
  }
];
