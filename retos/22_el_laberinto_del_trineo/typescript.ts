// 5 ⭐
function canEscape(maze: string[][]): boolean {
  const START = "S";
  const EXIT = "E";
  const WALL = "#";
  const MAZE_HEIGHT = maze.length;
  const MAZE_WIDTH = maze[0].length;

  let startPos: [number, number] | null = null;

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === START) {
        startPos = [x, y];
        break;
      }
    }
    if (startPos) break;
  }

  if (!startPos) return false;

  const moves: Array<[number, number]> = [
    [0, -1], // Arriba
    [1, 0], // Derecha
    [0, 1], // Abajo
    [-1, 0], // Izquierda
  ];

  const isValidMove = (x: number, y: number, visited: Set<string>): boolean => {
    if (x < 0 || x >= MAZE_WIDTH) return false;
    if (y < 0 || y >= MAZE_HEIGHT) return false;
    if (maze[y][x] === WALL) return false;
    if (visited.has(`${x},${y}`)) return false;
    return true;
  };

  const dfs = (
    current: [number, number],
    visited: Set<string> = new Set()
  ): boolean => {
    const [x, y] = current;

    if (maze[y][x] === EXIT) {
      return true;
    }

    const key = `${x},${y}`;
    visited.add(key);

    for (const [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;

      if (!isValidMove(newX, newY, visited)) continue;

      if (dfs([newX, newY], visited)) {
        return true;
      }
    }

    return false;
  };

  return dfs(startPos);
}
