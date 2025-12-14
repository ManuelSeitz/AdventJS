// 5 ⭐
function drawTree(height: number, ornament: string, frequency: number): string {
  let position = 1;
  let tree = "";

  for (let i = 0; i < height; i++) {
    tree += " ".repeat(height - 1 - i);
    const width = i * 2 + 1;

    for (let j = 0; j < width; j++) {
      tree += position % frequency === 0 ? ornament : "*";
      position++;
    }

    tree += "\n";
  }

  tree += " ".repeat(height - 1) + "#";

  return tree;
}
