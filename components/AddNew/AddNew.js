import { useState } from "react";
import styles from "./AddNew.module.css";
import { resourcesGroup } from "../../data/html";

async function addNewResource(resourceDetails) {
    const response = await fetch("/api/add", {
        method: "POST",
        body: JSON.stringify(resourceDetails),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

const AddNew = () => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [logo, setLogo] = useState("");
    const [resource, setResource] = useState("html");
    const [shortDescription, setShortDescription] = useState("");

    console.log("name: ", name);
    console.log("link: ", link);
    console.log("logo: ", logo);
    console.log("resource: ", resource);
    console.log("shortDescription: ", shortDescription);

    async function addResource(event) {
        event.preventDefault();

        await addNewResource({
            name,
            link,
            logo,
            resource,
            shortDescription,
        });
        setName("");
        setLink("");
        setLogo("");
        setResource("");
        setShortDescription("");
    }

    return (
        <div className={styles.FormContainer}>
            <form className={styles.Form} onSubmit={addResource}>
                <div className={styles.FormGroup}>
                    <label htmlFor="name">Name of the resource:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name of the resource"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className={styles.FormGroup}>
                    <label htmlFor="logo">Add logo url:</label>
                    <input
                        type="url"
                        id="logo"
                        name="logo"
                        placeholder="Logo url..."
                        value={logo}
                        onChange={(e) => setLogo(e.target.value)}
                    />
                </div>

                <div className={styles.FormGroup}>
                    <label htmlFor="link">Add resource url:</label>
                    <input
                        type="url"
                        id="link"
                        name="link"
                        placeholder="Resource url..."
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>

                <div className={styles.FormGroup}>
                    <label htmlFor="resource">Resource:</label>
                    <select
                        id="resource"
                        name="resource"
                        value={resource}
                        onChange={(e) => setResource(e.target.value)}
                        // defaultValue={"html"}
                    >
                        {resourcesGroup.map((resource) => {
                            return (
                                <option value={resource} key={resource}>
                                    {resource.charAt(0).toUpperCase() +
                                        resource.slice(1)}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className={styles.FormGroup}>
                    <label htmlFor="shortDescription">Short Description:</label>
                    <textarea
                        id="shortDescription"
                        name="shortDescription"
                        rows={4}
                        cols={50}
                        placeholder="short description for the resource"
                        value={shortDescription}
                        onChange={(e) => setShortDescription(e.target.value)}
                    />
                </div>

                <button className={styles.Button}>Submit</button>
            </form>
        </div>
    );
};

export default AddNew;
