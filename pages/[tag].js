import Head from "next/head";
import { useRouter } from "next/router";
import { fetchByTagName } from "../lib/fetch";
import { resourcesGroup } from "../data/html";
import CardGrid from "../components/Card/CardGrid";
import styles from "../styles/Tag.module.css";

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
