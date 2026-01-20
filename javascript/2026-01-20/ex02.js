const users = [
    { id: 1, account: "admin", password: "123456", role: "admin", isActive: true },
    { id: 2, account: "user01", password: "abc123", role: "user", isActive: true },
    { id: 3, account: "user02", password: "111111", role: "user", isActive: false },
    { id: 4, account: "teacher", password: "teach2025", role: "teacher", isActive: true }
]


/*
* account / pass
*
* if it's correct and active -> log "login ok"
* if account is correct and active is false ->  user have been deleted
* if incorrect -> "account | pass is correct"
* */

function login(account, password) {
    const user = users.find(user => user.account === account && user.password === password);

    if (!user) {
        return "account | pass is NOT correct";
    }

    // tìm thấy nhưng bị khóa
    if (user.isActive === false) {
        return "user have been deleted";

    }

    // đúng account, đúng pass, còn active
    return "login ok";
}
console.log(login("admin", "123456"))
console.log(login("user01", "abc12356"))
console.log(login("user02", "111111"))