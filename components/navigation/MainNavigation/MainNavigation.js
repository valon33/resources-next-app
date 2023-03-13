import Logo from "../../Logo/Logo";
import NavLink from "../NavLink/NavLink";
import { useSession } from "next-auth/react";
import NavButtons from "../NavButtons/NavButtons";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <div className={styles.MainNavigation}>
            <Logo />
            <NavLink />
            <NavButtons />
        </div>
    );
};

export default MainNavigation;
