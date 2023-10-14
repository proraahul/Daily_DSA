// Multiplication Of Table

function multiOfaTable(num, range) {
  for (let i = 1; i <= range; i++) {
    let res = num * i;

    console.log(num + "*" + i + "= " + res);
  }
}

multiOfaTable(3, 8);
