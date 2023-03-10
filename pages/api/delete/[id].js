import { getSession } from "next-auth/react";
import { connectToDataBase } from "../../../lib/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method !== "DELETE") {
        return;
    }
    const session = await getSession({ req });
    const { id } = req.query;

    const client = await connectToDataBase(res);
    const db = client.db();
    await db
        .collection("resources")
        .find({ _id: new ObjectId(id) })
        .toArray();

    if (!session) {
        res.status(401).json({
            message: "Unauth­orized - User not loged in !",
        });
        client.close();
        return;
    }

    await db
        .collection("resources")
        .findOneAndDelete({ _id: new ObjectId(id) });

    res.status(204).send();
    client.close();
}
