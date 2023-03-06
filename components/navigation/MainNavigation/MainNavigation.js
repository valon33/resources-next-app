import styles from "./MainNavigation.module.css";
import Logo from "../../Logo/Logo";
import NavLink from "../NavLink/NavLink";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import NavButtons from "../NavButtons/NavButtons";

const MainNavigation = () => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.MainNavigation}>
      <Logo />
      <NavLink />
      <NavButtons />
    </div>
  );
};

export default MainNavigation;
