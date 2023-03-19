import { useEffect, useState } from "react";
import AuthForm from "../components/Form/AuthForm";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";

const Login = () => {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        session ? router.replace("/") : setIsLoading(false);
    }, [router, session]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.centerFormContainer}>
            <AuthForm login />;
        </div>
    );
};
export default Login;
