import { GeocodeMap } from '../components/GeoMap';
import { YMaps } from '@pbe/react-yandex-maps';
import { useEventStore } from '../store/useEventsStore';
import { useEffect } from 'react';
import { fetchEvents } from '../hooks/fetchData';

export const Map = () => {
  const { events, setEvents } = useEventStore();
  useEffect(() => {
    fetchEvents().then((data) => {
      useEventStore.getState().setEvents(data);
    });
  }, []);
  const apiKey = import.meta.env.VITE_YANDEX_API_KEY;
  return (
    <YMaps query={{ apikey: apiKey, load: 'package.full' }}>
      <GeocodeMap events={events} />
    </YMaps>
  );
};
