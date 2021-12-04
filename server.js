const fs = requir("fs");
let data = fs.readFilSync("DB.json");
let users = JSON.parse(data);

console.log(users);


function createUser(id,name,city) {
    users[id] {
        name,
        city,
    }
}
createUser(1,"joul","london",);
createUser(2,"husam loopy","england",);
