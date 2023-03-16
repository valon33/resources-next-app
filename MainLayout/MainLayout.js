import React, { useState, useEffect } from "react";
import MainNavigation from "../components/navigation/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";
import useMatchMedia from "react-use-match-media";

const MainLayout = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const isWideViewport = useMatchMedia("(max-width: 767px)");

  console.log("wtf", isWideViewport);
  return (
    <>
      <MainNavigation isClicked={isClicked} setIsClicked={setIsClicked} />
      {!isWideViewport && children}
      {!isClicked && isWideViewport && children}
      <Footer />
    </>
  );
};
export default MainLayout;
