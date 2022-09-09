import { SWRConfiguration } from 'swr';
import axios from 'axios';

export const lastFMFetcher = {
   refreshInterval: 5000,
   fetcher: (resource, init) =>
      axios
         .get(
            `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${resource}&api_key=${process.env.NEXT_PUBLIC_LASTFM_KEY}&format=json`,
            {
               ...init,
            }
         )
         .then((res) => res.data),
} as SWRConfiguration;
