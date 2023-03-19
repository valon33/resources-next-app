import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "antd";
import styles from "./ResNavigation.module.css";

const ResNavButtons = ({ setIsClicked }) => {
    const { status } = useSession();
    return (
        <>
            {status === "loading" && (
                <div>
                    <p>Loading...</p>
                </div>
            )}

            {status === "unauthenticated" && (
                <div className={styles.ResNavigationBtn}>
                    <Link href={"/login"} passHref>
                        <Button
                            type="text"
                            className={styles.navBtn}
                            onClick={() => setIsClicked(false)}
                        >
                            LogIn
                        </Button>
                    </Link>
                    <Link href={"/signup"} passHref>
                        <Button
                            type="text"
                            className={styles.navBtn}
                            onClick={() => setIsClicked(false)}
                        >
                            SignUp
                        </Button>
                    </Link>
                </div>
            )}

            {status === "authenticated" && (
                <div className={styles.ResNavigationBtn}>
                    <Link href={"/newcard"} passHref>
                        <Button
                            type="text"
                            className={styles.navBtn}
                            onClick={() => setIsClicked(false)}
                        >
                            Add
                        </Button>
                    </Link>
                    <Button
                        type="text"
                        onClick={() => {
                            signOut();
                            setIsClicked(false);
                        }}
                        className={styles.navBtn}
                    >
                        Log Out
                    </Button>
                </div>
            )}
        </>
    );
};

export default ResNavButtons;
