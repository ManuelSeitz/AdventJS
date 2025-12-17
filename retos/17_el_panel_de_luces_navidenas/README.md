# Reto #17: 🎄 El panel de luces navideñas

![Fácil](https://img.shields.io/badge/F%C3%81CIL-%23a2f176?style=flat-square)

En el Polo Norte han montado un **panel de luces navideñas** 🎄✨ para decorar el taller. Cada luz puede estar encendida con un color o apagada.

El panel se representa como una **matriz** donde cada celda puede ser:

- `'.'` → luz apagada
- `'R'` → luz roja
- `'G'` → luz verde

Los elfos quieren saber si en el panel existe una **línea de 4 luces del mismo color** encendidas y **alineadas** (solo horizontal ↔ o vertical ↕). Las luces apagadas (`'.'`) no cuentan.

## 🧩 Ejemplos

```javascript
hasFourLights([
  [".", ".", ".", ".", "."],
  ["R", "R", "R", "R", "."],
  ["G", "G", ".", ".", "."],
]);
// true → hay 4 luces rojas en horizontal

hasFourLights([
  [".", "G", ".", "."],
  [".", "G", ".", "."],
  [".", "G", ".", "."],
  [".", "G", ".", "."],
]);
// true → hay 4 luces verdes en vertical

hasFourLights([
  ["R", "G", "R"],
  ["G", "R", "G"],
  ["G", "R", "G"],
]);
// false → no hay 4 luces del mismo color seguidas
```

**Nota**: El tablero puede ser de cualquier tamaño. No hay diagonales.
