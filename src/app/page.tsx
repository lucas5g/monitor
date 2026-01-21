import { ProjectService } from '@/backend/projects/project.service';
import { TechnologyService } from '@/backend/technology/technology.service';

export default async function Home() {

  const [projects, technologies] = await Promise.all([
    ProjectService.findAll(),
    TechnologyService.findAll(),
  ])

  return (
    <main className="h-screen flex items-center justify-center gap-4">
      <div>
        <h1>Projetos</h1>
        <ul>
          {projects.map(project => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>

      </div>

      <div>
        <h1>Tenologias</h1>
        <ul>
          {technologies.map(tech => (
            <li key={tech.id}>{tech.name}</li>
          ))}
        </ul>
      </div>

    </main>
  );
}
