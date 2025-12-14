// 5 ⭐
function elfBattle(elf1: string, elf2: string): number {
  let elf1Lives = 3;
  let elf2Lives = 3;

  const moves = {
    AA: [-1, -1],
    AB: [0, 0],
    AF: [-2, -1],
    BA: [0, 0],
    BB: [0, 0],
    BF: [-2, 0],
    FA: [-1, -2],
    FB: [0, -2],
    FF: [-2, -2],
  };

  const rounds = Math.min(elf1.length, elf2.length);

  for (let i = 0; i < rounds; i++) {
    const move = elf1[i] + elf2[i];
    if (!(move in moves)) continue;
    const [elf1Damage, elf2Damage] = moves[move as keyof typeof moves];

    elf1Lives += elf1Damage;
    elf2Lives += elf2Damage;

    if (elf1Lives <= 0 || elf2Lives <= 0) {
      break;
    }
  }

  if (elf1Lives === elf2Lives) return 0;

  return elf1Lives > elf2Lives ? 1 : 2;
}
