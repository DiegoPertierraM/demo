// 1. Imprime por consola el string 'Hello World'.
console.log('Hello World');
// 2. Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
let a = 2;
console.log(a);
const b = 'Hola';
console.log(b);
// 3. Cambia ahora el valor de una de las dos variables e imprime por consola.
a = 10;
console.log(a);
// 4. Crea dos variable numéricas e imprime el resultado de sumarlas por consola.
const c = 5;
const d = 10;
console.log(c + d);
// 5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
const firstName = 'Pablo';
const lastName = ' Rodríguez';
console.log(firstName + lastName);
// 6. Crea una función que imprima por consola el string 'Hello World'.
function sayHello() {
  return 'Hello World';
}
console.log(sayHello());
// 7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.
function multiply() {
  return c * d;
}
console.log(multiply());
// 8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
function cube(num) {
  return num ** 3;
}
console.log(cube(4));
// 9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro.
function calcRectangleArea(height, width) {
  return height * width;
}
console.log(calcRectangleArea(3, 4));
// 10. Crea una función que imprima por consola un número al azar entre 0 y 10.
function getRandomNumber() {
  return Math.trunc(Math.random() * 11);
}
console.log(getRandomNumber());
// 11. Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.
function guessRandomNumber() {
  const randomNumber = Math.trunc(Math.random() * 10 + 1);
  let num = prompt('Introduce un número del 1 al 10');
  if (num === randomNumber) {
    return 'Felicidades! Has acertado.';
  }
  return 'Lo sentimos :(. No has acertado.';
}
console.log(guessRandomNumber());
// 12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.
function isOddOrEven(num) {
  if (num % 2) {
    return 'El número es impar';
  }
  return 'El número es par';
}
console.log(isOddOrEven(3));
// 13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).
function reverseString(word) {
  const changedString = word.split('').reverse().join('');
  return changedString;
}
console.log(reverseString('Palmera'));
// 14. Crea una función que devuelva la tabla de multiplicar de un número introducido como parámetro.
// LLama a la función desde console.log() para que el resultado se imprima por consola
function printMultiplicationTable(num) {
  return `
  ${num * 1}
  ${num * 2}
  ${num * 3}
  ${num * 4}
  ${num * 5}
  ${num * 6}
  ${num * 7}
  ${num * 8}
  ${num * 9}
  ${num * 10}`;
}
console.log(printMultiplicationTable(3));
// 15. Crea una función que reciba un número por parámetros y retorne si el número recibido es un número primo.
// LLama a la función desde console.log() para que el resultado se imprima por consola
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(isPrime(17));
