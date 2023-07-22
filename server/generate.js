var faker = require('faker');

var database = { characters:[] };

for (let i = 0; i < 5; i++) {
    database.characters.push({
        id: i,
        name: "hello world",
        status: faker.lorem.words(),
        species: faker.lorem.words(),
        gender: faker.lorem.words(),
        origin: faker.lorem.words(),
        image: faker.lorem.words()
    });
    
}

console.log(JSON.stringify(database));
/* var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); */