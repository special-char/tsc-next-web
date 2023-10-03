import React from 'react';
import OKIcon from '@/public/icons/ok.svg';
import Link from 'next/link';

const PlanCard = ({
  coursetype,
  duration,
  description,
  detils,
  notincourse,
}) => (
  <div className="rounded-3xl bg-neutral-300 p-12 shadow-dark">
    <div className="font-semibold text-secondary3">{coursetype}</div>
    <h2 className="pt-2 font-bold">{duration}</h2>
    <p>{description}</p>
    {detils.map((detail, index) => (
      <div className="flex items-center gap-4 py-3" key={index}>
        <OKIcon />
        <p className="font-semibold">{detail}</p>
      </div>
    ))}
    {notincourse.map((notIncluded, index) => (
      <div className="flex items-center gap-4 py-3" key={index}>
        <OKIcon fill="gray" />
        <p className="font-semibold text-neutral-500 line-through">
          {notIncluded}
        </p>
      </div>
    ))}
    <Link href="/contact">
      <button className="btn btn--primary m mt-8 px-20">Get Started</button>
    </Link>
  </div>
);

const PlanCards = ({ data }) => (
  <section
    className="px-container py-24"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '5vw',
    }}
  >
    {data.map((val, index) => (
      <PlanCard key={index} {...val} />
    ))}
  </section>
);

export default PlanCards;

// import React from 'react';
// import OKIcon from '@/public/icons/ok.svg';
// import Link from 'next/link';

// const PlanCards = ({ data }) => {
//   return (
//     <section
//       className="px-container py-24"
//       style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-Fit,minmax(200px,1fr))',
//         gap: '5vw',
//       }}
//     >
//       {data.map((val, index) => {
//         return (
//           <div
//             key={index}
//             className="rounded-3xl bg-neutral-300 p-12 shadow-dark"
//           >
//             <div className="font-semibold text-secondary3 ">
//               {val.coursetype}
//             </div>
//             <h2 className="pt-2 font-bold">{val.duration}</h2>
//             <p>{val.description}</p>
//             {val.detils.map((val, index) => {
//               return (
//                 <div className="flex items-center gap-4 py-3 " key={index}>
//                   <OKIcon />

//                   <p className="font-semibold">{val}</p>
//                 </div>
//               );
//             })}

//             {val.notincourse.map((val, index) => {
//               return (
//                 <div className="flex items-center gap-4 py-3" key={index}>
//                   <OKIcon fill="gray" />
//                   <p className="font-semibold text-neutral-500 line-through">
//                     {val}
//                   </p>
//                 </div>
//               );
//             })}

//             <Link href={'/contact'}>
//               <button className="btn btn--primary mt-8 px-20">
//                 Get Started
//               </button>
//             </Link>
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// export default PlanCards;
