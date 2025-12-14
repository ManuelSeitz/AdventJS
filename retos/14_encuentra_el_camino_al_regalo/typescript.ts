// 5 ⭐
type Gift = string | number | boolean;
type Workshop = Record<string, any>;
type Path = string[];

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  const findPath = (workshop: Workshop, gift: Gift, path: Path = []): Path => {
    for (const key in workshop) {
      const item = workshop[key];
      if (typeof item === "object" && item !== null) {
        const result = findPath(item, gift, [...path, key]);
        if (result.length > 0) {
          return result;
        }
      } else if (item === gift) {
        return [...path, key];
      }
    }
    return [];
  };

  return findPath(workshop, gift);
}
