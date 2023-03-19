import { connectToDataBase } from "../../lib/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const client = await connectToDataBase(res);

        const db = client.db();

        let result;
        try {
            result = await db.collection("resources").find({}).toArray();
        } catch (error) {
            client.close();
            res.status(500).json({
                message: "There is no resource in this collection!😜",
            });
            return;
        }

        client.close();

        res.status(200).json({
            msg: "Successfully found resources",
            data: result,
        });
    }
}
