// let a: number = 1;
//
// console.log(a);
//
// const a: string = 'Anh Duy';
// const isCorrect: boolean = true;

const a: number[] = [1, 2, 3]

interface Person {
    id: number,
    name: string
}

// interface Employee  {
//     id: number,
//     name: string
//     salary: number
//     address: string
// }
interface Employee extends Person {
    salary: number
    address: string
}

const person: Person = {
    id: 1,
    name: 'Anh Duy',
}

const employees: Employee[] = [
    {
        id: 1,
        name: 'Tran Van Kieu',
        salary: 100000000,
        address: ""
    },
    {
        id: 0,
        name: "",
        salary: 0,
        address: ""
    }
]
console.log(person);

