export async function fetchAll(host) {
    let httProtocol;
    if (host.startsWith("localhost")) {
        console.log("hahah its true");
        httProtocol = "http";
    } else {
        httProtocol = "https";
    }

    const response = await fetch(`${httProtocol}://${host}/api/getresources`);
    // const response = await fetch("http://localhost:3000/api/getresources");

    const data = await response.json();
    const cardsData = data.data;

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
    }

    return cardsData;
}

export async function fetchByTagName(resource) {
    const response = await fetch(
        "https://resources-next-app.vercel.app/api/getresources"
    );
    // const response = await fetch("http://localhost:3000/api/getresources");

    const data = await response.json();
    const cardsData = data.data;
    const filteredData = cardsData.filter((d) => d.resource === resource);

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
    }

    return filteredData;
}
