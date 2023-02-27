import Card from "./Card";
import CardComponent from "../../pages/card";
import styles from "./CardGrid.module.css";

const CardGrid = (props) => {
    const { cards } = props;

    return (
        <div className={styles.Cards}>
            {cards.map((card) => (
                // <Card
                //     key={card._id}
                //     name={card.name}
                //     logo={card.logo}
                //     link={card.link}
                //     text={card.shortDescription}
                //     id={card._id}
                // />
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
