import { create } from 'zustand';

type StoreForms = {
  reset: boolean;
  setReset: () => void;
  clearReset: () => void;
};

const useStoreForms = create<StoreForms>((set) => ({
  reset: false,

  setReset: () =>
    set(() => ({
      reset: true,
    })),

  clearReset: () =>
    set(() => ({
      reset: false,
    })),
}));

export default useStoreForms;
