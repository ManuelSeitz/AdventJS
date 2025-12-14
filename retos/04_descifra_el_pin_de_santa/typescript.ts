// 4 ⭐
function decodeSantaPin(code: string): string | null {
  const operations = code.replaceAll("[", "").split("]");
  // El último item está vacío
  operations.pop();

  // El PIN debe tener 4 caracteres
  if (operations.length !== 4) {
    return null;
  }

  const operators = {
    "+": 1,
    "-": -1,
  };

  const pin = operations.reduce((acc, op) => {
    const lastDigit = acc[acc.length - 1];

    // Si se encuentra "<" se debe tomar el dígito anterior
    if (op[0] === "<") {
      if (lastDigit === undefined) return acc;
      return acc + lastDigit;
    }

    let digit = Number(op[0]);
    const ops = op.slice(1);

    for (const operator of ops) {
      digit += operators[operator as keyof typeof operators];
    }

    if (digit < 0) {
      return acc + (digit + 10);
    }

    return acc + (digit % 10);
  }, "");

  return pin;
}
