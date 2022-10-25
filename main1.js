console.log("Before require");

// function fatchUserData() {
//     setTimeout(function () {
//         console.log("Data fetched");
//         return {
//             name: "Max",
//             age: 30
//         }
    
//      }, 1000);
// }
// const userData = fatchUserData();
// console.log(userData);

const UserFatchData = () => {
    setTimeout(() => {
        console.log("Data fetched");
        return {
            name: "Max",
            age: 30
        }
    
     }, 1000);
}
const userData = UserFatchData();
console.log("After require");