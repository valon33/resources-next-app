import Head from "next/head";
import styles from "../styles/Home.module.css";
import CardGrid from "../components/Card/CardGrid";
import { resourcesGroup } from "../data/html";
import { useSession } from "next-auth/react";
import { fetchAll } from "../lib/fetch";

function sorting(data, resource) {
    return data.filter((d) => d.resource === resource);
}

export default function Home(props) {
    const { data: session, status } = useSession();

    return (
        <div className={styles.container}>
            <Head>
                <title>Resource App | Bookmark manager</title>
                <meta name="description" content="Bookmark manager app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {resourcesGroup.slice(0, 5).map((resourceGroup) => {
                    return (
                        <section
                            className={styles.SectionCards}
                            key={resourceGroup}
                        >
                            <div className={styles.cardGridSectionContainer}>
                                <h2 className={styles.SectionHeading}>
                                    {`Resources for ${resourceGroup.toUpperCase()}`}
                                </h2>
                                <div className={styles.Cards}>
                                    <CardGrid
                                        cards={sorting(
                                            props.cards,
                                            resourceGroup
                                        ).slice(0, 10)}
                                    />
                                </div>
                            </div>
                        </section>
                    );
                })}

            </main>

            {/* <footer className={styles.footer}>Footer</footer> */}
        </div>
    );
}

export async function getStaticProps(context) {
    const cardsData = await fetchAll();
    return {
        props: { cards: cardsData }
    };
}
