import { create } from 'zustand';

export const useDownloadPdf = create((set) => ({
  tableRef: null,
  isPrinting: false,
  setRef: (newValue) => set({ tableRef: newValue }),
  setIsPrinting: (newValue) => set({ isPrinting: newValue }),
}));
