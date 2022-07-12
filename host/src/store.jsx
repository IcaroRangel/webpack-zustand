import create from 'zustand';

const useStore = create(set => ({
  trolley: 0,
  setTrolley: () => set(state => ({ trolley: state.trolley + 1 })),
  clearTrolley: () => set(() => ({ trolley: 0 })),
  pants: 0,
  setPants: () => set(state => ({ pants: state.pants + 1 })),
  clearPants: () => set(() => ({ pants: 0 })),
  shirts: 0,
  setShirts: () => set(state => ({ shirts: state.shirts + 1 })),
  clearShirts: () => set(() => ({ trolley: 0 })),
}));

export default useStore;
