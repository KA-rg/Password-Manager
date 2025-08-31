const initData = require("./data");

main()
.then(() => {
  console.log("connection to DB");
})
.catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect("mongodb://localhost:");
}



initDB();