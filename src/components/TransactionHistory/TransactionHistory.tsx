import { FC } from "react";
import css from "./TransactionHistory.module.css";
import { ITransactionProps } from "./Transaction.types";

export const TransactionHistory: FC<ITransactionProps> = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((el) => {
          return (
            <tr key={el.id}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
