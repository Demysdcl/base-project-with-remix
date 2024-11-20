import { z } from "zod";

const schema = z.object({
  DATABASE_URL: z.string().min(1),
  MAIN_PASSWORD: z.string(),
  MAX_RETRY: z.coerce.number().positive(),
});

type ENV = z.infer<typeof schema>;

declare global {
  var ENV: ENV;
  interface Window {
    ENV: ENV;
  }
}

export const getEnv = () => schema.parse(process.env);
