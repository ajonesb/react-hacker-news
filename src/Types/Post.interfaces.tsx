export interface PostProps {
  post?: any;
  onToggle: (id: string) => void;
  objectID?: string;
  story_title: string;
  story_url: string;
  author?: string;
  localFavs?: string;
  created_at?: string;
}
