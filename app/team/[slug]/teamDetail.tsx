import IndividualTeacher from 'app/training/individualteacher';
import React from 'react';
import '@/styles/teamDetail.css';
import Button from '@/ui/Button';

type Props = {};

const TeamDetails = (props: Props) => {
  return (
    <>
      <section className="teamDetail">
        <div className="bg-wrapper relative -z-20 h-[426px] overflow-hidden bg-neutral-700">
          <div className="shape-1 lg:-left-22  absolute -top-16 -left-24 -z-10 h-40 w-40 rounded-full bg-secondary3 md:-top-24 md:-left-32 md:h-64 md:w-64 lg:-top-96 lg:h-[573px] lg:w-[573px]"></div>
          <div className="shape-2 absolute bottom-0 -right-44 -z-10 h-72 w-72 rounded-full bg-secondary2 md:-bottom-2 md:-right-28 md:h-64 md:w-64 lg:-bottom-96 lg:-right-24 lg:h-[573px] lg:w-[573px]"></div>
        </div>
        <div className="details absolute top-40 md:top-72">
          <section id="individualteacher" className="individualteacher">
            <div className="individualteacher__content">
              <div className="individualteacher__content__card">
                <div className="avatar placeholder w-48 items-center overflow-hidden md:w-56">
                  <div>
                    <img
                      src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
                      alt="Kathie Corl"
                    />
                  </div>
                </div>
                <div className="individualteacher__card">
                  <div className="individualteacher__content__card__body">
                    <div className="chip chip--white !bg-primary !py-3 !px-6 !text-neutral-100">
                      Design
                    </div>
                    <h2 className="individualteacher__content__card__title ">
                      Kathie Corl
                    </h2>
                  </div>
                  <p className="individualteacher__content__card__desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempora voluptas ipsam deserunt illo nihil eos.
                  </p>
                  <Button as="button" variant="primary">
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className=" teamDetail__desc">
          <div className="flex ">
            <h2 className="text-3xl md:text-5xl">About</h2>
            <h2 className="pl-1 text-3xl md:text-5xl"> Kathie Corl</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            viverra praesent felis consequat pellentesque turpis et quisque
            platea. Eu, elit ut nunc ac mauris bibendum nulla placerat. Sagittis
            sit eu sit massa sapien, risus diam. In lorem eu sed euismod laoreet
            urna, feugiat et. Euismod sem purus rutrum in. Tortor varius a
            bibendum nisl et tellus. Aliquet elit senectus iaculis netus
            gravida.
          </p>
        </div>
      </section>
    </>
  );
};

export default TeamDetails;
