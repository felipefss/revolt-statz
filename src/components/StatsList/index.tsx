import styles from "./statsList.module.scss";

type StatsObj = {
  _id: number;
  name: string;
  value: number;
};

type StatsListProps = {
  list: StatsObj[];
  title?: string;
};

export default function StatsList({ list, title }: StatsListProps) {
  return (
    <div className={`${title ? styles.wrapper : styles.noTitleWrapper}`}>
      {title && <h2>{title}</h2>}

      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item._id}>
            <span>{item.name}</span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
