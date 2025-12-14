// 5 ⭐
function maxDepth(s: string): number {
  let depth = 0;
  let maxDepth = 0;

  for (const char of s) {
    if (char === "[") {
      depth++;
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    } else if (char === "]") {
      depth--;
      if (depth < 0) return -1;
    } else {
      return -1;
    }
  }

  return depth === 0 ? maxDepth : -1;
}
