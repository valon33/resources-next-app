import Form from "../components/auth/Form";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

const SignUp = () => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        getSession().then((session) => {
            console.log("Session", session);
            if (session) {
                router.replace("/");
            } else {
                setIsLoading(false);
            }
        });
    }, [router]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return <Form login={false} />;
};
export default SignUp;
