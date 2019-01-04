import { utilsTest, formats } from "./test-utils";

describe("DateTime calculations", () => {
  utilsTest("addDays", (date, utils, lib) => {
    expect(utils.format(utils.addDays(date, 1), formats.day[lib])).toBe("31");
  });

  utilsTest("startOfDay", (date, utils, lib) => {
    expect(utils.format(utils.startOfDay(date), formats.dateTime[lib])).toBe(
      "2018-10-30 00:00"
    );
  });

  utilsTest("endOfDay", (date, utils, lib) => {
    expect(utils.format(utils.endOfDay(date), formats.dateTime[lib])).toBe(
      "2018-10-30 23:59"
    );
  });

  utilsTest("startOfMonth", (date, utils, lib) => {
    expect(utils.format(utils.startOfMonth(date), formats.dateTime[lib])).toBe(
      "2018-10-01 00:00"
    );
  });

  utilsTest("endOfMonth", (date, utils, lib) => {
    expect(utils.format(utils.endOfMonth(date), formats.dateTime[lib])).toBe(
      "2018-10-31 23:59"
    );
  });

  utilsTest("getPreviousMonth", (date, utils, lib) => {
    expect(utils.format(utils.getPreviousMonth(date), formats.dateTime[lib])).toBe(
      "2018-09-30 13:44"
    );
  });

  utilsTest("getNextMonth", (date, utils, lib) => {
    expect(utils.format(utils.getNextMonth(date), formats.dateTime[lib])).toBe(
      "2018-11-30 13:44"
    );
  });

  utilsTest("isAfter", (date, utils, lib) => {
    expect(utils.isAfter(utils.date(), date)).toBeTruthy();
    expect(utils.isAfter(date, utils.date())).toBeFalsy();
  });

  utilsTest("isBefore", (date, utils, lib) => {
    expect(utils.isBefore(date, utils.date())).toBeTruthy();
    expect(utils.isBefore(utils.date(), date)).toBeFalsy();
  });

  utilsTest("isAfterDay", (date, utils, lib) => {
    const nextDay = utils.addDays(date, 1);

    expect(utils.isAfterDay(nextDay, date)).toBeTruthy();
    expect(utils.isAfterDay(date, nextDay)).toBeFalsy();
  });

  utilsTest("isBeforeDay", (date, utils, lib) => {
    const previousDay = utils.addDays(date, -1);

    expect(utils.isBeforeDay(date, previousDay)).toBeFalsy();
    expect(utils.isBeforeDay(previousDay, date)).toBeTruthy();
  });

  utilsTest("isAfterYear", (date, utils, lib) => {
    const nextYear = utils.setYear(date, 2019);

    expect(utils.isAfterYear(nextYear, date)).toBeTruthy();
    expect(utils.isAfterYear(date, nextYear)).toBeFalsy();
  });

  utilsTest("isBeforeYear", (date, utils, lib) => {
    const previousYear = utils.setYear(date, 2017);

    expect(utils.isBeforeYear(date, previousYear)).toBeFalsy();
    expect(utils.isBeforeYear(previousYear, date)).toBeTruthy();
  });

  utilsTest("getWeekArray", (date, utils) => {
    const weekArray = utils.getWeekArray(date);

    expect(weekArray).toHaveLength(5);
    for (const week of weekArray) {
      expect(week).toHaveLength(7);
    }
  });

  utilsTest("getYearRange", (date, utils) => {
    const getYearRange = utils.getYearRange(date, utils.setYear(date, 2024));

    expect(getYearRange).toHaveLength(7);
    expect(utils.getYear(getYearRange[getYearRange.length - 1])).toBe(2024);
  });
});
