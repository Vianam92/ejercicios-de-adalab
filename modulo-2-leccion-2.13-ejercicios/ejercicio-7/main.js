"use strict";

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const findUser = users
.find(item => {if(item.pin === 5232){console.log(item.name);}});

const index = users.findIndex(
  item=>item.pin === 5232
)

users.splice(index,1);

console.log(users);
