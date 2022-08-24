import express from "express";
import mongoose from "mongoose";
import config from "./config";

const app = express();

console.log("runnwing with follwing config");
console.log(config);

// middleware

const boot = async () => {
    await mongoose
        .connect(config.mongodb.uri, {
            user: config.mongodb.username,
            pass: config.mongodb.password,
            dbName: config.mongodb.dbName,
            retryWrites: true,
        })
        .then(() => app.listen(5000))
        .then(() => console.log("Connected TO Database and Listening TO Localhost 5000"))
        .catch((err) => console.log(err));
};

boot();

//----config
