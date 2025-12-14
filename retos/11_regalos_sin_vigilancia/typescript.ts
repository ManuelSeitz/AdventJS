// 5 ⭐
function findUnsafeGifts(warehouse: string[]): number {
  const GIFT = "*";
  const directions = {
    U: [0, -1],
    R: [1, 0],
    D: [0, 1],
    L: [-1, 0],
  };

  let unsafeGifts = 0;

  for (let i = 0; i < warehouse.length; i++) {
    for (let j = 0; j < warehouse[i].length; j++) {
      const position = warehouse[i][j];

      if (position !== GIFT) continue;

      const adjacentItems: string[] = [];

      for (const direction in directions) {
        const [dx, dy] = directions[direction as keyof typeof directions];
        const x = j + dx;
        const y = i + dy;

        if (
          x < 0 ||
          x >= warehouse[i].length ||
          y < 0 ||
          y >= warehouse.length
        ) {
          continue;
        }

        adjacentItems.push(warehouse[y][x]);
      }

      if (!adjacentItems.some((item) => item === "#")) {
        unsafeGifts++;
      }
    }
  }

  return unsafeGifts;
}
