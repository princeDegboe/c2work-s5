import { useState } from 'react'

function App() {

  const [completedTasks, setCompletedTasks] = useState<number>(0)


  return (
    <div>
      <h1>Tâches complétées : {completedTasks}</h1>
      <button onClick={() => setCompletedTasks((prev) => prev + 1)}>Ajouter une tâche</button>
    </div>

  )
}

export default App