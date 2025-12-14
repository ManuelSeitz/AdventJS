# Reto #13: 🏭 La cadena de montaje

![Medio](https://img.shields.io/badge/MEDIO-%23f8e71c?style=flat-square)

Simula el recorrido de un regalo dentro de una fábrica y devuelve cómo termina. Para ello debes crear una función `runFactory(factory)`.

`factory` es un `string[]` donde cada celda puede ser:

- `>` `<` `^` `v` movimientos
- `.` salida correcta

Ten en cuenta que **todas las filas tienen la misma longitud** y que **no habrá otros símbolos**.

El regalo **siempre empieza en la posición (0,0)** (arriba a la izquierda). En cada paso lee la celda actual y se mueve según la dirección. Si llega a una celda con un punto (`.`) significa que ha salido correctamente de la fábrica.

## Resultado

Devuelve uno de estos valores:

- `'completed'` si llega a un `.`
- `'loop'` si visita una posición dos veces
- `'broken'` si sale fuera del tablero

## 🧩 Ejemplos

```javascript
runFactory([">>."]); // 'completed'

runFactory([">>>"]); // 'broken'

runFactory([">><"]); // 'loop'

runFactory([">>v", "..<"]); // 'completed'

runFactory([">>v", "<<<"]); // 'broken'

runFactory([">v.", "^.."]); // 'completed'

runFactory(["v.", "^."]); // 'loop'
```
