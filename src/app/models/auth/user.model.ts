export interface User {
  id: string;
  images: UserImage[];
  display_name: string;
  email: string;
  country: string;
  external_urls: UserUrls;
  followers: UserFollowers;
  href: string;
  type: string;
}

export interface UserUrls {
  spotify: string;
}

export interface UserFollowers {
  total: number;
}

export interface UserImage {
  height: number;
  url: string;
  width: number;
}