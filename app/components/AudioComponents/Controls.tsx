import React, { useEffect, useRef, useState } from "react";

import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";

const Controls = ({ audioRef }: any) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio?.play();
    } else {
      audio?.pause();
    }
    const handleEnded = () => {
      setIsPlaying(false);
    };
    audio.addEventListener("ended", handleEnded);
    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }, [isPlaying, audioRef]);
  return (
    <div className="flex items-center justify-center gap-4 w-full md:w-[calc(100%/3)]">
      <button
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.currentTime -= 10;
          }
        }}
      >
        <TbRewindBackward10 size={30} />
      </button>
      <button onClick={() => setIsPlaying((prev) => !prev)}>
        {isPlaying ? (
          <FaRegCirclePause size={35} />
        ) : (
          <FaRegCirclePlay size={35} />
        )}
      </button>
      <button
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.currentTime += 10;
          }
        }}
      >
        <TbRewindForward10 size={30} />
      </button>
    </div>
  );
};

export default Controls;
