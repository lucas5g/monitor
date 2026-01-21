import { afterAll, beforeAll, describe, expect, it } from 'bun:test';
import { TechnologyService } from './technology.service';
import { TechnologyModel } from './technology.model';

describe('TechnologyService', () => {
  let id:number
  beforeAll( async () => {
    const paylaod:TechnologyModel.createBody = {
      name: 'EvolutionAPI/evolution-api',
      release: 'v1.0.0',
    }

    const res = await TechnologyService.create(paylaod);
    id = res.id;
    console.log('Created technology with ID:', id);
  });

  afterAll(async () => { 
    // await TechnologyService.delete(id);
  })

  it('findAll', async () => {
    const res = await TechnologyService.findAll();
    expect(res).toBeArray() ;
  })
  
  it('findOne', async () => {
    const res = await TechnologyService.findOne(id);
    expect(res).toBeDefined();
  })

  it('update', async () => {
    const payload = {
      name: 'TS',
    }
    const res = await TechnologyService.update(id, payload);
    expect(res).toBeDefined();
  })  

  it.only('updateReleases', async () => {
    // const res = await TechnologyService.updateReleases();

    console.log({res: 'qweqwe'});
  })
  // Add your tests here
});