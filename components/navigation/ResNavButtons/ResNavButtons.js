import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "antd";
import styles from "./ResNavButtons.module.css";

const ResNavButtons = () => {
  const { status } = useSession();
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
            <Button type="text" className={styles.navBtn}>
              LogIn
            </Button>
          </Link>
          <Link href={"/signup"} passHref>
            <Button type="text" className={styles.navBtn}>
              SignUp
            </Button>
          </Link>
        </div>
      )}

      {status === "authenticated" && (
        <div className={styles.MainNavigationBtn}>
          <Link href={"/newcard"} passHref>
            <Button type="text" className={styles.navBtn}>
              Add
            </Button>
          </Link>
          <Button type="text" onClick={signOut} className={styles.navBtn}>
            Log Out
          </Button>
        </div>
      )}
    </>
  );
};

export default ResNavButtons;
