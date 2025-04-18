import { z } from 'zod';

const envSchema = z.object({
  ELEVENLABS_API_KEY: z.string({ message: 'ELEVENLABS_API_KEY is required' }),
  ELEVENLABS_API_BASE_URL: z
    .string({ message: 'ELEVENLABS_API_BASE_URL is required' })
    .url({ message: 'ELEVENLABS_API_BASE_URL must be a valid URL' }),
  ELEVENLABS_API_MODEL_ID: z.string({
    message: 'ELEVENLABS_API_MODEL_ID is required',
  }),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:', parsedEnv.error.format());
  throw new Error('Invalid environment variables');
}

const { ELEVENLABS_API_KEY, ELEVENLABS_API_BASE_URL, ELEVENLABS_API_MODEL_ID } =
  parsedEnv.data;

export { ELEVENLABS_API_KEY, ELEVENLABS_API_BASE_URL, ELEVENLABS_API_MODEL_ID };
