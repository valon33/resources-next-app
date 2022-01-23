import Card from "./Card";
import styles from "./CardGrid.module.css";

const CardGrid = (props) => {
    const { cards } = props;
    console.log("perprov", cards);
    return (
        <div className={styles.Cards}>
            {/* {!cards && <h1>Loading...</h1>} */}
            {cards.map((card) => (
                <Card
                    key={card._id}
                    name={card.name}
                    logo={card.logo}
                    link={card.link}
                    text={card.shortDescription}
                    id={card._id}
                />
            ))}
        </div>
    );
};

export default CardGrid;
