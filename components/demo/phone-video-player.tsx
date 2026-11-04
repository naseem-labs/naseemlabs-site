"use client";

import { useRef, useState } from "react";

const VIDEO_URL = "https://media.naseemlabs.com/chat-demo.mp4";
const VIDEO_POSTER = "/homepage/video-poster.webp";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export default function PhoneVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const seek = (value: string) => {
    const video = videoRef.current;
    const nextTime = Number(value);
    if (!video || !Number.isFinite(nextTime)) return;
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const replay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play();
    setCurrentTime(0);
  };

  return (
    <>
      <video
        ref={videoRef}
        src={VIDEO_URL}
        poster={VIDEO_POSTER}
        title="NaseemLabs FolliCore patient journey"
        className="block h-full w-full rounded-[29px] border-0 object-cover"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onEnded={replay}
      />

      <div className="absolute inset-x-0 bottom-0 z-10 rounded-b-[29px] bg-gradient-to-t from-black/85 via-black/45 to-transparent px-3 pb-2 pt-7">
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step="any"
            value={Math.min(currentTime, duration || 0)}
            onChange={(event) => seek(event.target.value)}
            aria-label="Seek video"
            className="h-1 min-w-0 flex-1 cursor-pointer accent-[#6fe1ca]"
          />
          <span className="shrink-0 text-[9px] tabular-nums text-white/80">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <button
            type="button"
            onClick={replay}
            aria-label="Replay video"
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-[12px] leading-none text-white transition-colors hover:bg-[#087f6b] focus:outline-none focus:ring-1 focus:ring-[#6fe1ca]"
          >
            ↻
          </button>
        </div>
      </div>
    </>
  );
}
