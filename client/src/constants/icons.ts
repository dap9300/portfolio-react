export const ICON_KEYS = {
  USERS: 'rjzlcjqi',
  TRENDING: 'gkosxwgv',
  CALENDAR: 'mzjnwzka',
  GLOBE: 'ehdfdiha',
  TARGET: 'lupuorrc',
  SEARCH: 'msoeawqm',
  STAR: 'yqoxyxia'
} as const;

export type IconKey = typeof ICON_KEYS[keyof typeof ICON_KEYS];

export const ICON_MAPPING = {
  [ICON_KEYS.USERS]: 'Users',
  [ICON_KEYS.TRENDING]: 'TrendingUp',
  [ICON_KEYS.CALENDAR]: 'Calendar',
  [ICON_KEYS.GLOBE]: 'Globe',
  [ICON_KEYS.TARGET]: 'Target',
  [ICON_KEYS.SEARCH]: 'Search',
  [ICON_KEYS.STAR]: 'Star'
} as const;