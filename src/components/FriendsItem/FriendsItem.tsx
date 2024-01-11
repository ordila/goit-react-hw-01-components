import { FC } from "react";
import css from "./FriendsItem.module.css";
import { IFriendsItemProps } from "./FriendsItem.types";
import classNames from "classnames";

const FriendsItem: FC<IFriendsItemProps> = ({
  element: { name, isOnline, avatar },
}) => {
  const className = classNames(css.placeForOnline, {
    [css.statusOk]: isOnline,
    [css.statusError]: !isOnline,
  });

  return (
    <li className={css.item}>
      <span className={className} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendsItem;
