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
          {/* <Link href={"/login"}>
            <a className={styles.LinkBtn}>LogIn</a>
          </Link>
          <Link href={"/signup"}>
            <a className={styles.LinkBtn}>SignUp</a>
          </Link> */}
          <Button type="text" style={{ color: "white" }}>
            LogIn
          </Button>
          <Button type="text" style={{ color: "white" }}>
            SignUp
          </Button>
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
        </div>
      )}
    </>
  );
};

export default NavButtons;
