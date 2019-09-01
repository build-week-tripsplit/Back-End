import faker from "faker";
import moment from "moment";

console.log(moment("2019-07-15T05:00:00.000Z").format("MMMM Do YYYY"));

// function generateFakeTrip1(sd, ed) {
//   let trip = {
//     title: "",
//     destription: "",
//     location: faker.fake("{{address.city}}, {{address.state}}"),
//     start_date: sd,
//     end_date: ed,
//     complete: true
//   };
//   return trip;
// }

// function generateFakeTrip2(sd, ed) {
//   let trip = {
//     title: "",
//     destription: "",
//     location: faker.fake("{{address.city}}, {{address.country}}"),
//     start_date: sd,
//     end_date: ed,
//     complete: false
//   };

//   return trip;
// }

// let fakerDate = faker.date.recent();
// let date = moment(fakerDate).format("YYYY-MM-D");

// console.log(date);

// var myDate = new Date(date);
// var myEpoch = myDate.getTime() / 1000.0;

// console.log(myEpoch);

// console.log(259200 - 864000);

// let fakeTrips = [];

// for (let i = 0; i < 1000; i++) {
//   if (i % 2 === 0) {
//     let recentDate = faker.date.recent();
//     let date = new Date(moment(recentDate).format("YYYY-MM-D"));
//     let sd = date.getTime() / 1000.0;
//     let ed = sd + 432000;

//     fakeTrips.push(generateFakeTrip1(sd, ed));
//   } else {
//     let soonDate = faker.date.future(Math.random());
//     let date = new Date(moment(soonDate).format("YYYY-MM-D"));
//     let sd = date.getTime() / 1000.0;
//     let ed = sd + 604800;

//     fakeTrips.push(generateFakeTrip2(sd, ed));
//   }
// }

// console.log(fakeTrips);
