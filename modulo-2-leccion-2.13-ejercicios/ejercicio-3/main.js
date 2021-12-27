"use strict";

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

const getWelcome = users.map((item1) => {
  if (item1.isPremium) {
    console.log(`Bienvenida ${item1.name}, gracias por confiar en nosotros`);
  } else {
    console.log(`Bienvenida ${item1.name}`);
  }
});
