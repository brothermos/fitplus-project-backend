const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("../routes/blog-routes");
const router = require("../routes/user-routes");
const cors = require("cors");
const config = require("../config");

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

module.exports = app
