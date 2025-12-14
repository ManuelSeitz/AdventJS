// 5 ⭐
function drawGift(size: number, symbol: string): string {
  if (size < 2) return "";
  let result = "";

  for (let i = 1; i <= size; i++) {
    const isTop = i === 1;
    const isBottom = i === size;

    if (isTop) {
      result += symbol.repeat(size) + "\n";
    } else if (isBottom) {
      result += symbol.repeat(size);
    } else {
      result += symbol + " ".repeat(size - 2) + symbol + "\n";
    }
  }

  return result;
}
