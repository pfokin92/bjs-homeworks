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
  /*const weaponsMoreDurability = weapons.filter(
    (weapon) => weapon.durability > durability
  );*/
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

function sum() {
  sleep(500);
  const args = arguments[0];
  return args.reduce((sum, arg) => sum += arg, 0);
}

function compareArrays(a1, a2) {
  return a1.length == a2.length && a1.every((v, i) => v === a2[i]);
}

let memory = [];



function getMemorySum() {
  let arg = [];
  let cell = {};
  let result;
  if (arguments.length > 1) {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === "number") {
        arg[i] = arguments[i];
      } else if (typeof arguments[i] === "object") {
        let lengthArgs = arg.length;
        for (let j = 0; j < arguments[i].length; j++) {
          arg[j + lengthArgs] = arguments[i][j];
        }
      }
    }
  } else if (typeof arguments[0] === "number" && arguments.length === 1) {
    arg[0] = arguments[0];
  } else {
    arg = arguments[0];
  }
  if (memory.some(cell => compareArrays(arg, cell.args))) {
    return memory.find(cell => compareArrays(arg, cell.args)).result;
  } else {
    result = sum(arg);
    cell.args = arg;
    cell.result = result;
    memory.push(cell);
  }
  //console.log(memory);

  return cell.result;
}


function memorize(fn, limit) {
  if (limit < memory.length) {
    memory.shift()
  }
  return getMemorySum;
}


const mSum = memorize(sum, 5);

console.log(typeof mSum)


console.log(mSum([8, 1, 2]))
console.log(mSum([8, 1, 3]))
console.log(mSum([8, 1, 2]))
console.log(mSum([8, 1, 4]))
console.log(mSum([8, 1, 5]))
console.log(mSum([8, 1, 4]))

//console.log(sum(8));
//console.log(sum([8, 1, 2], [8, 1, 2]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));