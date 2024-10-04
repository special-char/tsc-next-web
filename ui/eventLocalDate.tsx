'use client';
import React from 'react';
import ClockSvg from '@/public/icons/clock.svg';
import format from 'date-fns/format';
import { ComponentCommonAdress } from 'types/types';

const ics = require('ics');

type Props = {
  eventStartDate: string;
  eventEndDate: string;
  location: ComponentCommonAdress;
  title: string;
  description: string;
};

const EventLocalDate = ({
  eventStartDate,
  eventEndDate,
  location,
  title,
  description,
}: Props) => {
  const startDate = [
    new Date(eventStartDate).getFullYear(),
    new Date(eventStartDate).getMonth() + 1,
    new Date(eventStartDate).getDate(),
    new Date(eventStartDate).getHours(),
    new Date(eventStartDate).getMinutes(),
  ];
  const endDate = [
    new Date(eventEndDate).getFullYear(),
    new Date(eventEndDate).getMonth() + 1,
    new Date(eventEndDate).getDate(),
    new Date(eventEndDate).getHours(),
    new Date(eventEndDate).getMinutes(),
  ];
  const event = {
    start: startDate,
    end: endDate,
    title: title,
    description: description,
    location: location?.city,
    url: 'https://thespecialcharacter.com/',
    // geo: { lat: location?.latitude, lon: location?.longitude },
  };

  const downloadICS = () => {
    ics.createEvent(event, (error, value) => {
      if (error) {
        console.log(error);
        return;
      }
      const blob = new Blob([value], { type: 'text/calendar' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title}.ics`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div>
      <div
        onClick={downloadICS}
        style={{ cursor: 'pointer' }}
        className="events__svg"
      >
        <ClockSvg className="w-6" />
        <time>{`${format(new Date(eventStartDate), 'EEEE')} ${format(
          new Date(eventStartDate),
          'p',
        )}  - ${format(new Date(eventEndDate), 'p')}`}</time>
      </div>
    </div>
  );
};

export default EventLocalDate;
