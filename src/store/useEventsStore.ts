import {create} from 'zustand';
import type { EventState } from '../types/types';

export const useEventStore = create<EventState>((set) => ({
  events: [],
  setEvents: (events) => set({ events }),
  toggleFavorite: (id) =>
    set((state) => ({
      events: state.events.map((event) =>
        event.id === id ? { ...event, isFavorite: !event.isFavorite } : event
      ),
    })),
}));