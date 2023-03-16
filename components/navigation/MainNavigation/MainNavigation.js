import Logo from "../../Logo/Logo";
import NavLink from "../NavLink/NavLink";
import { useSession } from "next-auth/react";
import NavButtons from "../NavButtons/NavButtons";
import ResButton from "../ResButton/ResButton";
import styles from "./MainNavigation.module.css";
import ResNavLink from "../ResNavLink/ResNavLink";
import ResNavButtons from "../ResNavButtons/ResNavButtons";

const MainNavigation = ({ isClicked, setIsClicked }) => {
  return (
    <div className={styles.MainNavigation}>
      <Logo />
      <NavLink />
      <NavButtons />
      {isClicked && <ResNavLink setIsClicked={setIsClicked} />}
      {isClicked && <ResNavButtons />}
      <ResButton isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default MainNavigation;
