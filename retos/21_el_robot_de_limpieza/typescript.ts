// 5 ⭐
function clearGifts(warehouse: string[][], drops: number[]): string[][] {
  const GIFT = "#";
  const EMPTY = ".";
  const warehouseCopy = warehouse.map((row) => [...row]);

  for (const drop of drops) {
    if (warehouseCopy[0][drop] === GIFT) continue;

    for (let y = warehouseCopy.length - 1; y >= 0; y--) {
      if (warehouseCopy[y][drop] === GIFT) continue;

      warehouseCopy[y][drop] = GIFT;

      if (warehouseCopy[y].every((cell) => cell === GIFT)) {
        warehouseCopy.splice(y, 1);
        warehouseCopy.unshift(new Array(warehouse[0].length).fill(EMPTY));
      }

      break;
    }
  }

  return warehouseCopy;
}
