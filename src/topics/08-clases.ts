export class Person {
    // public name: string;
    // public address: string;

    constructor(
        public name: string,
        public address: string
    ) {}
}

// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//         name: string,
//         address: string
//     ){
//         super(name, address)
//     }
// }

export class Hero{
    constructor(
                public alterEgo: string,
                public age: number,
                public realName: string,
                public person: Person
            ){
                // this.person = new Person(realName, 'NY')
            }
}

const person = new Person('Tony', 'NY');
const ironman = new Hero('Ironman', 45, 'Tony', person);

console.log(ironman)