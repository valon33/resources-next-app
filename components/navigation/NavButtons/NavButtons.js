import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import styles from "./NavButtons.module.css";
import { Button } from "antd";

const NavButtons = () => {
    const { data: session, status } = useSession();

    return (
        <>
            {status === "loading" && (
                <div>
                    <p>Loading...</p>
                </div>
            )}

            {status === "unauthenticated" && (
                <div className={styles.MainNavigationBtn}>
                    <Link href={"/login"} passHref>
                        <Button type="text" className={styles.btn}>
                            LogIn
                        </Button>
                    </Link>
                    <Link href={"/signup"} passHref>
                        <Button type="text" className={styles.btn}>
                            SignUp
                        </Button>
                    </Link>
                </div>
            )}

            {status === "authenticated" && (
                <div className={styles.MainNavigationBtn}>
                    <Link href={"/newcard"} passHref>
                        <Button type="text" className={styles.btn}>
                            Add
                        </Button>
                    </Link>
                    <Button
                        type="text"
                        onClick={signOut}
                        className={styles.btn}
                    >
                        Log Out
                    </Button>
                </div>
            )}
        </>
    );
};

export default NavButtons;
