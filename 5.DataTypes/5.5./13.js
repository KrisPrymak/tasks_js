let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

const groupById = (users) => {
  return users.reduce((arr, user) => {
    arr[user.id] = user;
    return arr;
  });
};

let usersById = groupById(users);
console.log(usersById);
