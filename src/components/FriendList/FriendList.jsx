import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(el => {
        return (
          <li key={el.id} className={css.item}>
            {el.isOnline ? (
              <span className={`${css.statusOk} ${css.placeForOnline}`}></span>
            ) : (
              <span
                className={`${css.statusError} ${css.placeForOnline}`}
              ></span>
            )}
            <img
              className={css.avatar}
              src={el.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
