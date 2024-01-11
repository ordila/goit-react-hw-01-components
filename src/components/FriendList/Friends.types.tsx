export interface IFriendsProps {
  friends: IFriends[];
}

export interface IFriends {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}
