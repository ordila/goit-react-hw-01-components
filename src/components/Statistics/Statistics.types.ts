export interface IStatisticsProps {
  title: string;
  stats: IData[];
}

interface IData {
  id: string;
  label: string;
  percentage: number;
}
