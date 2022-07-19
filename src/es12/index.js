// Replace reemplaza el primer string que coincide con la busqueda
const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web';

const replacedString = string.replace('JavaScript', 'Python');

console.log(replacedString);

//Para reemplazar todas las palabras se utiliza replaceAll

const replacedString2 = string.replaceAll('JavaScript', 'Python')
console.log(replacedString2);


//Metodos privados
//Con esto se puede añadir un prefijo para decir que es privado este es el numeral #

class Message {
    #show(val) {
        console.log(val);
    };
    get #add(Val) {
        ...
    }
};

const message = new Message();
message.show('hola');

//  👽 Promise Any

const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('1'));
// lo que estamos buscando es el primero que resuelva que lo devuelva
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//  🦴 WeakRef(element);
// referencia de forma debil a un objeto

class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
    {...}
}


// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); //Asignacion AND logico

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse); //Asignacion OR logico


let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse); //Asignacion de anulacion logica
