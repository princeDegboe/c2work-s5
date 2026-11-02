function App() {
  const firstname = "Prince"
  const notificationsCount: number = 1
  const today = new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
  return (
    <div>
      <h1>Bienvenue, {firstname}!</h1>
      <p>Tu as reçu {notificationsCount} {notificationsCount === 1 ? "notification" : "notifications"}</p>
      <p>Aujourd'hui, c'est le {today}</p>
    </div>

  )
}

export default App