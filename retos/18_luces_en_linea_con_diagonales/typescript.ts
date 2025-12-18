// 5 ⭐
function hasFourInARow(board: string[][]): boolean {
  const n = 4;

  // Verifica si hay una linea de 4 luces, ya sea de forma horizontal, vertical o diagonal
  const checkDirection = (
    y: number,
    x: number,
    dy: number,
    dx: number
  ): boolean => {
    const light = board[y][x];
    if (light === ".") return false;

    for (let k = 0; k < n; k++) {
      const ny = y + dy * k;
      const nx = x + dx * k;
      if (ny < 0 || ny >= board.length) return false;
      if (nx < 0 || nx >= board[ny].length) return false;
      if (board[ny][nx] !== light) return false;
    }

    return true;
  };

  const directions = [
    [0, 1], // Horizontal
    [1, 0], // Vertical
    [1, 1], // Diagonal
    [1, -1], // Diagonal al revés
  ];

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      for (const [dy, dx] of directions) {
        if (checkDirection(y, x, dy, dx)) {
          return true;
        }
      }
    }
  }

  return false;
}
