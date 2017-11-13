import { UserUrls } from '../auth/user.model';

export interface Playlist {
  href: string;
  items: PlaylistItem[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface PlaylistItem {
  collaborative: boolean;
  external_urls: UserUrls;
  href: string;
  id: string;
  images: PlaylistImage[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: any;
  type: string;
  uri: string;
}

export interface PlaylistImage {
  height: any;
  url: string;
  width: any;
}

export interface Owner {
  display_name: string;
  external_urls: UserUrls;
  id: string;
  href: string;
  type: string;
  uri: string;
}
