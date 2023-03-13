import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
import styles from "./Card.module.css";

const CardGrid = (props) => {
    const { cards } = props;

    return (
        <div className={styles.cardGrid}>
            {!cards && <CardSkeleton num={8} />}
            {cards &&
                cards.map((card) => (
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
