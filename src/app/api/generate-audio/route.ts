import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import {
  ELEVENLABS_API_KEY,
  ELEVENLABS_API_BASE_URL,
  ELEVENLABS_API_MODEL_ID,
} from '@config/env';

export async function POST(request: Request) {
  try {
    const { text, voiceId } = await request.json();
    if (!text || !voiceId) {
      return NextResponse.json(
        { error: 'Text and voiceId are required.' },
        { status: 400 },
      );
    }

    const response = await fetch(
      `${ELEVENLABS_API_BASE_URL}/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY!,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model_id: ELEVENLABS_API_MODEL_ID,
          text,
        }),
      },
    );
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to generate audio' },
        { status: 500 },
      );
    }

    const audioArrayBuffer = await response.arrayBuffer();
    const audioBuffer = Buffer.from(audioArrayBuffer);
    const filePath = path.join(process.cwd(), 'public', 'audios', 'audio.mp3');
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, audioBuffer);
    const audioUrl = `/audios/audio.mp3`;
    return NextResponse.json({ audioUrl });
  } catch (error) {
    console.error('Error generating audio:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
