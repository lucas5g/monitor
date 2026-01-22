import { ProjectService } from '@/services/projects/project.service';
import { TechnologyService } from '@/services/technology/technology.service';
import { Table } from '@/components/Table';
import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge'; // Supondo que você tenha um componente Badge

export default async function Home() {

  const [projects, technologies] = await Promise.all([
    ProjectService.findAll(),
    TechnologyService.findAll(),
  ])
  console.log(JSON.stringify(projects, null, 2));

  return (
    <main className="">
      <Table
        headers={['Nome', 'Techs']}
        caption='Projetos'
      // className="shadow-lg rounded-lg overflow-hidden"
      >
        {projects.map(project => (
          <TableRow key={project.id} className="border-b hover:bg-gray-100">
            <TableCell className="font-semibold text-lg py-4">{project.name}</TableCell>
            <TableCell>
              <div className="flex flex-col gap-2">
                {project.techs.map(tech => (
                  <Badge key={tech.id} className={`bg-blue-100 px-3 py-1 rounded-full ${tech.release === tech.release_used ? 'text-blue-800' : 'text-red-800'}`}>
                    {tech.name}
                    <span className="ml-2 text-xs text-gray-500">{tech.release} | {tech.release_used}</span>
                  </Badge>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </Table>
      {/* <Table
        headers={['Nome', 'Release']}
        caption='Techs'
      >
        {technologies.map(tech => (
          <TableRow key={tech.id}>
            <TableCell>{tech.name}</TableCell>
            <TableCell>{tech.release}</TableCell>
          </TableRow>
        ))}
      </Table> */}

    </main>
  );
}
