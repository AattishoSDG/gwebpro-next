"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function AboutPageVideoPlayer({ goal_video_thumbnail, goal_video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = (e) => {
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="about-page-video-container" onClick={handlePlay}>
      {!isPlaying && (
        <img
          src="/images/video_play_btn_blue.svg"
          alt="Play video"
          width={85}
          height={85}
          className="about-page-play-button"
        />
      )}
      <video
        src={goal_video} // About page specific video
        poster={goal_video_thumbnail.url} // About page specific poster
        preload="none"
        controls={isPlaying}
        ref={videoRef}
        className="about-page-video"
      />
    </div>
  );
}
