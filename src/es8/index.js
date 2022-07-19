const data = {
    frontend: 'Hugo',
    backend: 'Heidy',
    design: 'Bryan'
}

// Object Entries
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//Object Values
const data = {
    frontend: 'Hugo',
    backend: 'Heidy',
    design: 'Bryan'
}

const values = Object.values(data);
console.log(values);

// Paring

const string = 'hello';
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(15, ' Fucker'));
console.log('food'.padEnd(12, ' ----'));




// ASYNC Y AWAIT ---------------------------------

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();



// Forma correcta

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();
