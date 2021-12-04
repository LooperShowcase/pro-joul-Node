const { Console } = require("console");
const fs = require("fs");
let data = fs.readFileSync("DB.json");
let users = JSON.parse(data);

console.log(users);

function createUser(id, name, city) {
  users[id] = {
    name,
    city,
  };
}
function deleteData(id) {
  delete users[id];
}
function readUser(id) {
  return users[id];
}

createUser(1, "joul ", "london");
createUser(2, "luoj ", "patata");
createUser(3, "someone", "somewhere");
createUser(4, "husam loopy", "england");

console.log(users);

function updateUser(id, name, city) {
  if (user[id] == undefined) {
    console.error("sorry not AVAILABLE try again");
  } else {
    users[id] = {
      name: name,
      city: city,
    };
  }
}

let dataToString = JSON.stringify(users);
fs.writeFileSync("DB.json", dataToString);
