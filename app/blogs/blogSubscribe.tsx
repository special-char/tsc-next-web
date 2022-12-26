'use client';
import '@/styles/blogSubscribe.css';
import Newsletter from '@/ui/Newsletter';

export const BlogSubscribeSkeleton = () => {
  return (
    <section className="blogSubscribe">
      <div className="blogSubscribe__body animate-pulse">
        <div className="blogSubscribe__content relative font-cursive">
          <h2 className="blogSubscribe__title font-cursive">
            Subscribe to our weekly newsletter today!
          </h2>
          <div className="newsletter z-10">
            <input
              className="newsletter__input"
              placeholder="Enter your email"
              type="text"
              name=""
              id=""
            />
            <div className="btn btn--primary "></div>
          </div>
          <div className="absolute rounded-full bg-secondary2 md:-top-80  md:-right-52 md:h-[400px] md:w-[400px] lg:-top-60  lg:-right-20"></div>
          <div className="absolute -left-64 -bottom-64 h-[380px]  w-[380px] rounded-full bg-secondary3 md:-left-52 lg:-bottom-56 lg:-left-32"></div>
        </div>
      </div>
    </section>
  );
};
type Props = {};

const BlogSubscribe = (props: Props) => {
  return (
    <section className="blogSubscribe">
      <div className="blogSubscribe__body ">
        <div className="blogSubscribe__content">
          <h2 className="blogSubscribe__title">
            Subscribe to our weekly newsletter today!
          </h2>
          <Newsletter btnClass="btn--white md:btn--primary" />
          {/* <div className="newsletter z-10">
            <input
              className="newsletter__input"
              placeholder="Enter your email"
              type="text"
              name=""
              id=""
            />
            <Button
              as="button"
              variant="primary"
              className="newsletter__btn bg-neutral-700 md:bg-primary"
            >
              Subscribe
            </Button>
          </div> */}
        </div>
        <div className="absolute z-0 rounded-full bg-secondary2  md:-top-80 md:-right-52 md:h-[400px] md:w-[400px]  lg:-top-60 lg:-right-20"></div>
        <div className="absolute -left-64 -bottom-64 z-0  h-[380px] w-[380px] rounded-full bg-secondary3 md:-left-52 lg:-bottom-56 lg:-left-32"></div>
      </div>
    </section>
  );
};

export default BlogSubscribe;
