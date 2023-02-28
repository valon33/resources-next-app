import Link from "next/link";
import { Tooltip } from "antd";
import styles from "./Card.module.css";

const CardTitle = ({ link, name }) => {
    return (
        <Link href={link} passHref>
            <a target="_blank">
                {" "}
                <Tooltip title={name}>
                    <span className={styles.CardTitle}>{name}</span>
                </Tooltip>
            </a>
        </Link>
    );
};

export default CardTitle;
