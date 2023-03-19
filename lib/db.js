import { MongoClient } from "mongodb";

export async function connectToDataBase(res) {
    const mongoConnection = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USER}:${process.env.NEXT_PUBLIC_MONGODB_PASSWORD}@{process.env.NEXT_PUBLIC_MONGODB_CLUSTER}.zsi3t.mongodb.net/${process.env.NEXT_PUBLIC_MONGODB_DATABASE}?retryWrites=true&w=majority`;

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
