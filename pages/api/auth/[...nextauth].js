import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { verifyPassword } from "../../../lib/auth";
import { connectToDataBase } from "../../../lib/db";

export default NextAuth({
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const client = await connectToDataBase();

                const usersCollection = client.db().collection("users");

                const user = await usersCollection.findOne({
                    email: credentials.email,
                });

                if (!user) {
                    client.close();
                    throw new Error("No user found!");
                }

                const isValid = await verifyPassword(
                    credentials.password,
                    user.password
                );

                if (!isValid) {
                    client.close();
                    throw new Error("Could not log you in!");
                }
                client.close();
                return { email: user.email };
            },
        }),
    ],
    secret: process.env.JWT_SECRET,
    session: {
        jwt: true,
    },
});
