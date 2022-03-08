const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("Please enter password");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://zillurclub:${password}@cluster0.bo37i.mongodb.net/phonebookDB?retryWrites=true&w=majority`;

const personSchema = new mongoose.Schema({
  name: String,
  number: Number,
});
const Persons = mongoose.model("Persons", personSchema);

const person = new Persons({
  name: process.argv[3],
  number: process.argv[4],
});

person.save().then((res) => {
  console.log(`added ${person.name} number ${person.number}`);
  mongoose.connection.close();
});

if (!process.argv[3] && !process.argv[4]) {
  Persons.find({}).then((results) => {
    results.forEach((res) => {
      console.log(res);
      mongoose.connection.close();
    });
  });
}
mongoose.connect(url);
