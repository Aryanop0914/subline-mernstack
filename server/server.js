const app = require("./index");
const connectDB = require("./DB/connectDB");
try {
  connectDB();
} catch (error) {
  console.log("Something Went Wrong While connecting DB", error);
}
app.listen(process.env.PORT, () => {
  console.log(`⚙️  Server Running on port ${process.env.PORT}`);
});
