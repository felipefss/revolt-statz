import { DateTime } from "luxon";

export const getDate = (date: Date) =>
  DateTime.fromJSDate(date).toFormat("dd/MM/yyyy");
