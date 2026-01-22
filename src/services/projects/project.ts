import { Elysia } from 'elysia'
import { ProjectService } from './project.service'
export const project = new Elysia({ prefix: '/projects' })
  .post('/', ({ body }) => ProjectService.create(body))
  .get('/', () => ProjectService.findAll())
  .get('/:id', ({ params }) => ProjectService.findOne(Number(params.id)))
  .put('/:id', ({ params, body }) => ProjectService.update(Number(params.id), body))
  .delete('/:id', ({ params }) => ProjectService.delete(Number(params.id)))