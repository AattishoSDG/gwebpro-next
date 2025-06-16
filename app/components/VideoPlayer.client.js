"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function VideoPlayer({ src, poster }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handlePlay(e) {
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }

  return (
    <div className="video-container" onClick={handlePlay}>
      {!isPlaying && (
        <Image
          src="/images/video_play_btn_blue.svg"
          alt="Play video"
          width={85}
          height={85}
        />
      )}
      <video
        src={src}
        poster={poster}
        preload="none"
        controls={isPlaying}
        ref={videoRef}
      ></video>
    </div>
  );
}
