// //JSON DATA FORMAT
// const user = {
//     name: "John",
//     age: 30,
//     married: true,
//     hobbies: ["music", "movies", "sports"],
//     address: {
//         street: "50 main st",
//         city: "Boston",
//         state: "MA"
//     }
// }
// //joining the data
// const jsonData = JSON.stringify(user);
// console.log(jsonData);
// console.log(JSON.parse(jsonData));

// note
// Khalid(MER) - MMK220905176; MMK221205178;
// Hossain(MER);- MMK221104840;
// Noman(MER);- MMK220904522;
// Kamal(MER);- MMK220904932;
// Shazzad(MER);- MMK220904219;
// Shaiful(MER);-MMK221005107;MMK221005166;MMK221005078;MMK221005073;
const doctors = [
    { name: "Khalid", id: 1 },
    { name: "Hossain", id: 2 },
    { name: "Noman", id: 3 },
    { name: "Kamal", id: 4 },
    { name: "Shazzad", id: 5 },
];
const docName = doctors.find((x) => {
    return x.name === "Khalid";
});
console.log(docName);

let NameOfDoctor = doctors.find(doctor => doctor.id === 1);
console.log(NameOfDoctor);

// key value pair
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number.forEach((value, index, x) => {
    console.log(typeof x);
    for (const pro in x) {
        console.log(`${pro}:${value}: ${x[pro]}: ${index}`);
        
    }
});