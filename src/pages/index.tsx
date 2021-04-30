import { GetServerSideProps } from "next";
import Players from "../db/Players";

// Components
import Spinner from "../components/Spinner";

// Types
type Victories = {
  _id: number;
  name: string;
  wins: number;
};

type Defeats = {
  _id: number;
  name: string;
  defeats: number;
};

type Championships = {
  _id: number;
  name: string;
  championships: number;
};

type IndexProps = {
  victories: [];
  defeats: [];
  championships: [];
};

// Stats page
export default function Home({
  victories,
  defeats,
  championships,
}: IndexProps) {
  // Show loading spinner and re-route to whatever page is needed
  return (
    
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const players = await (await Players()).getAllPlayers();

  const victories = players
    .map((player) => {
      return {
        _id: player._id,
        name: player.name,
        wins: player.wins.length,
      };
    })
    .sort((a, b) => b.wins - a.wins);

  const defeats = players
    .map((player) => {
      return {
        _id: player._id,
        name: player.name,
        defeats: player.last.length,
      };
    })
    .sort((a, b) => b.defeats - a.defeats);

  const championships = players
    .map((player) => {
      return {
        _id: player._id,
        name: player.name,
        championships: player.championshipsWon.length,
      };
    })
    .sort((a, b) => b.championships - a.championships);

  return {
    props: {
      victories,
      defeats,
      championships,
    },
  };
};
