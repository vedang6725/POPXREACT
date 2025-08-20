import styles from "../components/WelcomeScreen.module.css"

export default function WelcomeScreen({ onNavigate }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to PopX</h1>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className={styles.buttonGroup}>
        <button onClick={() => onNavigate("register")} className={styles.primaryButton}>
          Create Account
        </button>

        <button onClick={() => onNavigate("login")} className={styles.secondaryButton}>
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}
