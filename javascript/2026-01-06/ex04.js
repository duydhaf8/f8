function getName() {
    return this.firstname + " " + this.lastname
}

const duy = {
    firstname: "Duy",
    lastname: "Duong",
    age: 20,
    address: "184 Tran Van Kieu - HCM",
    getName: function () {
        return this.firstname + " " + this.lastname
    },
    girlFriend: {
        firstname: "An",
        lastname: "Tuyet",
        age: 20,
        address: "184 Tran Van Kieu - HCM",
        getName: function () {
            return this.firstname + " " + this.lastname
        }
    }

}
console.log(duy.getName());
console.log(duy.girlFriend.getName())
// console.log(duy.address);
// // cách 2
// console.log(duy["address"]);