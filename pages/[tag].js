import Head from "next/head";
import { useRouter } from "next/router";
// import { fetchByTagName } from "../lib/fetch";
import { resourcesGroup } from "../data/html";
import CardGrid from "../components/Card/CardGrid";
import styles from "../styles/Tag.module.css";

export async function fetchByTagName(resource) {
    // const response = await fetch(
    // "https://resources-next-app.vercel.app/api/getresources"
    // );
    const response = await fetch("/api/getresources");

    const data = await response.json();
    const cardsData = data.data;
    const filteredData = cardsData.filter((d) => d.resource === resource);

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
    }

    return filteredData;
}

const TagResources = ({ cards }) => {
    const router = useRouter();
    const { tag } = router.query;
    return (
        <>
            <Head>
                <title>{`Resource App | ${tag} resources`} </title>
                <meta name="description" content="Bookmark manager app" />
            </Head>
            <div className={styles.TagContainer}>
                <h2 className={styles.TagHeading}>
                    {`Resources for ${tag.toUpperCase()}`}
                </h2>
                <CardGrid cards={cards} />
            </div>
        </>
    );
};

export async function getServerSideProps({ params }) {
    const { tag } = params;
    const cardsData = await fetchByTagName(tag);

    return {
        props: { cards: cardsData },
    };
}

export default TagResources;
