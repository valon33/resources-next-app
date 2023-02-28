import { Avatar } from "antd";

const CardLogo = ({ logo }) => {
    return <Avatar src={logo} style={{ objectFit: "contain" }} />;
};

export default CardLogo;
