// 5 ⭐
function minStepsToDeliver(map: string[][]): number {
  const START = "S";
  const HOME = "G";
  const WALL = "#";
  const MAP_HEIGHT = map.length;
  const MAP_WIDTH = map[0].length;

  let startPos: [number, number] | null = null;

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === START) {
        startPos = [x, y];
        break;
      }
    }
    if (startPos) break;
  }

  if (!startPos) return -1;

  const moves: Array<[number, number]> = [
    [0, -1], // Arriba
    [1, 0], // Derecha
    [0, 1], // Abajo
    [-1, 0], // Izquierda
  ];

  const isValidMove = (x: number, y: number): boolean => {
    if (x < 0 || x >= MAP_WIDTH) return false;
    if (y < 0 || y >= MAP_HEIGHT) return false;
    if (map[y][x] === WALL) return false;
    return true;
  };

  // Matriz completa con valores -1, representa "no visitado"
  const distances: number[][] = Array.from({ length: MAP_HEIGHT }, () =>
    Array(MAP_WIDTH).fill(-1)
  );
  distances[startPos[1]][startPos[0]] = 0;

  const queue: [number, number][] = [startPos];

  while (queue.length > 0) {
    const [x, y] = queue.shift() as [number, number];
    const distance = distances[y][x];

    for (const [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;
      if (!isValidMove(newX, newY)) continue;
      const isVisited = distances[newY][newX] !== -1;
      if (isVisited) continue;

      distances[newY][newX] = distance + 1;
      queue.push([newX, newY]);
    }
  }

  let totalSteps = 0;
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      if (map[y][x] !== HOME) continue;
      if (distances[y][x] === -1) return -1;
      totalSteps += distances[y][x];
    }
  }

  return totalSteps;
}
