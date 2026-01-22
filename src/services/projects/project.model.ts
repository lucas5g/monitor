import { z } from "zod";

export namespace ProjectModel {
  export const createBody = z.object({
    name: z.string().min(3).max(100),
  });

  export const updateBody = createBody.partial();

  export type createBody = z.infer<typeof createBody>;
  export type updateBody = z.infer<typeof updateBody>;
}