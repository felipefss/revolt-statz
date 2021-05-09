import { GetServerSideProps } from "next";
import Players from "../db/Players";
import styles from "./home.module.scss";

// Components
import Spinner from "../components/Spinner";
import VerticalDivider from "../components/VerticalDivider";
import StatsList from "../components/StatsList";

// Types
type StatsObj = {
  _id: number;
  name: string;
  value: number;
};

type IndexProps = {
  victories: StatsObj[];
  defeats: StatsObj[];
  championships: StatsObj[];
};

// Stats page
export default function Home({
  victories,
  defeats,
  championships,
}: IndexProps) {
  return (
    <div className="container">
      <div className={`row ${styles.page}`}>
        <div className={styles.statsColumn}>
          <h1>Individual</h1>
          <div className={styles.individualList}>
            <StatsList list={victories} title="Vitórias" />
            <StatsList list={defeats} title="Derrotas" />
          </div>
        </div>

        <VerticalDivider />

        <div className={styles.statsColumn}>
          <h1>Campeonatos</h1>
          <div className={styles.championshipList}>
            <StatsList list={championships} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sort stats from highest to lowest
const sortDesc = (a: StatsObj, b: StatsObj) => b.value - a.value;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const players = await (await Players()).getAllPlayers();

  const victories = players
    .map((player) => {
      return {
        _id: player._id,
        name: player.name,
        value: player.wins.length,
      };
    })
    .sort(sortDesc);

  const defeats = players
    .map((player) => {
      return {
        _id: player._id,
        name: player.name,
        value: player.last.length,
      };
    })
    .sort(sortDesc);

  const championships = players
    .map((player) => {
      return {
        _id: player._id,
        name: player.name,
        value: player.championshipsWon.length,
      };
    })
    .sort(sortDesc);

  return {
    props: {
      victories,
      defeats,
      championships,
    },
  };
};
