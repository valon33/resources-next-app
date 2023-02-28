import Card from "./Card";
import CardComponent from "../Card2/Card";
import styles from "./CardGrid.module.css";

const CardGrid = (props) => {
    const { cards } = props;

    return (
        <div className={styles.Cards}>
            {cards.map((card) => (
                <CardComponent
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
