import { useState } from "react"
import styles from "../components/RegisterScreen.module.css"

export default function RegisterScreen({ onNavigate, onRegister }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: true,
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onRegister(formData)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Create your PopX account</h1>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="fullName" className={styles.label}>
            Full Name<span className={styles.required}>*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phoneNumber" className={styles.label}>
            Phone number<span className={styles.required}>*</span>
          </label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="Marry Doe"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email address<span className={styles.required}>*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password<span className={styles.required}>*</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="companyName" className={styles.label}>
            Company name
          </label>
          <input
            id="companyName"
            type="text"
            placeholder="Marry Doe"
            value={formData.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.radioGroup}>
          <label className={styles.label}>
            Are you an Agency?<span className={styles.required}>*</span>
          </label>
          <div className={styles.radioOptions}>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="isAgency"
                checked={formData.isAgency === true}
                onChange={() => handleInputChange("isAgency", true)}
                className={styles.radioInput}
              />
              <span className={styles.radioLabel}>Yes</span>
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="isAgency"
                checked={formData.isAgency === false}
                onChange={() => handleInputChange("isAgency", false)}
                className={styles.radioInput}
              />
              <span className={styles.radioLabel}>No</span>
            </label>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Create Account
        </button>
      </form>
    </div>
  )
}
