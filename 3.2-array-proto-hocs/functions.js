/*==============ДЗ№1===============*/
console.clear();
const weapons = [
  new Knife(),
  new Staff(),
  new Axe(),
  new StormStaff(),
  new LongBow(),
  new Bow(),
];

function getNames() {
  return weapons.map((weapon) => weapon.name);
}

function getCountReliableWeapons(durability) {
  return weapons.filter((weapon) => weapon.durability > durability).length;
}

function hasReliableWeapons(durability) {
  return weapons.some((weapon) => weapon.durability > durability);
}

function getReliableWeaponsNames(durability) {
  const weaponsMoreDurability = weapons.filter(
    (weapon) => weapon.durability > durability
  );
  return weapons.filter(
    (weapon) => weapon.durability > durability
  ).map((weapon) => weapon.name);
}

function getTotalDamage() {
  return weapons.map((weapon) => weapon.attack).reduce((sum, attack) => sum + attack, 0);
}

console.log(weapons);
console.log(getNames());
console.log(getCountReliableWeapons(250));
console.log(hasReliableWeapons(200));
console.log(getReliableWeaponsNames(200));
console.log(getTotalDamage());

/*Необязательно*/
function getValuestCountToSumValues(array, checkSum) {
  let count = 1;
  const sum = array.reduce((sum, item, index) => {
    sum = sum - item;
    if (sum > 0) {
      count++;
      return sum;
    }
  }, checkSum);
  return count;
}

const array = [1, 2, 3, 5, 2, 7, 3, 5, 2];
console.log(getValuestCountToSumValues(array, 10));
console.log(getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 20));

/*==============ДЗ№2===============*/
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...thisArgs) {
  sleep(500);
  return thisArgs.reduce((sum, arg) => sum += arg, 0);
}

function compareArrays(a1, a2) {
  return a1.length == a2.length && a1.every((v, i) => v === a2[i]);
}
// function getMemory(...thisArgs) {
//   let cell = {};
//   const find = memory.find(element => compareArrays(element.args, thisArgs));
//   if (find===undefined){
//       cell.args = thisArgs;
//       cell.result = fn (thisArgs)
//       memory.push(cell);
//   }

// }


function memorize(fn, limit) {
  const memory = [];

  return function (...thisArgs) {
    let cell = {};
    let find = memory.find(element => compareArrays(element.args, thisArgs));
    if (find === undefined) {
      cell.args = thisArgs;
      cell.result = fn(...thisArgs)
      if (memory.length < limit) {
        memory.push(cell);
      }
      find = cell
    };
    return find.result
  }
}


const mSum = memorize(sum, 5);


console.log(sum(2, 3, 4))



console.log(mSum(8, 1, 2))
console.log(mSum(8, 1, 3))
console.log(mSum(8, 1, 2))
console.log(mSum(8, 1, 4))
console.log(mSum(8, 1, 5))
console.log(mSum(8, 1, 4))
console.log(mSum(8, 1, 6))

//console.log(sum(8));
//console.log(sum([8, 1, 2], [8, 1, 2]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));