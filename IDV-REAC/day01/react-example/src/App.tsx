function App() {
  const firstname = "Prince"
  const isLoggedIn: boolean = false
  return (
    <div>
      <h1>{isLoggedIn? "Bienvenue, " + firstname + "!": "Veuillez vous connecter"}</h1>
    </div>

  )
}

export default App