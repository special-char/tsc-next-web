import React from 'react';
import Git from '@/public/icons/github.svg';
import Html from '@/public/icons/html-5.svg';
import Css from '@/public/icons/css.svg';
import JavaScript from '@/public/icons/javascript.svg';
import ReactJS from '@/public/icons/react.svg';
import NodeJS from '@/public/icons/nodejs.svg';
import AngularJS from '@/public/icons/angularjs.svg';
import MongoDb from '@/public/icons/mongodb.svg';
import PostGresql from '@/public/icons/postgresql.svg';
import GraphQl from '@/public/icons/graphql.svg';
import PHP from '@/public/icons/php.svg';
import Flutter from '@/public/icons/flutter-icon (1).svg';

const technologies = [
  {
    id: '1',
    icon: <Git />,
    text: 'GitHub',
  },
  {
    id: '2',
    icon: <Html />,
    text: 'HTML5',
  },
  {
    id: '3',
    icon: <Css />,
    text: 'CSS3',
  },
  {
    id: '4',
    icon: <JavaScript />,
    text: 'JavaScript',
  },
  {
    id: '5',
    icon: <ReactJS />,
    text: 'ReactJS',
  },
  {
    id: '6',
    icon: <NodeJS />,
    text: 'NodeJS',
  },
  {
    id: '7',
    icon: <MongoDb />,
    text: 'MongoDb',
  },
  {
    id: '8',
    icon: <PostGresql />,
    text: 'PostgreSQL',
  },
  {
    id: '9',
    icon: <GraphQl />,
    text: 'GraphQL',
  },
  {
    id: '10',
    icon: <AngularJS />,
    text: 'AngularJS',
  },
  {
    id: '11',
    icon: <PHP />,
    text: 'PHP',
  },
  {
    id: '12',
    icon: <Flutter />,
    text: 'Flutter',
  },
];

const Technolgy = () => {
  return (
    <section className="px-container pb-24">
      <h2 className="pb-8">Technologies We offer IT Training & Job on</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-Fit,minmax(100px,1fr))',
          gap: '5vw',
        }}
      >
        {technologies.map((val) => {
          return (
            <div key={val.id}>
              <div className="aspect-square w-full text-center shadow-dark">
                {val.icon}
                <h3>{val.text}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technolgy;
