import styles from "./NavLink.module.css";
import Link from "next/link";
import { resourcesGroup } from "../../../data/html";

const NavLink = () => {
    return (
        <nav className={styles.Navigation}>
            <ul className={styles.NavLinks}>
                {resourcesGroup.map((resource) => (
                    <Link href={"/" + resource} key={resource} passHref>
                        <li>
                            <a>{resource}</a>
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default NavLink;
