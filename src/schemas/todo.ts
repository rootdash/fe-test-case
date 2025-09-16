import { z } from 'zod';

export const todoSchema = z.object({
  /**
   * @todo: Add the validation for the title and the description
   * - Title: required, min 3 characters, max 20 characters
   * - Description: required, min 3 characters, max 100 characters
   */
  title: z.string().min(3,{ message: 'Title must be at least 3 characters long' }).max(20,{ message: 'Title must be at most 20 characters long' }),
  description: z.string().min(3,{ message: 'Description must be at least 3 characters long' }).max(100,{ message: 'Description must be at most 100 characters long' }),
});

export type TodoSchemaType = z.infer<typeof todoSchema>;
