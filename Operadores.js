//Operadores
/*********************************************************************************************************************************************************/
// ASIGNACION
/*Los operadores de asignación en JavaScript se utilizan para asignar un valor a una variable. Estos operadores permiten actualizar el valor de una variable utilizando una expresión en combinación con el valor actual de la variable. A continuación, se presentan los operadores de asignación en JavaScript junto con su definición:

1. Asignación (=): El operador de asignación básico (=) se utiliza para asignar un valor a una variable. Por ejemplo, si tenemos la declaración "var x = 5;", asignamos el valor 5 a la variable x.

2. Asignación de suma (+=): El operador de asignación de suma (+=) se utiliza para sumar un valor a la variable y actualizar su valor. Por ejemplo, si tenemos la declaración "x += 3;", estamos sumando 3 al valor actual de x y almacenando el resultado en x.

3. Asignación de resta (-=): El operador de asignación de resta (-=) se utiliza para restar un valor a la variable y actualizar su valor. Por ejemplo, si tenemos la declaración "x -= 2;", estamos restando 2 al valor actual de x y almacenando el resultado en x.

4. Asignación de multiplicación (*=): El operador de asignación de multiplicación (*=) se utiliza para multiplicar un valor a la variable y actualizar su valor. Por ejemplo, si tenemos la declaración "x *= 4;", estamos multiplicando el valor actual de x por 4 y almacenando el resultado en x.

5. Asignación de división (/=): El operador de asignación de división (/=) se utiliza para dividir la variable por un valor y actualizar su valor. Por ejemplo, si tenemos la declaración "x /= 2;", estamos dividiendo el valor actual de x por 2 y almacenando el resultado en x.

6. Asignación de módulo (%=): El operador de asignación de módulo (%=) se utiliza para obtener el resto de la división de la variable por un valor y actualizar su valor. Por ejemplo, si tenemos la declaración "x %= 3;", estamos obteniendo el resto de la división del valor actual de x por 3 y almacenando el resultado en x.

Estos operadores de asignación permiten simplificar la actualización de variables al combinar operaciones y asignaciones en una sola expresión. */

// suma asignada o adicion
let suma = 10;
suma += 5; //aqui estamos sumandole 5 mas al 10 de arriba

//resta asignada o sustracion
let resta = 10;
resta -= 5; //aqui le restamos al 10 de resta

//multiplicacion asignada
let multiplicacion = 10;
multiplicacion *= 5; // aqui le multiplicamos al 10 de multiplicacion

//divicion asignada 
let divicion = 10;
divicion /= 5; //aqui dividimos 5 entre 10

//resto asignado o modulo
let resto = 10;
resto %= 5; //divide y en ves de darnos el decimal nos da el residuo o el resto osea nos da lo que falta para completar la divicion al numero sercano mas abajo esto lo hace por enteros

//exponencialisacion asignada
let expo = 10;
expo **= 5; // este eleva al cuadrado nuestra expo de 10 haciendo que 10 se multiplique 5 veces entresimismo


/*******************************************************************************************************************************************************/

// ARITMETICOS
/*
Los operadores aritméticos en JavaScript son símbolos que se utilizan para realizar operaciones matemáticas en expresiones numéricas. A continuación, se presentan los operadores aritméticos en JavaScript junto con su definición:

1. Suma (+): Se utiliza para sumar dos valores. Por ejemplo, 3 + 5 devuelve 8.

2. Resta (-): Se utiliza para restar un valor de otro. Por ejemplo, 7 - 4 devuelve 3.

3. Multiplicación (*): Se utiliza para multiplicar dos valores. Por ejemplo, 2 * 6 devuelve 12.

4. División (/): Se utiliza para dividir un valor por otro. Por ejemplo, 10 / 2 devuelve 5.

5. Módulo (%): Se utiliza para obtener el resto de la división entre dos valores. Por ejemplo, 9 % 4 devuelve 1, ya que 9 dividido por 4 es 2 con un resto de 1.

6. Incremento (++): Se utiliza para aumentar en 1 el valor de una variable. Por ejemplo, si x es igual a 5, entonces x++ incrementa el valor de x a 6.

7. Decremento (--): Se utiliza para disminuir en 1 el valor de una variable. Por ejemplo, si y es igual a 8, entonces y-- disminuye el valor de y a 7.

Es importante tener en cuenta que estos operadores se pueden combinar con asignaciones para actualizar el valor de una variable. Por ejemplo, x += 3 es equivalente a x = x + 3 y realiza la suma y asignación en una sola expresión.
*/


//suma aritmetica
numero1 = 3;
numero2  = 2;
//si coloco (numero1--;) le resto 1 a ese 3 
//y si coloco (numero1++;) hago que incremente 1 valor
//y si vamos a hacer decremento o incremento debemos respetar el orden
resultado = numero1 + numero2;


//resta aritmetica
resta0 =10;
resta1 = 5;
resultado= resta0 - resta1;

//divicion aritmetica
div1 = 10;
div2 = 2;
resultado = div1 / div2;

//resto aritmetico
res= 9;
res1=4;
resultado= res % res1;
//igual que en el de asignacion este nos dejara el residuo faltante para completar el numero entero


