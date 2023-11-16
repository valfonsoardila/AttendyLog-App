import create from "zustand";

const useAttendeeStore = create((set) => ({
  faith: {
    Hermanos: 0,
    Hermanas: 0,
    Niños: 0,
    Amigos: 0,
    total: 0,
  },
  social: {
    Ancianos: 0,
    Caballeros: 0,
    Damas: 0,
    Niños: 0,
    Niñas: 0,
    total: 0,
  },
  increment: (eventType, type) =>
    set((state) => ({
      ...state,
      [eventType]: {
        ...state[eventType],
        [type]: state[eventType][type] + 1,
      },
    })),
  decrement: (eventType, type) =>
    set((state) => ({
      ...state,
      [eventType]: {
        ...state[eventType],
        [type]: Math.max(state[eventType][type] - 1, 0),
      },
    })),
  sum: (eventType) =>
    set((state) => {
      const total = Object.keys(state[eventType])
        .filter((key) => key !== "total") // Exclude 'total' from the keys
        .reduce((acc, key) => acc + state[eventType][key], 0);

      return {
        ...state,
        [eventType]: {
          ...state[eventType],
          total: total,
        },
      };
    }),
  reset: (eventType) =>
    set((state) => ({
      ...state,
      [eventType]: {
        Hermanos: 0,
        Hermanas: 0,
        Niños: 0,
        Amigos: 0,
      },
    })),
}));

export default useAttendeeStore;
