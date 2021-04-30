import { Collection } from "mongodb";
import { connectToDatabase, Database } from "../util/mongodb";

type Race = {
  circuit_id: number;
  championship_id: number;
};

type PlayerData = {
  _id: number;
  name: string;
  championshipsWon: string[];
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
