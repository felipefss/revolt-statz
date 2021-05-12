import styles from "./styles.module.scss";

export default function Slushbucket({ circuitChoice = false }) {
  return (
    <>
      <section className={styles.players}>
        <div className={styles.choiceColumn}>
          <span>Disponíveis</span>
          <select className={styles.choiceList} multiple></select>
        </div>

        <div className={styles.actionButtons}>
          <div className={styles.selectBtn} />
          <button type="button">
            {circuitChoice ? "Nova pista" : "Novo jogador"}
          </button>
          <div className={`${styles.selectBtn} ${styles.inverse}`} />
        </div>

        <div className={styles.choiceColumn}>
          <span>Selecionados</span>
          <select className={styles.choiceList} multiple></select>
        </div>
      </section>
    </>
  );
}
