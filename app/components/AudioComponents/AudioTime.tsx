"use client";
import { useEffect, useState } from "react";

export const formatTime = (second: number | undefined): string => {
  if (!second || isNaN(second)) return "00:00";
  const minutes = Math.floor(second / 60);
  const seconds = Math.floor(second % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const AudioTime = ({ audioUrl }: { audioUrl: string }) => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audioUrl) return;

    const audio = new Audio(audioUrl);

    const onLoaded = () => setDuration(audio.duration);
    audio.addEventListener("loadedmetadata", onLoaded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
    };
  }, [audioUrl]);

  return <span>{formatTime(duration)}</span>;
};

export default AudioTime;
