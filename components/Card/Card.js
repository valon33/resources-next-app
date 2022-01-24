import styles from "./Card.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Card = ({ name, logo, link, text, id }) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    const removeResource = async (id) => {
        try {
            const response = await fetch(`/api/delete/${id}`, {
                method: "Delete",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                router.replace(router.asPath);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.Card}>
            <div className={styles.CardHeader}>
                <div className={styles.CardHeaderImg}>
                    <img src={logo} alt={name} />
                </div>
                {status === "authenticated" && (
                    <div className={styles.CardHeaderBtn}>
                        <button onClick={() => removeResource(id)}>X</button>
                    </div>
                )}
            </div>
            <h3 className={styles.CardLinks}>
                <a href={link} target="_blank" rel="noreferrer">
                    {name}
                </a>
            </h3>
            <p className={styles.CardText}>{text}</p>
        </div>
    );
};

export default Card;
