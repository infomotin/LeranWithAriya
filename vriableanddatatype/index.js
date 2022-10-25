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
// // Noman(MER);- MMK220904522;
// // Kamal(MER);- MMK220904932;
// // Shazzad(MER);- MMK220904219;
// // Shaiful(MER);-MMK221005107;MMK221005166;MMK221005078;MMK221005073;
// const doctors = [
//     { name: "Khalid", id: 1 },
//     { name: "Hossain", id: 2 },
//     { name: "Noman", id: 3 },
//     { name: "Kamal", id: 4 },
//     { name: "Shazzad", id: 5 },
// ];
// const docName = doctors.find((x) => {
//     return x.name === "Khalid";
// });
// console.log(docName);

// let NameOfDoctor = doctors.find(doctor => doctor.id === 1);
// console.log(NameOfDoctor);

// // key value pair
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// number.forEach((value, index, x) => {
//     console.log(typeof x);
//     for (const pro in x) {
//         console.log(`${pro}:${value}: ${x[pro]}: ${index}`);

//     }
// });

// const mapExample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const map = mapExample.map((mapExample) => {
//   return mapExample * 2;
// });

// // console.log(map);

// const DoctorAdderesForMap = [
//     { name: "Khalid", id: 1, address: "Dhaka" },
//     { name: "Hossain", id: 2, address: "Dhaka" },
//     { name: "Noman", id: 3, address: "Dhaka" },
//     { name: "Kamal", id: 4, address: "Dhaka" },
//     { name: "Shazzad", id: 5, address: "Dhaka" },

// ];

// const doctorName = DoctorAdderesForMap.map((doctor) => {
//     doctor.name === "Khalid" ? (doctor.name = "Dr. "+doctor.name) : doctor.name; //ternary operator
//     return doctor["name"];

// });
// console.log(doctorName);

// //filter example on Array
// const filterExample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filter = filterExample.filter((filterExample) => {
//     return filterExample > 5;
// });
// console.log(filter);

// // weak map and weak set
// import addNumber from "./main";
// // const ws = new WeakSet();
// // const object1 = {};
// // const object2 = {};

// // ws.add(object1);
// // ws.add(object2);

// // console.log(ws.has(object1));

// console.log(addNumber(2, 3));

//pad seart and trim pad end
// let minute = '04';
// let second = '09';
// let hour = '8';

// let TremName = 'Khalid';
// TremName = TremName.trim();
// console.log(hour.padStart(2));
// console.log(minute.padEnd(2, '0'));
// console.log(TremName);
// let pi = 3.141592653589793;
// console.log(pi.toFixed(4));
// const divided = (a,b) => {
//     if(b === 0) {
//         throw new SyntaxError('Divided by zero');
//         // throw new Error('Divided by zero');
//     }
//     return a / b;
// }

// try {console.log(divided(5,0));}
// catch (error) {
//     console.log(error[0]);
//     console.log(error.message);
//     console.log(error.name);
//     console.log(error.stack);
//     console.log(error instanceof SyntaxError);
//     console.log(error instanceof Error);

// }
// finally {
//     console.log('Finally block');
//  }

//Buid a function that return objct
// function user(name,age) {
//   const userObject = {
//       name,
//       age,
        
//     walk: function () {
//       console.log("walk");
//     },
//   };
//   return userObject;
// }

// const user1 = user('Khalid', 30);
// const user2 = user('Hossain', 30);

// //print Console
// console.log(user1);
// console.log(user2);


function User(name, age) {
  this.name = name;
  this.age = age;
  this.walk = function () {
    console.log("walk");
  };
}
const user1 = new User("Khalid", 30);
console.log(user1);