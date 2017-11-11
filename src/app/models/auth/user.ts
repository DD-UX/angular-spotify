export interface User {
  id: string;
  avatar: string;
  name: string;
  email: string;
  country: string;
  urls: UserUrls;
  followers: UserFollowers;
  product: any;
}

export interface UserUrls {
  spotify: string;
}

export interface UserFollowers {
  total: number;
}