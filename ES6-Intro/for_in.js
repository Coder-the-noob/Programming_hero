const user = {
  name: "Moin",
  age: 21,
  country: "BD"
};

for (let key in user) {
  console.log(key, ":", user[key]);
}
