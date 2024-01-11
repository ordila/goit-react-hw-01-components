export interface ICardProps {
  avatar: string;
  location: string;
  stats: { followers: number; views: number; likes: number };
  tag: string;
  username: string;
}
