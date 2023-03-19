import React, { useState, useEffect } from "react";
import MainNavigation from "../components/navigation/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <MainNavigation isClicked={isClicked} setIsClicked={setIsClicked} />
            {!isClicked && children}
            <Footer />
        </>
    );
};
export default MainLayout;
