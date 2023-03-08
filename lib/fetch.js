import { signIn } from "next-auth/react";

export async function fetchAll(host) {
    let httProtocol;
    if (host.startsWith("localhost")) {
        httProtocol = "http";
    } else {
        httProtocol = "https";
    }

    const response = await fetch(`${httProtocol}://${host}/api/getresources`);

    const data = await response.json();
    const cardsData = data.data;

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
    }

    return cardsData;
}

export async function fetchByTagName(resource, host) {
    let httProtocol;
    if (host.startsWith("localhost")) {
        httProtocol = "http";
    } else {
        httProtocol = "https";
    }
    const response = await fetch(`${httProtocol}://${host}/api/getresources`);

    const data = await response.json();
    const cardsData = data.data;
    const filteredData = cardsData.filter((d) => d.resource === resource);

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
    }

    return filteredData;
}

export async function loginUser(enteredEmail, enteredPassword) {
    try {
        await signIn("credentials", {
            redirect: false,
            email: enteredEmail,
            password: enteredPassword,
        });
    } catch (error) {
        console.log(error);
    }
}
export async function signUpUser(enteredEmail, enteredPassword) {
    try {
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ enteredEmail, enteredPassword }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Something went wrong!");
        }

        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function addNewResource(resourceDetails) {
    await fetch("/api/add", {
        method: "POST",
        body: JSON.stringify(resourceDetails),
        headers: {
            "Content-Type": "application/json",
        },
    });
}
