'use client'
import React, { useEffect, useRef } from 'react';
import CloseIcon from '@/public/icons/close-icon.svg';

type Props = {
  src: string;
  open?:boolean
}



const VideoDialog = ({src,open}:Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleCloseClick = () => {
    // Pause the video when the close button is clicked
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center  p-10`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div className={`relative max-w-5xl rounded-2xl`}>
        <video
          src={src}
          ref={videoRef}
          autoPlay={videoRef.current}
          controls
          style={{ outline: 'none', border: 'none' }}
        ></video>
        <button className="text-white absolute -right-10 -top-10" onClick={handleCloseClick}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default VideoDialog;
