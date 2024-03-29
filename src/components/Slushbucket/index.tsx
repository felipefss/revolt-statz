import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import AddPopup from "../AddPopup";

type DbItem = {
  _id: number;
  name: string;
};

type SlushbucketProps = {
  availableItems: DbItem[];
  circuitChoice?: boolean;
  selected: DbItem[];
  handleSelect: (item: DbItem, remove?: boolean) => void;
  addNewItem: (item: string) => DbItem;
};

export default function Slushbucket({
  availableItems,
  circuitChoice = false,
  selected,
  handleSelect,
  addNewItem,
}: SlushbucketProps) {
  const [available, setAvailable] = useState(availableItems);
  const [clickedAvailable, setClickedAvailable] = useState<DbItem | null>(null);
  const [clickedSelected, setClickedSelected] = useState<DbItem | null>(null);
  const [actionTitle, setActionTitle] = useState("Novo jogador");

  useEffect(() => {
    // Set action title depending if circuitChoice is true
    circuitChoice && setActionTitle("Nova pista");
  }, []);

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

  const [showModal, setShowModal] = useState(false);
  const addNewAvailable = (newItem: string) => {
    //TODO: Add to database, then add to available list
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
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#newModal"
            onClick={() => setShowModal(true)}
          >
            {actionTitle}
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

      <AddPopup
        title={actionTitle}
        show={showModal}
        onHide={() => setShowModal(false)}
        addItem={addNewAvailable}
      />
    </>
  );
}
