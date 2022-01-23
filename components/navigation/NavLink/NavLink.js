import styles from "./NavLink.module.css";
import Link from "next/link";
import { resourcesGroup } from "../../../data/html";

const NavLink = () => {
    return (
        <nav className={styles.Navigation}>
            <ul className={styles.NavLinks}>
                {resourcesGroup.map((resource) => (
                    <li key={resource}>
                        <Link href={"/" + resource}>
                            <a>{resource}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavLink;
