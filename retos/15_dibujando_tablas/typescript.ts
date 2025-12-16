// 5 ⭐
type Data = Array<Record<string, string | number>>;
type SortBy = keyof Data[number];

function drawTable(data: Data, sortBy: SortBy): string {
  const PADDING = 1;

  const sortedData = [...data].sort((a, b) => {
    if (typeof a[sortBy] === "string") {
      return a[sortBy].localeCompare(b[sortBy] as string);
    }
    return a[sortBy] - (b[sortBy] as number);
  });

  const keys = Object.keys(data[0]);

  const longestLines = keys.map((key, i) => {
    const header = String.fromCharCode(65 + i);
    return Math.max(
      header.length,
      ...data.map((item) => item[key].toString().length)
    );
  });

  let divisor = "";
  keys.forEach((_, i) => {
    divisor +=
      "+" +
      "-".repeat(longestLines[i] + PADDING * 2) +
      (i === keys.length - 1 ? "+" : "");
  });

  const head =
    "|" +
    longestLines
      .map((len, i) => {
        const header = String.fromCharCode(65 + i);
        const paddingRight = len - header.length + PADDING;
        return " ".repeat(PADDING) + header + " ".repeat(paddingRight);
      })
      .join("|") +
    "|";

  const body = sortedData
    .map((row) => {
      return (
        "|" +
        keys
          .map((key, i) => {
            const value = row[key].toString();
            const paddingRight = longestLines[i] - value.length + PADDING;
            return " ".repeat(PADDING) + value + " ".repeat(paddingRight) + "|";
          })
          .join("")
      );
    })
    .join("\n");

  const table = [divisor, head, divisor, body, divisor].join("\n");

  return table;
}
