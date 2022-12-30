import '@/styles/testimonial.css';
import Carousal from '@/ui/Carousal';
import { getTestimonialData } from '@/lib/getTestimonials';
import { HomeTestimonial } from 'types/types';
import Link from 'next/link';
import Button from '@/ui/Button';
import TestimonialCard, { TestimonialCardSkeleton } from '@/ui/TestimonialCard';

export const TestimonialSkeleton = () => {
  return (
    <section id="Testimonial" className="testimonial animate-pulse">
      <h2 className="testimonial__header font-cursive">
        What our students say about us
      </h2>
      <Carousal>
        {[1, 2, 3].map((testimonial: any) => {
          return <TestimonialCardSkeleton key={testimonial} />;
        })}
      </Carousal>
      <div className="testimonial__content">
        {[1, 2, 3, 4].map((number) => (
          <div key={number}>
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
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              style={{
                maxWidth: '48rem',
              }}
            />
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
