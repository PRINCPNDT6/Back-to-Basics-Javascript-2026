function greet(city) {
  console.log(`Hello ${this.name} from ${city} and rollNO ${this.roll}`);
}

const user1 = { name: "prishu", roll: 317 };
const user2 = { name: "prince", roll:379 };

greet.call(user1, "Meerut");    
greet.call(user2, "Mumbai");   



