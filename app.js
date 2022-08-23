import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

import "dotenv/config";

const app = express();

const config = {
    port: +process.env.PORT || 8000,
    mongodb: {
        uri: process.env.MONGODB_URI,
        username: process.env.MONGODB_USERNAME,
        password: process.env.MONGODB_PASSWORD,
    },
};
 
console.log("runnwing with follwing config");
console.log(config);

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
    .connect(config.mongodb.uri, {
        user: config.mongodb.username,
        pass: config.mongodb.password,
        retryWrites: true,
    })
    .then(() => app.listen(5000))
    .then(() => console.log("Connected TO Database and Listening TO Localhost 5000"))
    .catch((err) => console.log(err));

//----config


