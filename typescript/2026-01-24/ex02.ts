interface Employee {
    id: number,
    name: string
    salary: number
    active: boolean
}
const employees: Employee[] = [
    {
        id: 1,
        name: "Anh A",
        salary: 5000000000,
        active: true
    },
    {
        id: 2,
        name: "Anh B",
        salary: 9999999999,
        active: false
    },
    {
        id: 3,
        name: "Anh C",
        salary: 111111111111,
        active: true
    }
]

const findActivedEmployee: Employee[] = employees.filter((emp: Employee) => emp.active)
console.log(findActivedEmployee);

// find emplyee with id = 1
// @ts-ignore
const findEmployeeById: Employee | undefined = employees.find((emp: Employee) => emp.id === 1)
console.log(findEmployeeById);
