// 5 ⭐
function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  const GIFT = "#";
  const EMPTY = ".";
  const warehouseCopy = warehouse.map((row) => [...row]);

  for (const drop of drops) {
    if (warehouseCopy[0][drop] === GIFT) continue;

    for (let y = warehouseCopy.length - 1; y >= 0; y--) {
      if (warehouseCopy[y][drop] === EMPTY) {
        warehouseCopy[y][drop] = GIFT;
        break;
      }
    }
  }

  return warehouseCopy;
}
