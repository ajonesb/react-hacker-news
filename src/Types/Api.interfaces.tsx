export interface HitProps {
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
  objectID: string;
}

export interface FetchPostsProps {
  (opt: string, page: number): Promise<any>;
}
