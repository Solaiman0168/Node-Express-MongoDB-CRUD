const mongoose = require('mongoose');

/**
 * Connects to MongoDB database using the CONNECTION_STRING environment variable
 * @returns {Promise<void>}
 */
const dbConnect = async() => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Database connected: ${connect.connection.host}, ${connect.connection.name}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = dbConnect;