import Link from "next/link";
import { resourcesGroup } from "../../../data/html";
import styles from "./ResNavLink.module.css";

const ResNavLink = ({ setIsClicked }) => {
  return (
    <nav className={styles.resNavigation}>
      <ul className={styles.resNavLinks}>
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
