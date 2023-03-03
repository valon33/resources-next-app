import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import styles from "../AddNew/AddNew.module.css";

async function createUser(email, password) {
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
    }

    return data;
}

function AuthForm() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState);
    }

    async function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (isLogin) {
            console.log(enteredEmail, enteredPassword);
            const result = await signIn("credentials", {
                redirect: false,
                email: enteredEmail,
                password: enteredPassword,
            });

            console.log(result);

            if (!result.error) {
                router.replace("/");
            }
        } else {
            try {
                const result = await createUser(enteredEmail, enteredPassword);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <section className={styles.Auth} style={{ padding: "50px 0" }}>
            <form onSubmit={submitHandler} className={styles.Form}>
                <h1>{isLogin ? "Login" : "Sign Up"}</h1>
                <div className={styles.FormGroup}>
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        ref={emailInputRef}
                    />
                </div>
                <div className={styles.FormGroup}>
                    <label htmlFor="password">Your Password</label>
                    <input
                        type="password"
                        id="password"
                        required
                        ref={passwordInputRef}
                    />
                </div>
                <div
                    className={styles.ActionsBtn}
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "15px 0",
                    }}
                >
                    <button
                        className={styles.Button}
                        style={{ padding: "10px", margin: "10px" }}
                    >
                        {isLogin ? "Login" : "Create Account"}
                    </button>
                    <button
                        type="button"
                        style={{ padding: "10px", margin: "10px" }}
                        className={styles.Button}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin
                            ? "Create new account"
                            : "Login with existing account"}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default AuthForm;
