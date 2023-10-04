import React from 'react';
import CloseIcon from '@/public/icons/close-icon.svg';

const VideoDialog = () => {
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
          src="https://v6.cdnpk.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4"
          autoPlay
          controls
          style={{ outline: 'none', border: 'none' }}
        ></video>
        <button className="text-white absolute -right-10 -top-10">
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default VideoDialog;
