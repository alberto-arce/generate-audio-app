import { NextResponse } from 'next/server';
import { ELEVENLABS_API_KEY, ELEVENLABS_API_BASE_URL } from '@config/env';

export async function GET() {
  try {
    const response = await fetch(
      `${ELEVENLABS_API_BASE_URL}/user/subscription`,
      {
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY!,
        },
      },
    );
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch subscription data' },
        { status: 500 },
      );
    }
    const data = await response.json();
    return NextResponse.json({ subscription: data });
  } catch (error) {
    console.error('Error fetching subscription data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
