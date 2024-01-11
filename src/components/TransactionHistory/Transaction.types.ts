interface ITransaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export interface ITransactionProps {
  transactions: ITransaction[];
}
