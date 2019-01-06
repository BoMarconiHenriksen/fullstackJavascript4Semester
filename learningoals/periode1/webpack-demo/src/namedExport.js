// Exampel på named export. Flere metoder exporteres fra samme modul.

export function hello() {
    console.log('Hello from named export!');
};

export function anotherHello() {
    console.log('Another hello from named export! Called from namedExport.js. Method anotherHello()');
};
