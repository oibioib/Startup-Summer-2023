import { create } from 'zustand';

type StoreSearch = {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  resetSearchValue: () => void;
};
const useStoreSearch = create<StoreSearch>((set) => ({
  searchValue: '',
  setSearchValue: (newSearchValue) => set(() => ({ searchValue: newSearchValue })),
  resetSearchValue: () => set(() => ({ searchValue: '' })),
}));

export default useStoreSearch;
