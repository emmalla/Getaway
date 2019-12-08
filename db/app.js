const Express = require("express");
const BodyParser = require("body-parser");
const Mongoose = require("mongoose");

var app = Express();

Mongoose.connect("mongodb+srv://ejaysing:cs411@cs411-mw1ai.mongodb.net/test?retryWrites=true&w=majority");

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.listen(3002, () => {
    console.log("Listening at :3002...");
});

const User = Mongoose.model("person", {
  name: String,
  email: String,
  location1: Object,
  location2: Object,
  location3: Object,
  location4: Object,
  location5: Object
});

app.post("/person", async (request, response, next) => {
  try {
    var person = new User(request.body);
    var result = await person.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/people", async (request, response, next) => {
  try {
    var result = await User.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/person/:id", async (request, response, next) => {
  try {
    var person = await User.findById(request.params.id).exec();
    response.send(person);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/person/:id", async (request, response, next) => {
  try {
    var person = await User.findById(request.params.id).exec();
    person.set(request.body);
    var result = await person.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/person/:id", async (request, response, next) => {
  try {
    var result = await User.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
