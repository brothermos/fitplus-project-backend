import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
import config from "./config";

const app = express();

if (config.isVercel) {
    app.use(async (req, res, next) => {
        await mongoose.connect(config.mongodb.uri, {
            user: config.mongodb.username,
            pass: config.mongodb.password,
            dbName: config.mongodb.dbName,
            retryWrites: true,
        });
        return next();
    });
}

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

