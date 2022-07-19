function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);

};

newFunction2();
newFunction2('Ricardo', '23', 'CO');

// concatenar

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);



// multilinea

let lorem = 'Qui consequatur. Commmodi. Ipsum vel duis yet minima \n'
+ 'otra frase epica que necesitamos.';
// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

// Desestructuracion de elementos

let person = {
    'name' : 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age, person.country);

// es6
let { name, age, country } = person;
console.log(name, age, country);


// Spread Operator

let team1 = ['oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];
// es6
let education = ['David', ...team1, ...team2];

console.log(education);


// Var vs Let es asignacion global vs asignacion local
{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);



//OBJETOS
let name = 'Hugo';
let age = 32;

// es5
obj = { name: name, age: age };
// es6
obj2 = { name, age };

console.log(obj2);


//ARROW FUNCTIONS

const names = [
    {name: 'Hugo', age: 30},
    {name: 'Heidy', age: 29}
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) => {
    ...
}

const listOfNames4 = names => {
    ...
}

const square = num => num * num;


// PROMESAS

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        }
        else {
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));





