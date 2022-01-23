import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <Link href="/">
            <span className={styles.Logo}>Resources</span>
        </Link>
    );
};

export default Logo;
