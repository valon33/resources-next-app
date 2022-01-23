import Footer from "../components/Footer/Footer";
import MainNavigation from "../components/navigation/MainNavigation/MainNavigation";

const MainLayout = ({ children }) => {
    return (
        <>
            <MainNavigation />
            {children}
            <Footer />
        </>
    );
};
export default MainLayout;
