// 5 ⭐
type Factory = string[];
type Result = "completed" | "broken" | "loop";

function runFactory(factory: Factory): Result {
  let x = 0;
  let y = 0;
  const BOARD_WIDTH = factory[0].length;
  const BOARD_HEIGHT = factory.length;

  const moves = {
    "^": [0, -1],
    ">": [1, 0],
    v: [0, 1],
    "<": [-1, 0],
  };

  const visited: Set<string> = new Set();

  while (true) {
    if (visited.has(`${x},${y}`)) {
      return "loop";
    }

    visited.add(`${x},${y}`);

    if (x < 0 || x >= BOARD_WIDTH || y < 0 || y >= BOARD_HEIGHT) {
      return "broken";
    }

    if (factory[y][x] === ".") return "completed";

    const move = factory[y][x];
    const [dx, dy] = moves[move as keyof typeof moves];
    x += dx;
    y += dy;
  }
}
