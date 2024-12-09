"use client";

import { useState, useEffect, ChangeEvent } from "react";
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
  Divider,
  CircularProgress,
  Typography,
} from "@mui/material";
import {
  Title,
  FormContainer,
  StyledButton,
  ProgressBar,
  FormControlStyled,
  SubTitle,
  StyledTextField,
} from "./page.styles";
import { IVoice, ISubscription } from "./definitions";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [voices, setVoices] = useState<IVoice[]>([]);
  const [subscription, setSubscription] = useState<ISubscription | null>(null);

  useEffect(() => {
    const fetchVoices = async () => {
      try {
        const response = await fetch("/api/voices");
        if (!response.ok) {
          throw new Error("Failed to fetch voices.");
        }
        const data = await response.json();
        setVoices(data.voices);
        setSelectedVoice(data.voices[0]?.voice_id || "");
      } catch (error) {
        console.error("Error fetching voices:", error);
        alert("There was an error fetching the voices.");
      }
    };
    fetchVoices();
  }, []);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await fetch("/api/subscription");
        if (!response.ok) {
          throw new Error("Failed to fetch subscription data.");
        }
        const data = await response.json();
        setSubscription(data.subscription);
      } catch (error) {
        console.error("Error fetching subscription data:", error);
        alert("There was an error fetching the subscription data.");
      }
    };
    fetchSubscription();
  }, []);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setText(inputText);
  };

  const handleVoiceChange = (event: SelectChangeEvent<string>) => {
    setSelectedVoice(event.target.value);
  };

  const generateAudio = async () => {
    if (!subscription) return;

    const charCount = text.length;
    if (charCount > subscription.character_limit) {
      alert("Character count exceeds the limit.");
      return;
    }
    if (!selectedVoice) {
      alert("Please select a voice.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-audio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          voiceId: selectedVoice,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate audio.");
      }

      const data = await response.json();
      // Add a timestamp to the URL to force the file to reload
      const audioUrlWithTimestamp = `${data.audioUrl}?timestamp=${Date.now()}`;
      setAudioUrl(audioUrlWithTimestamp);
    } catch (error) {
      console.error("Error generating audio:", error);
      alert("There was an error generating the audio.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!subscription) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <CircularProgress />
        <Typography sx={{ marginTop: 2 }}>Loading..</Typography>
      </Box>
    );
  }

  const availableChars =
    subscription.character_limit - subscription.character_count;

  const isGenerateButtonDisabled =
    !selectedVoice || text.length === 0 || text.length > availableChars;

  return (
    <FormContainer>
      <Title variant="h4" gutterBottom>
        Text to Audio Generator
      </Title>
      <Divider sx={{ marginBottom: "20px" }} />
      <FormControlStyled fullWidth>
        <InputLabel id="voice-select-label">Select Voice</InputLabel>
        <Select
          labelId="voice-select-label"
          value={selectedVoice}
          onChange={handleVoiceChange}
          label="Select Voice"
        >
          {voices.map((voice) => (
            <MenuItem key={voice.voice_id} value={voice.voice_id}>
              {voice.name}
            </MenuItem>
          ))}
        </Select>
      </FormControlStyled>
      <StyledTextField
        value={text}
        onChange={handleTextChange}
        label="Enter your text"
        multiline
        rows={6}
        variant="outlined"
        fullWidth
      />
      <SubTitle variant="body2" color="textSecondary">
        Characters used: {text.length} / {availableChars} available
      </SubTitle>
      <StyledButton
        variant="contained"
        color="primary"
        onClick={generateAudio}
        disabled={isGenerateButtonDisabled}
        fullWidth
      >
        {isLoading ? "Generating..." : "Generate Audio"}
      </StyledButton>

      {isLoading && <ProgressBar />}

      {audioUrl && (
        <Box sx={{ marginTop: "20px" }}>
          <audio key={audioUrl} controls>
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <Box sx={{ marginTop: "10px" }}>
            <a href={audioUrl} download="audio.mp3">
              <StyledButton variant="outlined" color="secondary" fullWidth>
                Download Audio
              </StyledButton>
            </a>
          </Box>
        </Box>
      )}
    </FormContainer>
  );
}
