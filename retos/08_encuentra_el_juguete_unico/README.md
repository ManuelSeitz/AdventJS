# Reto #8: 🎁 Encuentra el juguete único

![Fácil](https://img.shields.io/badge/F%C3%81CIL-%23a2f176?style=flat-square)

Santa 🎅 quiere saber cuál es la primera letra no repetida en el nombre de un juguete 🎁.

Escribe una función que reciba un `string` y devuelva la primera letra que no se repite, ignorando mayúsculas y minúsculas al contar, pero devolviendo la letra tal como aparece en el string.

Si no hay ninguna, devuelve una cadena vacía ("").

## 🧩 Ejemplos

```javascript
findUniqueToy("Gift"); // 'G'
// ℹ️ La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

findUniqueToy("sS"); // ''
// ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

findUniqueToy("reindeeR"); // 'i'
// ℹ️ La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
findUniqueToy("AaBbCc"); // ''
findUniqueToy("abcDEF"); // 'a'
findUniqueToy("aAaAaAF"); // 'F'
findUniqueToy("sTreSS"); // 'T'
findUniqueToy("z"); // 'z'
```
