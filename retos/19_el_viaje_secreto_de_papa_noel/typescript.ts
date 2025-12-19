// 5 ⭐
function revealSantaRoute(routes: string[][]): string[] {
  const map = Object.fromEntries(routes);
  const path = [routes[0][0]];
  let lastPlace = path[path.length - 1];

  while (map[lastPlace]) {
    path.push(map[lastPlace]);
    lastPlace = path[path.length - 1];
  }

  return path;
}
