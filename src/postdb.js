//postdb.js file
const mongoose = require("mongoose");
async function main() {
  await mongoose.connect(
    "mongodb://127.0.0.1:27017/myblog",
    { useNewUrlParser: true }
  );
  console.log("post connected");
}
main()
const postSchema = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
    thumbnail:String,
    date:Number,
    like:Number,
    likedby:[String]
    });
  
    

const PosT = mongoose.model("post", postSchema);
module.exports = PosT

//postdb.js
// const mongoose = require("mongoose");

// // Use an async function to connect
// async function main() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//   }
// }

// main();

// // Schema
// const postSchema = new mongoose.Schema({
//   author: String,
//   title: String,
//   content: String,
//   thumbnail: String,
//   date: Number,
//   like: Number,
//   likedby: [String]
// });

// // Model
// const PosT = mongoose.model("post", postSchema);

// module.exports = PosT;
