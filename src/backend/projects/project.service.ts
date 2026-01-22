import { prisma } from '@/utils/prisma';
import { ProjectModel } from './project.model';


export abstract class ProjectService {

  static create(data: ProjectModel.createBody) {
    return prisma.project.create({ data });
  }

  static async findAll() {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        name: true,
        techs: {
          select: {
            release_used: true,
            tech: {
              select: {
                id: true,
                name: true,
                release: true,
              }
            }
          }
        }
      }
    });
    return projects.map(project => {
      return {
        id: project.id,
        name: project.name,
        techs: project.techs.map(t => ({
          ...t.tech,
          release_used: t.release_used,
        })),
      }
    });
  }

  static findOne(id: number) {
    return prisma.project.findUnique({ where: { id } });
  }

  static update(id: number, data: ProjectModel.updateBody) {
    return prisma.project.update({ where: { id }, data });
  }

  static delete(id: number) {
    return prisma.project.delete({ where: { id } });
  }

}