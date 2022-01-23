import { connectToDataBase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

async function handler(req, res) {
    if (req.method !== "POST") {
        return;
    }
    const { email, password } = req.body;

    if (
        !email ||
        !email.includes("@") ||
        !password ||
        password.trim().length < 8
    ) {
        res.status(422).json({
            message:
                "Invalid input - password should also be at least 8 characters long.",
        });
        return;
    }

    const client = await connectToDataBase(res);

    const db = client.db();
    const existingUser = await db.collection("users").findOne({ email: email });

    if (existingUser) {
        res.status(422).json({ message: "User exists already!" });
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection("users").insertOne({
        email: email,
        password: hashedPassword,
    });

    res.status(201).json({ message: "Created user!" });
    client.close();
}

export default handler;
