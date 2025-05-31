const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://<sangawatjayram>:<Jayram9421>@project.wxeuz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB");
    } catch (e) {
        console.error("❌ Connection failed:", e.message);
    } finally {
        await client.close();
    }
}

run();
