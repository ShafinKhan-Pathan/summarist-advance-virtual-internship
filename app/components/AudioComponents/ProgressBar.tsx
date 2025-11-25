"use client";

import { useEffect, useState } from "react";

const formatTime = (second: number | undefined): string => {
  if (!second || isNaN(second)) return "00:00";
  const minutes = Math.floor(second / 60);
  const seconds = Math.floor(second % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

const ProgressBar = ({ audioRef }: any) => {
  const [duration, setDuration] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setDuration(audio.duration);
    const onTime = () => setCurrent(audio.currentTime);
    const onEnd = () => {
      audio.currentTime = 0;
      setCurrent(0);
    };
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, [audioRef]);

  return (
    <div className="flex justify-center items-center gap-2 w-full md:w-[calc(100%/3)]">
      <span>{formatTime(current)}</span>
      <input
        type="range"
        min={0}
        max={duration || 1}
        value={current}
        onChange={(e) => {
          audioRef.current.currentTime = Number(e.target.value);
        }}
        className="audio-slider w-full max-w-[70%] md:w-[50%] cursor-pointer"
        style={{ ["--progress" as any]: `${(current / duration) * 100}%` }}
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;
