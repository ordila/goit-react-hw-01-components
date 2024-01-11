import { FC } from "react";
import css from "./Statistics.module.css";
import { IStatisticsProps } from "./Statistics.types";

import { getRandomColor } from "../../helpers/randomColor/randomColor";

export const Statistics: FC<IStatisticsProps> = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map((el) => {
          return (
            <li
              key={el.id}
              className={css.item}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={css.label}>{el.label}</span>
              <span className={css.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
