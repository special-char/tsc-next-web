import React from 'react';
import Image from 'next/image';

type Props = {};

const ProjectData = [
  {
    projectName: 'Lorem ipsum dolor sit amet.',
    role: 'Web Developer',
    categories: [
      {
        title: 'responsive',
      },
    ],
    technologies: [
      {
        title: 'Html',
      },
    ],
  },
];

const EmployeeProject = (props: Props) => {
  return (
    <section className="h-auto w-full py-24">
      <div className="mx-auto flex max-w-7xl flex-col px-4 md:px-6">
        <div className="flex flex-1 flex-col lg:flex-[0.8]">
          <h2 className="w-20  hover:w-28 hover:duration-200">Projects</h2>
        </div>
        <div className="h-full flex-[2]">
          {ProjectData.map((projectDetail, index) => {
            return (
              <>
                <div className="relative flex flex-wrap gap-4">
                  <div className="flex min-w-[250px] flex-1 flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <h3>Project Name</h3>
                      <span className="font-medium text-neutral-700">
                        {projectDetail.projectName}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3>Role</h3>
                      <span className="font-medium text-neutral-700">
                        {projectDetail.role}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3>Category</h3>
                      <span className="font-medium text-neutral-700">
                        {projectDetail.categories.map((val) => (
                          <p>{val.title}</p>
                        ))}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3>Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {projectDetail.technologies.map((val) => {
                          return (
                            <span className="bg-neutral-700 px-3 py-1 text-xs font-medium text-neutral-100">
                              {val.title}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-[0.5] h-[25rem] md:h-[35rem]">
                    <Image
                      src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg"
                      alt="/"
                      fill
                    />
                  </div>
                </div>
                {/* {index !== projectDetail.length - 1 && (
                  <div className="my-12 h-[0.5px] w-full rounded-md bg-neutral-300" />
                )} */}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmployeeProject;
