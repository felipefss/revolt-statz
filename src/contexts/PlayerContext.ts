import { createContext, ReactNode } from "react";
import { Collection } from "mongodb";
import { connectToDatabase, Database } from "../util/mongodb";

interface PlayerContextData {}

type PlayerProviderProps = {
  children: ReactNode;
};

type Race = {
  circuit_id: number;
  championship_id: number;
};

type PlayerData = {
  _id: number;
  name: string;
  championshipsWon: number[];
  wins: Race[];
  last: Race[];
};

let col: Collection<any>;

export default async function Players() {
  const { db }: Database = await connectToDatabase();
  if (!col) {
    col = db.collection("players");
  }

  return {
    getAllPlayers,
  };
}

// Return total number of players added
const getCount = async () => await col.countDocuments({});

const getAllPlayers = async (): Promise<PlayerData[]> => {
  return await col.find({}).toArray();
};

export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerProvider({ children }: PlayerProviderProps) {
  return <PlayerContext.Provider>{children}</PlayerContext.Provider>;
}
