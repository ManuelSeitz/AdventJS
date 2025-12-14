// 5 ⭐
type Glove = { hand: "L" | "R"; color: string };

function matchGloves(gloves: Glove[]): string[] {
  const pairs: Map<string, { L: number; R: number }> = new Map();
  const result: string[] = [];

  for (const glove of gloves) {
    const { color, hand } = glove;

    if (!pairs.has(color)) {
      pairs.set(color, { L: 0, R: 0 });
    }

    const pair = pairs.get(color)!;

    if (hand === "L" && pair.R > 0) {
      pair.R--;
      result.push(color);
    } else if (hand === "R" && pair.L > 0) {
      pair.L--;
      result.push(color);
    } else {
      pair[hand]++;
    }
  }

  return result;
}
