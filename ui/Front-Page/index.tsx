import React from 'react';
import ShareIcon from '@/public/icons/share-icon.svg';
import ThumsIcon from '@/public/icons/thumbs-icon.svg';
import ITService from '@/public/icons/IT SERVICE VECTOR.svg';
import Traning from '@/public/icons/TRANING.svg';
import Left from '@/public/icons/left-icon.svg';
import Right from '@/public/icons/right-icon.svg';
import Image from 'next/image';

// const FrontPage = () => {
//   return (
//     <section className="">
//       <div className="grid md:h-screen w-full md:grid-cols-2 lg:grid-cols-[1fr,50px,50px,1fr]">
//         <div className="flex items-center justify-center bg-secondary3 px-8 lg:px-12 py-4">

//           <div className=" bg-secondary2 p-4">
//             <div>SpecialChar PVT LTD</div>
//             <h2>IT Service</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
//               eligendi eaque fuga saepe et eveniet
//             </p>
//             <div className="relative grid grid-cols-2">
//               <div>
//                 <button className="secondary pb-12 pt-4">Show More</button>
//                 <div className="flex items-center gap-4">
//                   <hr className="w-[90%]" />
//                   <ShareIcon className="h-6 w-6 fill-neutral-100" />
//                   <ThumsIcon className="h-6 w-6 fill-neutral-100" />
//                 </div>
//               </div>
//               <div className="absolute lg:-bottom-24 lg:-right-28 md:-right-20 md:-bottom-20 -right-12 -bottom-12 ">
//                 <ITService className="lg:h-60 lg:w-80 md:w-60 md:h-44 w-36 h-36 " />
//               </div>
//             </div>
//           </div>

//         </div>
//         <div className='lg:flex justify-center items-center bg-secondary3 hidden lg:block'>
//             <Left className="w-6 h-6"/>
//           </div>
//           <div className='lg:flex justify-center items-center bg-primary hidden lg:block'>
//             <Right className="w-6 h-6"/>
//           </div>

//         <div className="flex items-center justify-center bg-primary px-8 lg:px-12 py-4">

//           <div className=" bg-neutral-500 p-4">
//             <div>SpecialChar Pvt Ltd</div>
//             <h2>Traning</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
//               eligendi eaque fuga saepe et eveniet
//             </p>
//             <div className="relative grid grid-cols-2">
//               <div>
//                 <button className="secondary pb-12 pt-4">Show More</button>
//                 <div className="flex items-center gap-4">
//                   <hr className="w-[90%] " />
//                   <ShareIcon className="h-6 w-6 fill-neutral-100" />
//                   <ThumsIcon className="h-6 w-6 fill-neutral-100" />
//                 </div>
//               </div>
//               <div className="absolute lg:-bottom-24 lg:-right-16 md:-right-12 md:-bottom-20 -right-12 -bottom-12 ">
//                 <Traning className="lg:h-60 lg:w-60 md:w-44 md:h-44 w-36 h-36 " />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FrontPage;
//---------------------------------------------working---------------------------
// const FrontPage = () => {
//   return (
//     <section className="cursor-pointer">
//       <div className="flex max-md:flex-col w-full md:h-screen ">
//         <div className="relative group flex flex-1 items-center justify-center bg-secondary5 hover:bg-secondary5/80 px-8 py-4 duration-300 hover:flex-[5] lg:px-12 ">
//           <Image src={"/images/it.png"} alt='bg-image' height={650} width={650} className='-z-10 absolute -top-10 -right-56'/>
//           <div className=" bg-gradient-to-r from-secondary2/75 to-secondary2/0 p-4 rounded-xl">
//             <div>SpecialChar PVT LTD</div>
//             <h2>IT Service</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
//               eligendi eaque fuga saepe et eveniet
//             </p>
//             <div className="relative grid grid-cols-2">
//               <div>
//                 <button className="secondary pb-12 pt-4">Show More</button>
//                 <div className="flex items-center gap-4">
//                   <hr className="w-[90%]" />
//                   <ShareIcon className="h-6 w-6 fill-neutral-100" />
//                   <ThumsIcon className="h-6 w-6 fill-neutral-100" />
//                 </div>
//               </div>
//               <div className="absolute -bottom-12 -right-12 md:-bottom-20 md:-right-20 lg:-bottom-24 lg:-right-28 ">
//                 <ITService className="h-56 w-56 md:h-44 md:w-60 lg:h-60 lg:w-80 " />
//               </div>
//             </div>
//           </div>
//           <div className="hidden items-center justify-center group-hover:hidden lg:flex">
//             <Left className="h-6 w-6" />
//           </div>
//         </div>

//         <div className="group flex flex-1 items-center justify-center bg-primary hover:bg-primary/80 px-8 py-4  duration-300 hover:flex-[5] lg:px-12">
//           <div className="hidden items-center justify-center bg-primary group-hover:hidden lg:flex">
//             <Right className="h-6 w-6" />
//           </div>
//           <div className=" bg-neutral-500 p-4">
//             <div>SpecialChar Pvt Ltd</div>
//             <h2>Traning</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
//               eligendi eaque fuga saepe et eveniet
//             </p>
//             <div className="relative grid grid-cols-2">
//               <div>
//                 <button className="secondary pb-12 pt-4">Show More</button>
//                 <div className="flex items-center gap-4">
//                   <hr className="w-[90%] " />
//                   <ShareIcon className="h-6 w-6 fill-neutral-100" />
//                   <ThumsIcon className="h-6 w-6 fill-neutral-100" />
//                 </div>
//               </div>
//               <div className="absolute -bottom-12 -right-12 md:-bottom-20 md:-right-12 lg:-bottom-24 lg:-right-16 ">
//                 <Traning className="h-36 w-36 md:h-44 md:w-44 lg:h-60 lg:w-60 " />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

//----------------------------------

// const FrontPage = () => {
//   return (
//     <div className='flex h-screen'>
//       <div className="group flex-1 bg-secondary3">
//         <div className="w-full bg-secondary3 duration-300 group-hover:hidden">
//         <div className="relative z-20 flex-1 duration-300 hover:flex-[6]">
//           <Image src={ITService} alt="it" fill className="object-cover" />
//         </div></div>

//       </div>
//       <div className="group flex-1 bg-primary">
//         <div className="w-full bg-primary duration-300 group-hover:hidden  ">
//         <div className="relative flex-1 bg-primary duration-300 hover:flex-[6] z-20">
//           <Image src={Traning} alt="training" fill className="object-cover" />
//         </div></div>
//       </div>
//     </div>
//   );
// };
const FrontPage = () => {
  return (
    <section className="cursor-pointer">
      { <div className="flex max-md:flex-col w-full md:h-screen ">
        <div className="relative group flex flex-1 items-center justify-center bg-secondary5 hover:bg-secondary5/80 px-8 py-4 duration-300 hover:flex-[5] lg:px-12 ">
          <Image src={"/images/it.png"} alt='bg-image' height={650} width={650} className='-z-10 absolute -top-10 -right-56'/>
          <div className="bg-gradient-to-r from-secondary2/75 to-secondary2/0 p-4 rounded-xl">
            <div>SpecialChar PVT LTD</div>
            <h2>IT Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              eligendi eaque fuga saepe et eveniet
            </p>
            <div className="relative grid grid-cols-2">
              <div>
                <button className="secondary pb-12 pt-4">Show More</button>
                <div className="flex items-center gap-4">
                  <hr className="w-[90%]" />
                  <ShareIcon className="h-6 w-6 fill-neutral-100" />
                  <ThumsIcon className="h-6 w-6 fill-neutral-100" />
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 md:-bottom-20 md:-right-20 lg:-bottom-24 lg:-right-28 ">
                <ITService className="h-56 w-56 md:h-44 md:w-60 lg:h-60 lg:w-80 " />
              </div>
            </div>
          </div>
          <div className="hidden items-center justify-center group-hover:hidden lg:flex">
            <Left className="h-6 w-6" />
          </div>
        </div>

        <div className="reletive group flex flex-1 items-center justify-center bg-primary hover:bg-primary/80 px-8 py-4 duration-300 hover:flex-[5] lg:px-12">
        <Image src={"/images/training.png"} height={650} width={650}  alt='bg-image' className='-z-10 absolute top-12 -right-64 '/>
        <div className="hidden items-center justify-center group-hover:hidden lg:flex">
            <Right className="h-6 w-6" />
          </div>
          <div className=" bg-neutral-500 p-4 rounded-xl">
            <div>SpecialChar Pvt Ltd</div>
            <h2>Traning</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              eligendi eaque fuga saepe et eveniet
            </p>
            <div className="relative grid grid-cols-2">
              <div>
                <button className="secondary pb-12 pt-4">Show More</button>
                <div className="flex items-center gap-4">
                  <hr className="w-[90%] " />
                  <ShareIcon className="h-6 w-6 fill-neutral-100" />
                  <ThumsIcon className="h-6 w-6 fill-neutral-100" />
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 md:-bottom-20  lg:-bottom-24">
                <Traning className="h-36 w-36 md:h-44 md:w-44 lg:h-60 lg:w-60 " />
              </div>
            </div>
          </div>
        </div>
      </div> }

      {/* ------------------------------------------------------------------------ */}

      {/* <main className="flex overflow-hidden">
        <div className=" group flex-1 bg-secondary5/80 duration-500 ease-in-out hover:flex-[3] ">
          <div className="delay-500 duration-700 ease-in-out" />
          <div className="relative h-screen opacity-0 duration-700 ease-in-out hover:opacity-10 overflow-hidden">
            <Image
              src={'/images/it.png'}
              alt="left"
              height={700}
              width={700}
              className="absolute -right-48 top-0 -z-10 object-cover"
            />
          </div>
          <div className='bg-secondary2/75 flex items-center justify-center h-40 w-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          </div>
        </div>

        <div className="bg-primary/80 group flex-1 duration-500 ease-in-out hover:flex-[2] ">
          <div className=" delay-500 duration-700 ease-in-out" />
          <div className="relative h-screen opacity-0 duration-700 ease-in-out hover:opacity-10 overflow-hidden">
            <Image
              src={'/images/training.png'}
              alt="left"
              height={700}
              width={700}
              className="absolute -right-52 -top-10 -z-10 object-cover"
            />
          </div>
        </div>
            
      </main> */}
    </section>
  );
};
export default FrontPage;
