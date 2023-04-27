"use client"
import React, { useEffect, useRef, useState } from "react";

 const VideoBanner = () => {
  const videoEl = useRef(null);
  const [playing, setPlaying] = useState(true);


  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="App">
      <p className=" text-center text-3xl top-10">Our Youtube community</p>
      <div className="relative">
        <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
          muted
          
          controls ={false}
          alt="All the devices"
          src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
          ref={videoEl}
        />
      </div>
      <div className='absolute '>
        {playing ? (
          <div>
            {' '}
            <h1 onClick={() => setPlaying(false)}>+</h1>
          </div>
        ) : (
          <div>
            {' '}
            <h1 onClick={() => setPlaying(true)}>err</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoBanner;
