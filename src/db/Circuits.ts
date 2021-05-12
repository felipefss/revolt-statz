export type ICircuit = {
  _id: number;
  name: string;
  wins: {
    [player_id: number]: number;
  };
  last: {
    [player_id: number]: number;
  };
  // getTotal: () => number;
};
