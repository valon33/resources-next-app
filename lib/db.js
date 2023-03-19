import { MongoClient } from "mongodb";

export async function connectToDataBase(res) {
    const mongoConnection = process.env.NEXT_PUBLIC_MONGODB_URL;
    try {
        return await MongoClient.connect(mongoConnection);
    } catch (error) {
        if (res) {
            res.status(500).json({
                message: "Could not connect to database.",
                err: error,
            });
            return;
        } else {
            throw new Error("Could not connect to database.", error);
        }
    }
}
