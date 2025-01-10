let mongoose = require("mongoose")

const MONGO_URL = "mongodb://127.0.0.1:27017/INoteDB";

main().then((res) => {
    console.log("DB is connected..")
})
.catch((res) => {
    console.log("DB connection failed..");
})

async function main(){
    return await mongoose.connect(MONGO_URL);
}

module.exports = main