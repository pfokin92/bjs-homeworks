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
  const weaponsMoreDurability = weapons.filter(
    (weapon) => weapon.durability > durability
  );
  return weaponsMoreDurability.length;
}

function hasReliableWeapons(durability) {
  const checkMoreDurability = weapons.some(
    (weapon) => weapon.durability > durability
  );
  if (checkMoreDurability) {
    return `Есть оружие с большей прочностью, чем ${durability}`;
  }
  return `Нет оружия с большей прочностью, чем ${durability}`;
}

function getReliableWeaponsNames(durability) {
  const weaponsMoreDurability = weapons.filter(
    (weapon) => weapon.durability > durability
  );
  return weaponsMoreDurability.map((weapon) => weapon.name);
}

function getTotalDamage() {
  const weaponsAttackArray = weapons.map((weapon) => weapon.attack);
  return weaponsAttackArray.reduce(function (sum, attack) {
    return sum + attack;
  }, 0);
}

console.log(weapons);
console.log(getNames());
console.log(getCountReliableWeapons(250));
console.log(hasReliableWeapons(200));
console.log(getReliableWeaponsNames(200));
console.log(getTotalDamage());
/*Необязательно*/
function getValuestCountToSumValues(array, checkSum) {
  let sum = 0
  const newArray = array.map(function (item) {
    sum = sum + item;
    if (sum < checkSum) {
      return item;
    }
  }).filter(item => item != undefined)
  return newArray.length;
}

const array = [1, 2, 3, 5, 2, 7, 3, 5, 2];
console.log(getValuestCountToSumValues(array, 10));
console.log(getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 20));

function getValuestCountToSumValues(array, checkSum) {
  let sum = 0
  const newArray = array.map(function (item) {
    sum = sum + item;
    if (sum < checkSum) {
      return item;
    }
  }).filter(item => item != undefined)
  return newArray.length;
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
  let args = [];
  if (arguments.length > 1) {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === "number") {
        args[i] = arguments[i];
      } else if (typeof arguments[i] === "object") {
        let lengthArgs = args.length;
        for (let j = 0; j < arguments[i].length; j++) {
          args[j + lengthArgs] = arguments[i][j];
        }
      }
    }
  } else if (typeof arguments[0] === "number" && arguments.length === 1) {
    args[0] = arguments[0];
  } else {
    args = arguments[0];
  }
  return args.reduce((sum, arg) => {
    return (sum += arg);
  }, 0);
}

function compareArrays(a1, a2) {
  return a1.length == a2.length && a1.every((v, i) => v === a2[i]);
}

function memorize(fn, limit) {
  // Вопрос в этой части. Правильно ли я понял что при вызове mSum я эти результары должен получить здесь.
  // 
  // args = [8, 1, 2];
  return fn;
}
const mSum = memorize(sum, 5);

console.log(typeof mSum)

console.log(mSum([8, 1, 2]))

console.log(sum(8));
console.log(sum([8, 1, 2], [8, 1, 2]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));