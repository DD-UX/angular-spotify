import { UserUrls, UserImage } from '../auth/user.model';

export interface Playlist {
  message: string;
  playlists: Playlists;
}

export interface Playlists {
  href: string;
  items: PlaylistItem[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

export interface PlaylistItem {
  collaborative: boolean;
  external_urls: UserUrls;
  href: string;
  id: string;
  images: UserImage[];
  name: string;
  owner: any;
  tracks: any;
  type: string;
  uri: string;
}

export interface Owner {
  display_name: string;
  external_urls: UserUrls;
  id: string;
  href: string;
  type: string;
  uri: string;
}
