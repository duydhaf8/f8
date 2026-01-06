const person = {
    name: "Duy Duong",
    age: 20,
    address: "HCM",
    self: function () {
        return this;
    }
}
person.self().self().self().name = 'Dong Vu'
console.log(person.self());

// const name = person.name;
// cách 2
const {name} = person;
console.log(name);
