import { create } from 'zustand';

type FiltersData = {
  catalogues: string;
  paymentFrom: string;
  paymentTo: string;
};

type StoreFiltersData = {
  filters: FiltersData;
  setFiltersValue: (newFilters: FiltersData) => void;
  resetFiltersValue: () => void;
};

const useStoreFilter = create<StoreFiltersData>((set) => ({
  filters: {
    catalogues: '',
    paymentFrom: '',
    paymentTo: '',
  },

  setFiltersValue: (newFilters) =>
    set(() => ({
      filters: newFilters,
    })),

  resetFiltersValue: () =>
    set(() => ({
      filters: {
        catalogues: '',
        paymentFrom: '',
        paymentTo: '',
      },
    })),
}));

export default useStoreFilter;
