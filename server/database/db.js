import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-ngrfukg-shard-00-00.wpo0p36.mongodb.net:27017,ac-ngrfukg-shard-00-01.wpo0p36.mongodb.net:27017,ac-ngrfukg-shard-00-02.wpo0p36.mongodb.net:27017/?ssl=true&replicaSet=atlas-5gp6xh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=whatsapp`;

    try {
        await mongoose.connect(URL,{ useUnifiedTopology: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error database: ', error.message);
    }
};

export default Connection;
