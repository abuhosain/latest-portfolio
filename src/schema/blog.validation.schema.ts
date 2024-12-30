import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  tags: z.array(z.string()).min(1, { message: "At least one tag is required" }),
});

// Type inference
export type Blog = z.infer<typeof blogSchema>;
