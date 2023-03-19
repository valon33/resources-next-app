import ResNavButtons from "./ResNavButtons";
import ResNavLink from "./ResNavLink";
import styles from "./ResNavigation.module.css";

const ResNavigation = ({ setIsClicked }) => {
    return (
        <div className={styles.resNavigation}>
            <ResNavLink setIsClicked={setIsClicked} />
            <ResNavButtons setIsClicked={setIsClicked} />
        </div>
    );
};

export default ResNavigation;
