// 5 ⭐
type Gifts = number[];
type MaxWeight = number;
type Result = number | null;

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
  const weights: number[] = [];
  let sum = 0;
  let i = 0;

  for (const gift of gifts) {
    if (gift > maxWeight) {
      return null;
    }

    if (sum + gift > maxWeight) {
      weights.push(sum);
      sum = gift;
    } else {
      sum += gift;
    }
  }

  if (sum > 0) {
    weights.push(sum);
  }

  return weights.length;
}
