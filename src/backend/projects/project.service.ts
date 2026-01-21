import { prisma } from '@/utils/prisma';
import { ProjectModel } from './project.model';


export abstract class ProjectService {

  static create(data: ProjectModel.createBody){
    return prisma.project.create({ data });
  }

  static findAll(){
    return prisma.project.findMany();
  }

  static findOne(id: number){
    return prisma.project.findUnique({ where: { id } });
  }

  static update(id: number, data: ProjectModel.updateBody){
    return prisma.project.update({ where: { id }, data });
  }

  static delete(id: number){
    return prisma.project.delete({ where: { id } });
  }

}