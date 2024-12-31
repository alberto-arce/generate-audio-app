import { z } from 'zod';

const envSchema = z.object({
  ELEVENLABS_API_KEY: z
    .string()
    .min(1, { message: 'ELEVENLABS_API_KEY is required' }),
  ELEVENLABS_API_BASE_URL: z
    .string()
    .url({ message: 'ELEVENLABS_API_BASE_URL must be a valid URL' }),
  ELEVENLABS_API_MODEL_ID: z
    .string()
    .min(1, { message: 'ELEVENLABS_API_MODEL_ID is required' }),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('Error in environment variables:', parsedEnv.error.format());
  process.exit(1);
}

const { ELEVENLABS_API_KEY, ELEVENLABS_API_BASE_URL, ELEVENLABS_API_MODEL_ID } =
  parsedEnv.data;

export { ELEVENLABS_API_KEY, ELEVENLABS_API_BASE_URL, ELEVENLABS_API_MODEL_ID };
