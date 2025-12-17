// 5 ⭐
function hasFourLights(board: string[][]): boolean {
  const n = 4;

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      const light = board[y][x];
      if (light === ".") continue;

      // Chequeo horizontal
      if (board[y].length > x + (n - 1)) {
        if (board[y].slice(x, x + n).every((l) => l === light)) {
          return true;
        }
      }

      // Chequeo vertical
      if (board.length > y + (n - 1)) {
        const vertical = [];
        for (let dy = y; dy < y + n; dy++) {
          vertical.push(board[dy][x]);
        }
        if (vertical.every((l) => l === light)) {
          return true;
        }
      }
    }
  }

  return false;
}
