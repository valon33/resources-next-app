import Head from "next/head";
import { useRouter } from "next/router";
import { fetchByTagName } from "../lib/fetch";
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
            <div className={styles.tagContainer}>
                <h2 className={styles.tagHeading}>
                    {`Resources for ${tag.toUpperCase()}`}
                </h2>
                <CardGrid cards={cards} />
            </div>
        </>
    );
};

export async function getServerSideProps(context) {
    const { tag } = context.params;
    const host = context.req.headers.host;
    const cardsData = await fetchByTagName(tag, host);

    return {
        props: { cards: cardsData },
    };
}

export default TagResources;
