'use client';

import EventCard from '@/ui/EventCard';
import Features from '@/ui/features';
import React, { useState } from 'react';
import { EventEntity } from 'types/types';

type Props = {
    events: EventEntity[];
};
type ChipsType = { children: string; onClick?: () => void };

const AllEvents = ({ events }: Props) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const chips = events.reduce(
        (acc: ChipsType[], event) => {
            const children = event.attributes?.category?.data?.attributes?.title;

            if (children && !acc.some((x) => x.children === children)) {
                return [
                    ...acc,
                    {
                        children,
                        onClick: () => {
                            setSelectedCategory(children || 'All');
                        },
                    },
                ];
            }
            return acc;
        },
        [
            {
                children: 'All',
                onClick: () => {
                    setSelectedCategory('All');
                },
            },
        ] as ChipsType[],
    );
    return (
        <div>
            <Features
                title="All Events"
                chips={chips}
                selectedCategory={selectedCategory}
            />
            <div className="event_Card">
                {events.map((data) => (
                    <EventCard data={data} />
                ))}
            </div>
        </div>
    );
};

export default AllEvents;
