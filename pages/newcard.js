import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AddForm from "../components/Form/AddForm";
import styles from "../styles/Home.module.css";

const NewCard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        getSession().then((session) => {
            console.log("session", session);
            if (!session) {
                router.replace("/login");
            } else {
                setIsLoading(false);
            }
        });
    }, [router]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.centerFormContainer}>
            <AddForm />;
        </div>
    );
};

export default NewCard;
