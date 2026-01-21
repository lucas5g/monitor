import { Elysia } from 'elysia'
import { TechnologyService } from './technology.service'
export const technology = new Elysia({ prefix: '/technologies' })
  .get('/', () => TechnologyService.findAll())