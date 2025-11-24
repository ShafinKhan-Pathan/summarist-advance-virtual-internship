import { useEffect,  useState } from "react";
import { PauseCircle, PlayCircle, Undo2, Redo2 } from "lucide-react";

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
        <Undo2 size={30} />
      </button>
      <button onClick={() => setIsPlaying((prev) => !prev)}>
        {isPlaying ? (
          <PauseCircle size={35} />
        ) : (
          <PlayCircle size={35} />
        )}
      </button>
      <button
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.currentTime += 10;
          }
        }}
      >
        <Redo2 size={30} />
      </button>
    </div>
  );
};

export default Controls;
