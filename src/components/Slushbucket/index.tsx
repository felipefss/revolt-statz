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
  handleSelect: (item: DbItem, remove?: boolean) => void;
};

export default function Slushbucket({
  availableItems,
  circuitChoice = false,
  selected,
  handleSelect,
}: SlushbucketProps) {
  const [available, setAvailable] = useState(availableItems);
  const [clickedAvailable, setClickedAvailable] = useState<DbItem | null>(null);
  const [clickedSelected, setClickedSelected] = useState<DbItem | null>(null);

  // Move the selected item from the available to the selected list
  const moveAvailableToSelected = () => {
    if (clickedAvailable) {
      const newAvailable = available.filter(
        (i) => i._id !== clickedAvailable._id
      );
      setAvailable(newAvailable);
      handleSelect(clickedAvailable);
      setClickedAvailable(null);
    }
  };

  // Move the selected item from the selected to the available list
  const moveSelectedToAvailable = () => {
    if (clickedSelected) {
      setAvailable([clickedSelected, ...available]);
      handleSelect(clickedSelected, true);
      setClickedSelected(null);
    }
  };

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
                onClick={() => setClickedAvailable(item)}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.actionButtons}>
          <div className={styles.selectBtn} onClick={moveAvailableToSelected} />
          <button type="button">
            {circuitChoice ? "Nova pista" : "Novo jogador"}
          </button>
          <div
            className={`${styles.selectBtn} ${styles.inverse}`}
            onClick={moveSelectedToAvailable}
          />
        </div>

        <div className={styles.choiceColumn}>
          <span>Selecionados</span>
          <select className={styles.choiceList} multiple>
            {selected.map((item) => (
              <option
                key={item._id}
                value={item._id}
                onClick={() => setClickedSelected(item)}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </section>
    </>
  );
}
