export interface IPhotosResult {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: [];
  description: null | string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: { self: string; html: string; download: string; download_location: string };
  promoted_at: null | string;
  sponsorship: { impression_urls: string[]; tagline: string; tagline_url: string };
  // topic_submissions: {};
  updated_at: string;
  urls: { raw: string; full: string; regular: string; small: string; thumb: string };
  user: { id: string; username: string; first_name: string; bio: string };
  width: number;
}

export interface IPhotosData {
  total: number;
  total_pages: number;
  results: IPhotosResult[];
}

export interface ICardsListProps {
  searchQuery: string;
}
