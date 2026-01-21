import { afterAll, beforeAll, describe, expect, it } from 'bun:test';
import { ProjectService } from './project.service';


describe('ProjectService', () => {
  let id:number
  beforeAll( async () => {
    const paylaod = {
      name: 'pessoal',
    }

    const res = await ProjectService.create(paylaod);
    id = res.id;
  });

  afterAll(async () => { 
    await ProjectService.delete(id);
  })

  it('findAll', async () => {
    const res = await ProjectService.findAll();
    expect(res).toBeArray() ;
  })
  
  it('findOne', async () => {
    const res = await ProjectService.findOne(id);
    expect(res).toBeDefined();
  })

  it('update', async () => {
    const payload = {
      name: 'TS',
    }
    const res = await ProjectService.update(id, payload);
    expect(res).toBeDefined();
  })  
  // Add your tests here
});