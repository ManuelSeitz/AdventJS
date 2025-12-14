// 5 ⭐
type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`;

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {
  const stringToDate = (string: ElfDateTime) => {
    const [date, time] = string.split(/[@\s]/);
    const [year, month, day] = date.split("*").map((d) => Number(d));
    const [hour, minutes, seconds] = time.split("|").map((d) => Number(d));

    return new Date(year, month - 1, day, hour, minutes, seconds);
  };

  const fromDate = stringToDate(fromTime);
  const takeOffDate = stringToDate(takeOffTime);

  return (takeOffDate.getTime() - fromDate.getTime()) / 1000;
}
