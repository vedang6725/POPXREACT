import { Camera } from "lucide-react"
import styles from "../components/AccountSettingsScreen.module.css"

export default function AccountSettingsScreen({ user, onNavigate }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Account Settings</h1>

      <div className={styles.profileSection}>
        <div className={styles.profileImageContainer}>
          <img src="/professional-woman-profile.png" alt="Profile" className={styles.profileImage} />
          <div className={styles.cameraIndicator}>
            <Camera size={12} color="white" />
          </div>
        </div>

        <div className={styles.profileInfo}>
          <h2 className={styles.profileName}>{user?.name || "Marry Doe"}</h2>
          <p className={styles.profileEmail}>{user?.email || "Marry@Gmail.Com"}</p>
        </div>
      </div>

      <p className={styles.description}>
        Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
        Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  )
}