import styles from "./Form.module.css";

const FormWrapper = ({ children, formTitle }) => {
    return (
        <>
            <div className={styles.formContainer}>
                <h2 className={styles.formHeading}>{formTitle}</h2>
                {children}
            </div>
        </>
    );
};

export default FormWrapper;
