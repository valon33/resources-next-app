import { MongoClient } from "mongodb";
import { connectToDataBase } from "../../lib/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, link, logo, resource, shortDescription } = req.body;

        if (!name || !link || !logo || !resource || !shortDescription) {
            res.status(422).json({ msg: "Invalid Input!" });
            return;
        }

        const newResource = { name, link, logo, resource, shortDescription };

        const client = await connectToDataBase(res);
        const db = client.db();

        let result;
        try {
            result = await db.collection("resources").insertOne(newResource);
        } catch (error) {
            client.close();
            res.status(500).json({ message: "Storing resource failed!" });
            return;
        }

        client.close();

        res.status(200).json({
            msg: "Successfully added resource",
            data: result,
        });
    }
}
