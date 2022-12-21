import '@/styles/testimonial.css';
import Carousal from '@/ui/Carousal';
import { getTestimonialData } from '@/lib/getTestimonials';
import { HomeTestimonial } from 'types/types';
import Link from 'next/link';
import Button from '@/ui/Button';
import TestimonialCard from '@/ui/TestimonialCard';

export const TestimonialSkeleton = () => {
  return (
    <section id="Testimonial" className="testimonial animate-pulse">
      <h2 className="testimonial__header font-cursive">
        What our students say about us
      </h2>
      <Carousal>
        {[1, 2, 3].map((testimonial: any) => {
          //   const { avatar, rating, quote, name, designation, company } =
          //     testimonial.attributes as Testimonial;
          //   const { url, alternativeText } = avatar?.data
          //     ?.attributes as UploadFile;
          return (
            <div
              className="testimonial__card card"
              key={testimonial.id}
              style={{
                maxWidth: 768,
              }}
            >
              <div className="card__image testimonial__card__image">
                <div></div>
              </div>
              <div className="card__body testimonial__card__body">
                <div></div>
                <p className="card__desc font-cursive">
                  "Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint"
                </p>
                <h4 className="font-cursive">Katherine Cutts</h4>
                <p className="card__desc font-cursive">
                  Junior Designer at Facebook
                </p>
              </div>
            </div>
          );
        })}
      </Carousal>
      <div className="testimonial__content">
        {[1, 2, 3, 4].map((number) => (
          <div>
            <h3 className="testimonial__title font-cursive">100,000+</h3>
            <p className="font-cursive">Five-star course reviews</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="btn btn--primary font-cursive">Explore Courses</div>
      </div>
    </section>
  );
};

const Testimonial = async () => {
  const testimonialsData = await getTestimonialData();

  if (!testimonialsData) return null;

  const testimonialsInfo = testimonialsData.data.testimonials.data;
  const { title, numbers, btn } = testimonialsData.data.homeTestimonial.data
    ?.attributes as HomeTestimonial;

  return (
    <section id="Testimonial" className="testimonial">
      <h2 className="testimonial__header">{title}</h2>
      <Carousal>
        {testimonialsInfo.map((testimonial) => {
          return (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          );
        })}
      </Carousal>
      <div className="testimonial__content">
        {numbers?.map((number) => (
          <div>
            <h3 className="testimonial__title">{number?.title}</h3>
            <p className="text-center">{number?.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button as={Link} href={`${btn?.url}`} variant="primary">
          {btn?.text}
        </Button>
      </div>
    </section>
  );
};
export default Testimonial;
