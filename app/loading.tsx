import { BannerSkeleton } from './banner';
import { CategorySkeleton } from './category';
import { CoursesSkeleton } from './courses';
import { EducationSkeleton } from './education';
import Footer from './footer';
import { GrowCareerSkeleton } from './growcareer';
import { HeaderSkeleton } from './header';
import { LeadersSkeleton } from './leaders';
import { PerksSkeleton } from './perks';
import { SideNavSkeleton } from './sideNav';
import { TestimonialSkeleton } from './testimonial';

export default function Loading() {
  return (
    <div>
      <HeaderSkeleton />
      <main>
        <BannerSkeleton />
        <CoursesSkeleton />
        <PerksSkeleton />
        <LeadersSkeleton />
        <GrowCareerSkeleton />
        <EducationSkeleton />
        <CategorySkeleton />
        <TestimonialSkeleton />
      </main>
      <Footer />
    </div>
  );
}
