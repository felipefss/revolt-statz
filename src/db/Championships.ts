import { connectToDatabase, Database } from "../util/mongodb";
import { Collection } from "mongodb";
import { getDate } from "../util/dateHelper";

type Player = {
  player_id: number;
  name: number;
};

type Circuits = {
  [circuit_id: number]: {
    [player_id: number]: number;
  };
};

export type IChampionship = {
  _id: number;
  title: string;
  circuits: Circuits;
  players: Player[];
  winner: string;
  date: string;
};

let col: Collection<any>;

export const Championships = async () => {
  const { db }: Database = await connectToDatabase();
  if (!col) {
    col = db.collection("championships");
  }

  return {
    getCount,
    getChampionshipsByDate,
  };
};

// Return total number of championships added
const getCount = async () => await col.countDocuments({});

const serialiseDates = (queryResult: Array<any>): IChampionship[] => {
  return queryResult.map((obj) => {
    obj.date = getDate(obj.date);
    return obj;
  });
};

const getChampionshipsByDate = async (): Promise<IChampionship[]> => {
  // Before returning the query results, need to make all fields serialised (primitive types)
  const championships = await col.find({}, { sort: [["date", -1]] }).toArray();
  return serialiseDates(championships);
};
