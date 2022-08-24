import "dotenv/config";

const config = {
    isVercel: process.env.IS_VERCEL || false,
    port: +process.env.PORT || 8000,
    mongodb: {
        uri: process.env.MONGODB_URI,
        username: process.env.MONGODB_USERNAME,
        password: process.env.MONGODB_PASSWORD,
        dbName: process.env.MONGODB_DATABASE,
    },
};

export default config;
