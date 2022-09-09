import useSWR from 'swr';
import { useEffect } from 'react';

import { lastFMFetcher } from '@/lib/swr';
import { useState } from 'react';
import { LastFMResponseBody, LastFMTrack } from '@/types/interfaces';

const useSpotify = (): [boolean, null | LastFMTrack, boolean] => {
   const [loading, setLoading] = useState<boolean>(true);
   const [spotify, setSpotify] = useState<null | LastFMTrack>(null);
   const [spotifyError, setSpotifyError] = useState<boolean>(false);

   const { data, error } = useSWR<LastFMResponseBody>('vwwa', lastFMFetcher);

   useEffect(() => {
      if (error) {
         setLoading(false);
         setSpotifyError(true);
         setSpotify(null);
      } else {
         if (!data) {
            setSpotify(null);
         } else if (data) {
            setLoading(false);
            setSpotifyError(false);
            const { recenttracks } = data;
            if (
               recenttracks &&
               recenttracks.track &&
               recenttracks.track.length
            ) {
               const track = recenttracks.track[0];
               if (track['@attr'] && track['@attr'].nowplaying) {
                  setSpotify(track);
               } else {
                  setSpotify(null);
               }
            } else {
               setSpotify(null);
            }
         }
      }
   }, [data, error]);

   return [loading, spotify, spotifyError];
};

export default useSpotify;
