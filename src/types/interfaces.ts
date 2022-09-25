export interface LastFMRecentTracks {
   '@attr': LastFMRecentTracksAttr;
   track?: LastFMTrack[];
}

export interface LastFMRecentTracksAttr {
   page: string;
   total: string;
   user: string;
   perPage: string;
   totalPages: string;
}

export interface LastFMTrack {
   artist: LastFMTrackArtist;
   '@attr'?: LastFMTrackAttr;
   mbid: string;
   album: LastFMTrackAlbum;
   streamable: string;
   url: string;
   name: string;
   image: LastFMTrackImage[];
   date?: LastFMTrackDate;
}

export interface LastFMTrackArtist {
   mbid: string;
   '#text': string;
}

export interface LastFMTrackAttr {
   nowplaying: string;
}

export interface LastFMTrackAlbum {
   mbid: string;
   '#text': string;
}

export interface LastFMTrackImage {
   size: 'small' | 'medium' | 'large' | 'extralarge';
   '#text': string;
}

export interface LastFMTrackDate {
   uts: string;
   '#text': string;
}

export interface LastFMSong {
   name: LastFMTrack['name'];
   artist: LastFMTrackArtist['#text'];
   art: LastFMTrackImage['#text'];
   album: LastFMTrackAlbum['#text'];
   url: LastFMTrack['url'];
}

export interface LastFMResponseBody {
   recenttracks: LastFMRecentTracks;
}

export interface Project {
   name: string;
   type: string;
   description: string;
   active: string;
}
