'use client';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { GoPlay } from 'react-icons/go';
import { MdPauseCircleFilled } from 'react-icons/md';

type Props = {};


const Playbutton = (props: Props, videoId: string) => {
  const [playing, setPlaying] = useState(true);



  return (
    <div>
      <ReactPlayer
        url={'https://www.youtube.com/embed/bDczMloXvs4'}
        style={{ display: 'flex', paddingRight: 30, margin: 20 }}
        loop
        playing
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              modestbranding: 1,
              autoplay: true,
              muted: true,
            },
          },
        }}
      />
      <div className="relative">
        <ReactPlayer
          style={{ position: 'relative', border: 20, borderColor: 'black' }}
          url={
            'https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4'
          }
          loop={true}
          playing={playing}
          config={{
            file: {
              attributes: {
                autoPlay: true,
                muted: true,
              },
            },
          }}
        />
        <div className="absolute top-32 left-72 z-10  ">
          {playing ? (
            <div className="rounded-full border-2  border-secondary1  p-4 opacity-0 duration-1000 hover:opacity-100">
              {' '}
              <MdPauseCircleFilled
                size={50}
                onClick={() => setPlaying(false)}
                fill="white"
              />
            </div>
          ) : (
            <div className="rounded-full border-2 border-secondary1 p-4 opacity-0 duration-1000 hover:opacity-100">
              {' '}
              <GoPlay size={50} onClick={() => setPlaying(true)} fill="white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playbutton;
