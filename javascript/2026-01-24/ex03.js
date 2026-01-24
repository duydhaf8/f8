// const doSth = (object) => {
//     // const id = object.id;
//     // const name = object.name;
//
//     // cách viết 2
//     const {id, name} = object;
//     // có thể truyền vào hàm luôn
//     // const doSth = ({id, name}) => {}
//     console.log(id, name);
// }
//
// doSth({
//     id: 1,
//     name: 'test'
// })

const doSth = ([a, b, c]) => {
    console.log(a, b, c);
}
doSth([2, 3, 4])