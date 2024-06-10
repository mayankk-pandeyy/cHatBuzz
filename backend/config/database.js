

const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = async () => {
    const connection = await mongoose.connect(process.env.DATABASE_URL, {
        useUnifiedTopology : true,
        useNewUrlParser : true
    })
    .then(() => console.log("Database Connected SUccessfully"))
    .catch((error) => {
        console.log(error);
        console.log("There is Some Error in connecting the DataBase");
        process.exit(1);
    })
}

module.exports = dbConnect;