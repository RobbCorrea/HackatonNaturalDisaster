const {connect} = require('mongoose');

const connectDB = async () => {
    try {
        await connect(`mongodb+srv://andres:${process.env.DB_PASSWORD}@ironhackcluster-fkeeh.gcp.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true});
        console.log('Base de datos conectada.');
    } catch(err) {
        console.error('Error en la base de datos', err);
    }
}

module.exports = connectDB;