import { useEffect, useState } from "react";
import AuthForm from "../components/Form/AuthForm";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

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

    return <AuthForm login />;
};
export default Login;
