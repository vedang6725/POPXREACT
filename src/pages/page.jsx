import { useState } from "react"
import WelcomeScreen from "../components/WelcomeScreen"
import RegisterScreen from "../components/RegisterScreen"
import LoginScreen from "../components/LoginScreen"
import AccountSettingsScreen from "../components/AccountSettingsScreen"

export default function PopXApp() {
  const [currentScreen, setCurrentScreen] = useState("welcome")
  const [user, setUser] = useState(null)

  const navigateToScreen = (screen) => {
    setCurrentScreen(screen)
  }

  const handleLogin = (email, password) => {
    // Simulate login - in real app, this would be an API call
    setUser({ name: "Marry Doe", email: email })
    setCurrentScreen("account")
  }

  const handleRegister = (userData) => {
    // Simulate registration - in real app, this would be an API call
    setUser({ name: userData.fullName, email: userData.email })
    setCurrentScreen("account")
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onNavigate={navigateToScreen} />
      case "register":
        return <RegisterScreen onNavigate={navigateToScreen} onRegister={handleRegister} />
      case "login":
        return <LoginScreen onNavigate={navigateToScreen} onLogin={handleLogin} />
      case "account":
        return <AccountSettingsScreen user={user} onNavigate={navigateToScreen} />
      default:
        return <WelcomeScreen onNavigate={navigateToScreen} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
        {renderScreen()}
      </div>
    </div>
  )
}