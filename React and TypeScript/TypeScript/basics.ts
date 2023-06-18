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