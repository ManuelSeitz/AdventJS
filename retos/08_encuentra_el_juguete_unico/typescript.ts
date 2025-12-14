// 5 ⭐
function findUniqueToy(toy: string): string {
  const toys = toy.split("").map((t) => t.toLowerCase());

  for (let i = 0; i < toy.length; i++) {
    if (toys.indexOf(toys[i]) === toys.lastIndexOf(toys[i])) {
      return toy[i];
    }
  }

  return "";
}
