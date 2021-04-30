export type ICircuit = {
  _id: number;
  name: string;
  wins: {
    [player_id: string]: number;
  };
  last: {
    [player_id: string]: number;
  };
  // getTotal: () => number;
};
