  interface Project {
    id: number
    nom: string
    auteur: string
    status: 'draft' | 'published' | 'archived'
  }

  const projects: Project[] = [
    { id: 1, nom: 'Projet 1', auteur: 'Alice', status: 'draft' },
    { id: 2, nom: 'Projet 2', auteur: 'Bob', status: 'published' },
    { id: 3, nom: 'Projet 3', auteur: 'Charlie', status: 'archived' },
  ]

function App() {

  return (
    <div>
      <h1>Mes projets récents</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <p>Nom: {project.nom}; Auteur: {project.auteur}; Status: {project.status}</p>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default App