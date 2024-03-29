import { GetServerSideProps } from "next";
import { useState } from "react";

// DB
import Players from "../../db/Players";

// Components
import Slushbucket from "../../components/Slushbucket";

// Styles
import styles from "./styles.module.scss";

type DbItem = {
  _id: number;
  name: string;
};

type NewChampionshipProps = {
  players: DbItem[];
  circuits: DbItem[];
};

export default function NewChampionship({ players }: NewChampionshipProps) {
  // const [availablePlayers, setAvailablePlayers] = useState([] as DbItem[]);
  const [selectedPlayers, setSelectedPlayers] = useState([] as DbItem[]);
  // const [availableCircuits, setAvailableCircuits] = useState([] as DbItem[]);
  const [selectedCircuits, setSelectedCircuits] = useState([] as DbItem[]);

  const handleSelectPlayer = (data: DbItem, remove = false) => {
    if (!remove) {
      setSelectedPlayers([...selectedPlayers, data]);
    } else {
      const newSelected = selectedPlayers.filter((i) => i._id !== data._id);
      setSelectedPlayers(newSelected);
    }
  };

  const addNewPlayer = (playerName: string) => {};

  return (
    <div className={styles.content}>
      <h2>Escolha os participantes</h2>
      <Slushbucket
        availableItems={players}
        selected={selectedPlayers}
        handleSelect={handleSelectPlayer}
        addNewItem={addNewPlayer}
      />
      <h2>Escolha as pistas</h2>
      {/* <Slushbucket circuitChoice /> */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const players = await (await Players()).getAllPlayers();

  const parsedPlayers = players.map((p) => {
    return {
      _id: p._id,
      name: p.name,
    };
  });

  return {
    props: {
      players: parsedPlayers,
    },
  };
};
