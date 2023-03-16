import Head from "next/head";
import styles from "../styles/Home.module.css";
import CardGrid from "../components/Card/CardGrid";
import { resourcesGroup } from "../data/html";
import { connectToDataBase } from "../lib/db";

function sorting(data, resource) {
  return data.filter((d) => d.resource === resource);
}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resource App | Bookmark manager</title>
        <meta name="description" content="Bookmark manager app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        {resourcesGroup.slice(0, 5).map((resourceGroup) => {
          return (
            <section className={styles.sectionCards} key={resourceGroup}>
              <div className={styles.cardGridSectionContainer}>
                <h2 className={styles.sectionHeading}>
                  {`Resources for ${resourceGroup.toUpperCase()}`}
                </h2>
                <div className={styles.cards}>
                  <CardGrid
                    cards={sorting(props.cards, resourceGroup).slice(0, 10)}
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

// export async function getServerSideProps(context) {
//     const host = context.req.headers.host;
//     const cardsData = await fetchAll(host);
//     return {
//         props: { cards: cardsData },
//     };
// }
export async function getStaticProps() {
  const client = await connectToDataBase();
  const db = client.db();
  const result = await db.collection("resources").find({}).toArray();
  const cardsData = JSON.parse(JSON.stringify(result));

  return {
    props: { cards: cardsData },
    revalidate: 10,
  };
}
