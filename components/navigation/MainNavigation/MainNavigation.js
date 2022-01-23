import styles from "./MainNavigation.module.css";
import Logo from "../../Logo/Logo";
import NavLink from "../NavLink/NavLink";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const MainNavigation = () => {
    const { data: session, status } = useSession();

    return (
        <div className={styles.MainNavigation}>
            <Logo />
            <NavLink />

            {status === "loading" && (
                <div>
                    <p>Loading...</p>
                </div>
            )}

            {status === "unauthenticated" && (
                <div className={styles.MainNavigationBtn}>
                    <Link href={"/auth"}>
                        <a className={styles.LinkBtn}>LogIn/SignUp</a>
                    </Link>
                </div>
            )}

            {status === "authenticated" && (
                <div>
                    <div className={styles.MainNavigationBtn}>
                        <button onClick={signOut} className={styles.LogOutBtn}>
                            Log Out
                        </button>
                        <Link href={"/newcard"}>
                            <a className={styles.LinkBtn}>Add</a>
                        </Link>
                    </div>
                    {/* <div>
                        <p>Loged in as {session.user.email.split("@")[0]}</p>
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default MainNavigation;
