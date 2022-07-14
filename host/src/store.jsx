import create from 'zustand';

const useStore = create(set => ({
  pants: 0,
  setPants: () => set(state => ({ pants: state.pants + 1 })),
  clearPants: () => set(() => ({ pants: 0 })),
  shirts: 0,
  setShirts: () => set(state => ({ shirts: state.shirts + 1 })),
  clearShirts: () => set(() => ({ shirts: 0 })),
}));

export default useStore;
