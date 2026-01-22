import { prisma } from '@/utils/prisma'


async function main() {

  // await prisma.$executeRawUnsafe(`
  //   TRUNCATE TABLE "projects" RESTART IDENTITY CASCADE;
  //   TRUNCATE TABLE "techs" RESTART IDENTITY CASCADE;
  //   TRUNCATE TABLE "projects_techs" RESTART IDENTITY CASCADE;  
  // `)
  await prisma.project.create({
    data: {
      name: "chatwoot-suporte",
      techs: {
        create:{
          release_used: "2.10.2",
          tech:{
            create:{
              name: "chatwoot/chatwoot",
              release: "2.10.2"
            }
          }
        }
        
      }
    }
  })

}

await main()