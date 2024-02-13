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
  console.log('Hello World');
}
sayHello();
// 7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.
function multiply() {
  console.log(c * d);
}
multiply();
// 8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
function square(num) {
  console.log(num * num);
}
square(4);
// 9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro.
function calculateRectangleArea(height, width) {
  console.log(height * width);
}
calculateRectangleArea(3, 4);
// 10. Crea una función que imprima por consola un número al azar entre 0 y 10.
function getRandomNumber() {
  console.log(Math.floor(Math.random() * 10));
}
getRandomNumber();
// 11. Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.
function guessRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10);
  let num = prompt('Introduce un número del 1 al 10');
  if (num === randomNumber) {
    console.log('Felicidades! Has acertado.');
  } else {
    console.log('Lo sentimos :(. No has acertado.');
  }
}
guessRandomNumber();
// 12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.
function isOddOrEven(num) {
  if (num % 2 === 0) {
    console.log('El número es par');
  } else {
    console.log('El número es impar');
  }
}
isOddOrEven(3);
// 13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).
function reverseString(word) {
  console.log(word.reverse());
}
reverseString('Palmera');
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
