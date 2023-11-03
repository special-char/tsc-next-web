"use client";
import React from 'react';
import ClockSvg from '@/public/icons/clock.svg';
import format from 'date-fns/format';

type Props = {
  eventStartDate: string;
  eventEndDate: string;
};

const EventLocalDate = ({ eventStartDate, eventEndDate }: Props) => {
  return (
    <div className="events__svg">
      <ClockSvg className="w-6" />
      <time>{`${format(new Date(eventStartDate), 'EEEE')} ${format(
        new Date(eventStartDate),
        'p',
      )}  - ${format(new Date(eventEndDate), 'p')}`}</time>
    </div>
  );
};

export default EventLocalDate;
