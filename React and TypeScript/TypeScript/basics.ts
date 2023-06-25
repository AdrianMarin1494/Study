let age: number;
age = 29;

let myName: string;
myName = "Adrian";

let isFun: boolean;
isFun = true;

let programmingLanguages: string[];
programmingLanguages = ["JavaScript", "TypeScript"];

type Person = {
    name: string;
    age: number;
}

let person: Person;
person = {
    name: "Adrian",
    age: 29
};

let people: Person[];

let inferenceString = "Inference string";

let unionStringAndNumber: string | number = "This can bea string or a number";

function addTwo(a: number, b: number): number {
    return a + b;
}

function printSomething(something: any): void {
    console.log(something);
}

// Generics
 function insertAtTheBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
 }

 const demoArray = [1, 2, 3];

 const updatedArray = insertAtTheBeginning(demoArray, -1);
 const stringArray = insertAtTheBeginning(['a', 'b'], 'c');