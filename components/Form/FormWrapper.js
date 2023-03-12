import React from "react";

const FormWrapper = ({ children, formTitle }) => {
    return (
        <div
            style={{
                //  minHeight: "90vh",
                height: "max-content",
                height: "79vh",
            }}
        >
            <div
                style={{
                    width: "600px",
                    border: "1px solid var(--color-grey-dark)",
                    height: "700px",
                    height: "max-content",
                    display: "flex",
                    flexDirection: "column",
                    gap: "50px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "7px",
                    margin: "80px auto",
                    padding: "40px 0",
                    boxShadow: "10px 10px 5px 0px rgba(3,3,3,.55)",
                }}
            >
                <h2
                    style={{
                        fontSize: "35px",
                        fontWeight: "900",
                        textAlign: "center",
                        color: "var(--color-grey-dark)",
                    }}
                >
                    {formTitle}
                </h2>
                {children}
            </div>
        </div>
    );
};

export default FormWrapper;
