const mongoose = require("mongoose")
const SERVER_URI = `mongodb+srv://nurainbamidelejnr:uqBCFifmh5VAKVmv@cluster0.c1jpec1.mongodb.net/Body`
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false)
        const connect = await mongoose.connect(SERVER_URI)
        // const connect = await mongoose.connect(process.env.SERVER_URI)
        console.log(`Database connected succesfully \n ${connect.connection.host}`)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB