import { useState } from "react";
import styles from "./styles.module.scss";

type DbItem = {
  _id: number;
  name: string;
};

type SlushbucketProps = {
  availableItems: DbItem[];
  circuitChoice?: boolean;
  selected: DbItem[];
  handleSelect: (item: DbItem) => void;
};

export default function Slushbucket({
  availableItems,
  circuitChoice = false,
  selected,
  handleSelect,
}: SlushbucketProps) {
  const [available, setAvailable] = useState(availableItems);
  const [clickedAvailable, setClickedAvailable] = useState({} as DbItem);
  // const [selected, setSelected] = useState([]);

  return (
    <>
      <section className={styles.players}>
        <div className={styles.choiceColumn}>
          <span>Disponíveis</span>
          <select className={styles.choiceList} multiple>
            {available.map((item) => (
              <option
                key={item._id}
                value={item._id}
                onSelect={() => setClickedAvailable(item)}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.actionButtons}>
          <div className={styles.selectBtn} />
          <button type="button" onClick={}>
            {circuitChoice ? "Nova pista" : "Novo jogador"}
          </button>
          <div className={`${styles.selectBtn} ${styles.inverse}`} />
        </div>

        <div className={styles.choiceColumn}>
          <span>Selecionados</span>
          <select className={styles.choiceList} multiple>
            {selected.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </section>
    </>
  );
}
