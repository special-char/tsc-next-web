import React from 'react';
import '@/styles/socialMedia.css';
import Link from 'next/link';
import ClockSvg from '../../public/icons/clock.svg';
import MapSvg from '../../public/icons/map.svg';

interface Props {}

const SocialMedia = (props: Props) => {
  return (
    <section id="SocialMedia" className="SocialMedia">
      <div className="SocialMedia__section">
        <div className="SocialMedia__leftSection ">
          <div className=" ">july</div>
          <div className="__date">24</div>
        </div>

        <div className="SocialMedia__info  ">
          <div className="SocialMedia__RightSection">
            <div className="__rightData">
              <div className="__rightSideData">
                <ClockSvg />
                <h6>Sunday 5:00 pm - 6:00 pm EDT</h6>
                <MapSvg />
                <h6>Los Angeles, LA</h6>
              </div>
              <div className="__dataInfo grid gap-4">
                <h1>Social Media Marketing Masterclass</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliquam id.
                </p>
                <Link href="/" className="btn btn--primary md:w-[42%]">
                  REGISTER TO EVENT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
