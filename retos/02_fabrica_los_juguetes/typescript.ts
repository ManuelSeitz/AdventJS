// 5 ⭐
function manufactureGifts(
  giftsToProduce: Array<{ toy: string; quantity: number }>
): string[] {
  const result: string[] = [];
  const validGifts = giftsToProduce.filter((gift) => gift.quantity > 0);

  for (const gift of validGifts) {
    for (let i = 0; i < gift.quantity; i++) {
      result.push(gift.toy);
    }
  }

  return result;
}
