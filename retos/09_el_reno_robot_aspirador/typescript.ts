// 5 ⭐
type Board = string;
type Moves = string;
type Result = "fail" | "crash" | "success";

function moveReno(board: Board, moves: Moves): Result {
  const movements: Record<string, [number, number]> = {
    U: [0, -1],
    D: [0, 1],
    L: [-1, 0],
    R: [1, 0],
  };

  const lines = board.split("\n").filter((line) => line);
  const BOARD_HEIGHT = lines.length;
  const BOARD_WIDTH = lines[0].length;

  const startY = lines.findIndex((line) => line.includes("@"));
  const startX = lines[startY].indexOf("@");
  let [x, y] = [startX, startY];

  for (const move of moves) {
    const [dx, dy] = movements[move];
    x += dx;
    y += dy;

    if (y < 0 || y >= BOARD_HEIGHT || x < 0 || x >= BOARD_WIDTH) {
      return "crash";
    }

    const cell = lines[y][x];
    if (cell === "#") return "crash";
    if (cell === "*") return "success";
  }

  return "fail";
}
