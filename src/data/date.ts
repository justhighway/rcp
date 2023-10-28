import { DateTime } from "luxon";

export const makeRandomPastData = () => {
  const value = new Date().valueOf();
  const n = 100000;
  return new Date(value - Math.floor(Math.random() * n * n));
};

export const makeRelativeDate = (date: Date) =>
  DateTime.fromJSDate(date).startOf("day").toRelative();
export const randomRelativeDate = () => makeRelativeDate(makeRandomPastData());

export const makeDayMonthYear = (date: Date) =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL);
export const randomDayMonthYear = () => makeDayMonthYear(makeRandomPastData());
