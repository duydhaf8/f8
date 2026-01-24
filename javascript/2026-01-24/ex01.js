const a= {
    id: 1,
    name: "A",
    address: "HCM",
    girlFriend: {
        id: 1,
        name: "Tran Ha"
    }
}

// es6
const b = {
    ...a,
    ok: "ok"
}

// const b = { ...a }
//
// b.girlFriend.name = 'Ngoc'
//
console.log(a)
console.log(b)

// const b = JSON.stringify(a)
// b.name = 'B'

// const b = JSON.parse(JSON.stringify(a))
// b.name = 'B'

// console.log(a)
// console.log(b)

// es6

