type AuthentificationData = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  reg_user_resumes_count: number;
  token_type: string;
  ttl: number;
};

type VacancyData = {
  id: number;
  payment_from: number;
  payment_to: number;
  profession: string;
  type_of_work: { title: string };
  currency: string;
  town: { title: string };
  vacancyRichText: string;
};

type VacanciesData = {
  objects: VacancyData[];
  total: number;
};

type CatalogData = {
  title: string;
  title_trimmed: string;
  key: number;
};

type GetVacanciesParams = {
  page?: string;
  count?: string;
  keyword?: string;
  payment_from?: string;
  payment_to?: string;
  catalogues?: string;
  no_agreement?: string;
  published?: string;
};
