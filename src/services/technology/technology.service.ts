import { prisma } from '@/utils/prisma';
import { TechnologyModel } from './technology.model';

export abstract class TechnologyService {
  
  static create(data: TechnologyModel.createBody){
    return prisma.tech.create({ data });
  }

  static findAll(){
    return prisma.tech.findMany();
  }

  static findOne(id: number){
    return prisma.tech.findUnique({ where: { id } });
  }

  static update(id: number, data: TechnologyModel.updateBody){
    return prisma.tech.update({ where: { id }, data });
  }

  static delete(id: number){
    return prisma.tech.delete({ where: { id } });
  }

  static async updateReleases(){
    const technologies = await prisma.tech.findMany()

    const fetcher = technologies.map(async tech => {
      const url = `https://api.github.com/repos/${tech.name}/releases/latest`
      const res = await fetch(url);
      const data =  await res.json() as { tag_name: string };
      const release = data.tag_name.startsWith('v') ? data.tag_name : `v${data.tag_name}`;

      return { id: tech.id, release };
    })

    const releases = await Promise.all(fetcher)

    return await prisma.tech.updateMany({
      data: releases.map(release => ({
        id: release.id,
        release: release.release,
      })),
      where: { id: { in: releases.map(r => r.id) } },
    });

  }
}