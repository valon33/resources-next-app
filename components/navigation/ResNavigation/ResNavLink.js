import Link from "next/link";
import { resourcesGroup } from "../../../data/html";
import styles from "./ResNavigation.module.css";

const ResNavLink = ({ setIsClicked }) => {
    return (
        <nav className={styles.resNavLinks}>
            <ul>
                {resourcesGroup.map((resource) => (
                    <Link href={"/" + resource} key={resource} passHref>
                        <li onClick={() => setIsClicked(false)}>{resource}</li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default ResNavLink;
