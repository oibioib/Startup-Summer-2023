export const PAGES = {
  FAVORITES: {
    ID: 1,
    ROUTE: '/favorites',
    TITLE: 'Избранное',
  },
  VACANCIES: {
    ID: 2,
    ROUTE: '/vacancies',
    TITLE: 'Поиск Вакансий',
  },
  VACANCY: {
    ID: 3,
    ROUTE: '/vacancies/:id',
    TITLE: 'Вакансия',
  },
  ERROR: {
    ID: 4,
    ROUTE: '',
    TITLE: 'Ошибка',
  },
} as const;

export const PAGES_IN_NAV: Array<keyof typeof PAGES> = ['VACANCIES', 'FAVORITES'];
