import Slushbucket from "../../components/Slushbucket";
import styles from "./styles.module.scss";

export default function NewChampionship() {
  return (
    <div className={styles.content}>
      <h2>Escolha os participantes</h2>
      <Slushbucket />
      <h2>Escolha as pistas</h2>
      <Slushbucket circuitChoice />
    </div>
  );
}
