const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

console.log(person);

console.log(person.name);

console.log(person["age"]);

person.country = "USA"; // to add a new property (dot notation)
console.log(person);

person.age = 30;
console.log(person);

delete person.city; // deletes a property (obviously)
console.log(person);

for (const key in person) {  // key is used to identify a value in an object
    console.log("key =", key);
    console.log("value =", person[key]);
}