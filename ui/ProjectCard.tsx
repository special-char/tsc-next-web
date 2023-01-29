import React from 'react';
import '@/styles/projectcard.css';
import Image from 'next/image';

type dataType = {
  image_url: any;
  alternativeText: String;
  heading: String;
  description: String;
  isHorizontal: boolean;
}[];

type Props = {
  data: dataType;
};

const ProjectCard = ({ data }: Props) => {
  return (
    <>
      <div className="project_Card">
        {data.map((data) => (
          <div className="project__section">
            <figure className="card__image">
              <Image
                src={`${data.image_url} ?tr=ar-16-9`}
                alt="alt text"
                fill
                sizes="(max-width: 640px) 100vw,
                (max-width: 1024px) 50vw,
                560px"
              />
            </figure>
            <div className="project__body">
              <div className="project__datails ">
                <h3 className="card__title">{data?.projectName}</h3>
                {data?.description && (
                  <p className="card__desc">{data?.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
