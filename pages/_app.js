import { SessionProvider } from "next-auth/react";
import MainLayout from "../MainLayout/MainLayout";
import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>
    </SessionProvider>
  );
}

export default MyApp;
