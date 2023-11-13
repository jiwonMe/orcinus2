import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface AppStore {
  senderName: string;
  senderZipCode: string;
  senderAddr1: string;
  senderAddr2: string;
  relationship: string;
  title: string;
  contents: string;
  password: string;

  setSenderName: (senderName: string) => void;
  setSenderZipCode: (senderZipCode: string) => void;
  setSenderAddr1: (senderAddr1: string) => void;
  setSenderAddr2: (senderAddr2: string) => void;
  setRelationship: (relationship: string) => void;
  setTitle: (title: string) => void;
  setContents: (contents: string) => void;
  setPassword: (password: string) => void;

  reset: () => void;
}

const useAppStore = create<AppStore>()(
  devtools((set) => ({
    senderName: '',
    senderZipCode: '',
    senderAddr1: '',
    senderAddr2: '',
    relationship: '',
    title: '',
    contents: '',
    password: '',

    setSenderName: (senderName: string) => set(() => ({ senderName })),
    setSenderZipCode: (senderZipCode: string) => set(() => ({ senderZipCode })),
    setSenderAddr1: (senderAddr1: string) => set(() => ({ senderAddr1 })),
    setSenderAddr2: (senderAddr2: string) => set(() => ({ senderAddr2 })),
    setRelationship: (relationship: string) => set(() => ({ relationship })),
    setTitle: (title: string) => set(() => ({ title })),
    setContents: (contents: string) => set(() => ({ contents })),
    setPassword: (password: string) => set(() => ({ password })),

    reset: () =>
      set(() => ({
        senderName: '',
        senderZipCode: '',
        senderAddr1: '',
        senderAddr2: '',
        relationship: '',
        title: '',
        contents: '',
        password: '',
      })),
  }))
);

export default useAppStore;
