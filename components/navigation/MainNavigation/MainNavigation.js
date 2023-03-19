import Logo from "../../Logo/Logo";
import NavLink from "../NavLink/NavLink";
import { useSession } from "next-auth/react";
import NavButtons from "../NavButtons/NavButtons";
import ResButton from "../ResButton/ResButton";
import styles from "./MainNavigation.module.css";
import ResNavLink from "../ResNavigation/ResNavLink";
import ResNavButtons from "../ResNavigation/ResNavButtons";
import ResNavigation from "../ResNavigation/ResNavigation";

const MainNavigation = ({ isClicked, setIsClicked }) => {
    return (
        <>
            <div className={styles.MainNavigation}>
                <Logo />
                <NavLink />
                <NavButtons />
                <ResButton isClicked={isClicked} setIsClicked={setIsClicked} />
            </div>
            {isClicked && <ResNavigation setIsClicked={setIsClicked} />}
        </>
    );
};

export default MainNavigation;
