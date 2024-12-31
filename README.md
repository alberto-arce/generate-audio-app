# Text-to-Audio Generator

## Overview

This is a simple single-page application built with Next.js that utilizes the ElevenLabs API to convert text into audio. The app allows users to select a voice from a dropdown menu, enter text in a text area, and generate audio. Users can listen to the generated audio or download it directly.

## Features

- **Voice Selection**: Choose from various voices available via the ElevenLabs API.
- **Text Input**: Enter the text you want to convert to speech.
- **Character Count**: Displays the number of characters available for conversion based on your usage quota.
- **Audio Generation**: Generate audio from the provided text.
- **Playback and Download**: Play the generated audio or download it as an MP3 file.

**Playback and Download**: Play the generated audio or download it as an MP3 file.

## Environment Variables

To use the ElevenLabs API, you need to set up the following environment variables in your `.env` file:

- `ELEVENLABS_API_BASE_URL`: The base URL for the ElevenLabs API. Default is `https://api.elevenlabs.io/v1`. Change this if ElevenLabs updates the endpoint.
- `ELEVENLABS_API_KEY`: Your ElevenLabs API key. Replace `<YOUR API KEY>` with your actual API key.
- `ELEVENLABS_API_MODEL_ID`: The ID of the model you want to use for generating audio.

Example `.env` file:

```bash
ELEVENLABS_API_BASE_URL=https://api.elevenlabs.io/v1
ELEVENLABS_API_KEY=<YOUR API KEY>
ELEVENLABS_API_MODEL_ID=<YOUR MODEL ID>
```

## Installation

### Local Development

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables in a .env file as described above.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to http://localhost:3000 to use the application.

## Running with Docker

If you prefer to run the application using Docker, follow these steps:

1. Ensure you have Docker installed on your machine.

2. Create a .env file in your project directory with the necessary environment variables as described above.

3. Run the Docker container:

   ```bash
   docker-compose up -d
   ```

4. Open your browser and navigate to http://localhost:3000 to use the application.
