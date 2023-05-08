'use client';
import React, { useState, useEffect } from 'react';
import ButonArrow from '../../../public/icons/buton-arrow.svg';

function Timer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date('2023-05-07T00:00:00Z').getTime() - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timerData = [
    { label: 'Days', id: 1, value: time.days },
    { label: 'Hours', id: 1, value: time.hours },
    { label: 'Minutes', id: 1, value: time.minutes },
    { label: 'Seconds', id: 1, value: time.seconds },
  ];
  return (
    <div className="text-white bg-neutral-100 px-4 py-16 md:px-9 lg:px-container">
      <div className="text-center">
        <h2 className="py-6 text-4xl font-semibold">Time is running!</h2>
        <p className="text-base lg:mx-48">
          Grab your spot fast before all the seats fill up, don't miss it. First
          batches will get extra weekly session with the mentors
        </p>
      </div>

      <div className="flex items-center justify-around gap-2 py-6 text-center md:py-12">
        {timerData.map((x) => (
          <div key={x.id}>
            <h2>{x.value}</h2>
            <h4>{x.label}</h4>
          </div>
        ))}
      </div>

      <div className="flex">
        <button className="mx-6 hidden flex-1 rounded-xl bg-gradient-to-l from-[#ff7373] to-[#491eb8] px-10 py-8 text-3xl font-semibold md:list-item ">
          <div className="flex justify-between">
            <div>Enroll Now</div>
            <div>
              <ButonArrow />
            </div>
          </div>
        </button>
      </div>
      <p className="py-2 text-center">
        Register before midnight of <span>May 5, 2023</span>, to unlock these
        bonusses. This offer is never heard before.
      </p>
    </div>
  );
}

export default Timer;
