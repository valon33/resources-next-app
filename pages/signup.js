import { useEffect, useState } from "react";
import Form from "../components/auth/Form";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const SignUp = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    session ? router.replace("/") : setIsLoading(false);
  }, [router, session]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <Form login={false} />;
};
export default SignUp;
