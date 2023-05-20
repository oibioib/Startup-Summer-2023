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

export const RESULTS_PER_PAGE = 4;
export const MAX_RESULTS_FROM_API = 500;
export const DATA_STALE_TIME_MS = 10000;

export const URL_PARAMS = {
  PAGE: 'page',
};

export const PAYMENT = {
  SALARY: 'з/п',
  NO_SALARY: 'з/п не указана',
  FROM: 'от',
  TO: 'до',
};

export const FORM = {
  HEADING: 'Фильтры',
  BUTTONS: {
    SEARCH: 'Поиск',
    APPLY: 'Применить',
    CLEAR_ALL: 'Сбросить все',
  },
  INPUTS: {
    CATALOG: {
      LABEL: 'Отрасль',
      PLACEHOLDER: 'Выберите отрасль',
    },
    SALARY_FROM: {
      LABEL: 'Оклад',
      PLACEHOLDER: 'От',
    },
    SALARY_TO: {
      PLACEHOLDER: 'До',
    },
    SEARCH: {
      PLACEHOLDER: 'Введите название вакансии',
    },
  },
};

export const ERRORS = {
  EMPTY: 'Упс, здесь еще ничего нет!',
  SOMETHING: 'Упс... Что-то случилось.',
  REFRESH_PAGE: 'Пожалуйста, проверьте подключение к интернету или попробуйте обновить страницу.',
  NO_VACANCY_ID: 'ID вакансии не правильный.',
  NOT_FOUND:
    'К сожалению, это всего лишь страница 404. Возможно, вы ошиблись при вводе адреса или страница была перемещена по другому URL-адресу.',
};
