import Logo from "../Logo/Logo";
import NavLink from "../navigation/NavLink/NavLink";
import styles from "./Footer.module.css";
import { useSession } from "next-auth/react";

const Footer = () => {
    const { data: session, status } = useSession();
    return (
        <footer className={styles.Footer}>
            <Logo />
            <NavLink />
            {status === "authenticated" && (
                <div className={styles.FooterText}>
                    <p>Loged in as {session.user.email.split("@")[0]}</p>
                </div>
            )}
            {status !== "authenticated" && (
                <div className={styles.FooterText}>
                    <p>You are not loged in !</p>
                </div>
            )}
        </footer>
    );
};

export default Footer;
