import { release } from 'os';
import { z } from "zod";

export namespace TechnologyModel {
  export const createBody = z.object({
    name: z.string().min(3).max(100),
    release: z.string().min(1).max(20),
  });

  export const updateBody = createBody.partial();

  export type createBody = z.infer<typeof createBody>;
  export type updateBody = z.infer<typeof updateBody>;
}