import create from 'zustand';

export const useSearch = create((set) => ({
  searchValue: '',

  setSearchValue: (value) => set({ searchValue: value }),
}));
