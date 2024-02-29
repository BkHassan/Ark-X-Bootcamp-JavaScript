const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// * creating user schema
const usersSchema = mongoose.Schema({
  username: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String },
});

// * creating user collection(model)
const User = mongoose.model("User", usersSchema);

// function insertion(user) {
//   try {
//     User.create(user);
//   } catch (error) {
//     console.log("the user didn't inserted");
//   }
// }
// insertion({
//   username: "oussama",
//   age: 21,
//   email: "ouss@gmail.com"
// });

async function retrive(username) {
    const user = await User.findOne({ username });
      console.log("user retrivesuccessfully", user);
  }
retrive("oussama");
