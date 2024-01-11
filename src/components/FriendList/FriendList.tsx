import { FC } from "react";
import css from "./FriendList.module.css";
import { IFriendsProps } from "./Friends.types";
import FriendsItem from "../FriendsItem/FriendsItem";

export const FriendList: FC<IFriendsProps> = ({ friends }) => {
  return (
    <ul className={css["friend-list"]}>
      {friends.map((el) => {
        return <FriendsItem key={el.id} element={el} />;
      })}
    </ul>
  );
};
