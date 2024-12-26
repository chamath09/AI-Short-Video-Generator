/** @type {import("drizzle-kit").Config}*/
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url:'postgresql://ai-short-video-generator_owner:dCJq0y5WRQir@ep-weathered-bar-a57hmrxv.us-east-2.aws.neon.tech/ai-short-video-generator?sslmode=require',
    }
};