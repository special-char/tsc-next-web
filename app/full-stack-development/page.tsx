import CircleSymbol from '@/public/icons/circle.svg';
import CheckSymbol from '@/public/icons/check.svg';
import ButonArrow from '@/public/icons/buton-arrow.svg';
import Faq from 'app/contact/faq';
import { Suspense } from 'react';
import Leaders, { LeadersSkeleton } from 'app/leaders';

const BonusesList = [
  {
    id: '1',
    title: 'Launch Checklist',
    cost: ' ₹2,500',
  },
  {
    id: '2',
    title: 'Handover Checklist',
    cost: ' ₹3,000',
  },
  {
    id: '3',
    title: 'NDA Document',
    cost: ' ₹2,000',
  },
  {
    id: '4',
    title: 'Speed Testing Analytics',
    cost: ' ₹2,000',
  },
  {
    id: '5',
    title: 'Website Templates',
    cost: ' ₹5,000',
  },
];

const ProgramList = [
  {
    id: '1',
    title: 'Designers',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '2',
    title: 'Developers',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '3',
    title: 'Entrepreneurs',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '4',
    title: 'Product Managers',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '5',
    title: 'Freelancers',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '6',
    title: 'Digital Marketers',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '7',
    title: 'Small Businesses',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '8',
    title: 'Students',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
];

const CheckBoxList = [
  {
    id: '1',
    title:
      'I am a designer who wants to bring designs to life, but sadly doesn’t know how to write code',
  },
  {
    id: '2',
    title: 'I am a Non-Techie who wants to generate a good passive income',
  },
  {
    id: '3',
    title:
      'I am an Entrepreneur who doesn’t want to spend a fortune on website development, but still needs a beautiful website.',
  },
  {
    id: '4',
    title:
      'I am a Marketer who wants to build landing pages superfast, make optimizations superfast, and get audience feedback superfast.',
    cost: ' ₹2,000',
  },
  {
    id: '5',
    title:
      'I am a Product Manager who wants to test out ideas and build MVP(s) without relying on the dev team.',
  },
  {
    id: '6',
    title:
      'I am a Developer who doesn’t want to waste time writing HTML/CSS, and much rather use a tool to generate it for me quickly.',
  },
];

const accordion = [
  {
    id: '1',
    title: 'How does the program work?',
    desc: "It's a structured program with recorded content and resources. Once you purchase the program you will get access to it immediately and you can watch all the videos at your own pace and also complete the assignments included in the same. if you get any doubts, you can ask your question in the discord community and your peer and mentor network will help you out.",
  },
  {
    id: '2',
    title: "Why shouldn't I just learn how to code?",
    desc: 'It is great if you want to learn how to code. However, Webflow offers a range of benefits like speed to market, significantly lower time & cost commitments, & hey, it is a lot easier than coding.',
  },
  {
    id: '3',
    title: 'Will I be working on a real world project in the program?',
    desc: 'Yes, you will be building real-world projects',
  },
  {
    id: '4',
    title:
      'I don’t have an idea that I want to work on. Can I still join the program?',
    desc: 'Not a problem! Once you learn how to use the tool and build some prototypes, ideas will start flowing!',
  },
  {
    id: '5',
    title: 'When will I receive the bonuses?',
    desc: 'You will receive all the bonuses right away once you login into your growthschool account.',
  },
  {
    id: '6',
    title:
      'I made the payment but didn’t receive any confirmation or email from GrowthSchool, what do I do? ',
    desc: 'Well, in most cases it should not happen. Make sure you give us 5-10 minutes in case you don’t receive any emails right away. Even then if you don’t receive anything from us, then please write to hi@growthschool.io and our support team will clarify your problems in 24-48 hours.',
  },
  {
    id: '7',
    title: 'Do I get access to the Webflow tool?',
    desc: "We don't provide any licenses for the Webflow tool. However, it is a free tool for people looking to use it for personal use like Portfolio Building, hypothesis testing etc.",
  },
  {
    id: '8',
    title: 'Can I get a refund?',
    desc: 'No, currently we don’t have a refund policy.',
  },
];

const page = () => {
  return (
    <div>
      <section className="px-container">
        <div className="flex flex-col gap-20 py-20">
          <div className="   flex flex-1 flex-col items-center px-5 md:px-0   ">
            <div className="   ">
              <div className="text-white text-center text-3xl  font-semibold md:text-5xl	lg:px-48">
                <h1>
                  Build Custom Websites like{' '}
                  <span className="font-bold">Apple</span>,
                  <span className="font-bold"> CRED</span> without a single code
                  using <span className="font-bold">Webflow</span> for your{' '}
                  <span className="font-bold">Portfolio! </span>{' '}
                </h1>
              </div>
              <div className="px-5 py-5 text-lg md:text-3xl  lg:px-16 lg:text-2xl">
                <h4 className="text-white px-5  py-5 text-center text-lg  md:text-3xl  lg:px-64 lg:text-2xl ">
                  {' '}
                  <span className="font-bold">Design</span> and{' '}
                  <span className="font-bold">animate</span> highly{' '}
                  <span className="font-bold">responsive</span> custom websites
                  using Webflow and bring your{' '}
                  <span className="font-bold">Portfolio</span> to life
                </h4>
              </div>
            </div>

            <div className="lg:px-60">
              <a
                href="#"
                className="flex items-center justify-center border-none  "
              >
                <img
                  src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/61c2fcf81eb2a4f9fb596161_Playbutton.svg"
                  loading="lazy"
                  alt=""
                  className="absolute w-24  text-center md:w-52 lg:w-52"
                />
                <img
                  src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/61c58cbe7767c1a4306c95ed_C4442T01.jpeg"
                  loading="lazy"
                  alt=""
                  className="rounded-2xl"
                />
              </a>
            </div>
          </div>

          <div className="bg-slate-800  mx-4 flex flex-col justify-between gap-6 rounded-xl py-6 md:mx-10 md:flex-row md:px-6 lg:mx-16 lg:px-12 ">
            <div className=" flex flex-col items-center justify-center   ">
              <h1 className=" from-pink-600 to-indigo-600 flex  items-center bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent ">
                5000+{' '}
              </h1>
              <h2 className=" text-white content-center items-center text-xl font-semibold ">
                Students Trained on Nocode
              </h2>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/61c2fcf81eb2a417e759615c_light-glow.svg"
              loading="lazy"
              alt=""
              className="hidden md:list-item"
            />
            <img
              src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/61c2fcf81eb2a4de5559614c_wf-section-separator.svg"
              loading="lazy"
              alt=""
              className="md:hidden"
            />

            <div className=" flex flex-col items-center justify-center">
              <h1 className=" from-pink-600 to-indigo-600 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent ">
                4+{' '}
              </h1>
              <h2 className=" text-white flex content-center items-center text-xl font-semibold ">
                Projects{' '}
              </h2>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/61c2fcf81eb2a417e759615c_light-glow.svg"
              loading="lazy"
              alt=""
              className="hidden md:list-item "
            />
            <img
              src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/61c2fcf81eb2a4de5559614c_wf-section-separator.svg"
              loading="lazy"
              alt=""
              className="md:hidden"
            />

            <div className=" flex flex-col items-center justify-center">
              <h1 className=" from-pink-600 to-indigo-600 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent">
                ₹4999{' '}
              </h1>
              <h2 className="text-white flex content-center items-center text-xl font-semibold ">
                Projects{' '}
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="px-container">
        <div className=" flex flex-col items-center">
          <div>
            <img
              src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/61c2fcf81eb2a4de5559614c_wf-section-separator.svg"
              loading="lazy"
              alt=""
              class="justify-center"
            />
          </div>

          <div className="grid items-center px-8  py-14 lg:px-28 ">
            <div className="">
              <img
                src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/61c2fcf81eb2a43c03596168_5f2db973311dff83f9829e34_webflow-home-hero%20(1).png"
                loading="lazy"
                alt=""
                class="image-121"
              />
            </div>
            <div className="text-center">
              <h1 className="from-red-300 to-indigo-600 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
                What is Webflow, and why should you care?
              </h1>
            </div>
            <div className=" py-4 text-center">
              <p className="text-white text-base font-normal">
                Webflow is a magical tool that helps normal people like you and
                I, who do not know how to write code, to build beautiful
                websites. We have built websites for India's biggest startups on
                Webflow, and you can do it too. It's not that hard!
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/61c2fcf81eb2a4de5559614c_wf-section-separator.svg"
              loading="lazy"
              alt=""
              className="wflow-section-separating-line"
            />
          </div>
        </div>
      </section>
      <section className="text-white flex flex-col px-container">
        <div>
          <div className="px-5 py-5 text-center">
            <h2 className="text-2xl font-bold md:text-5xl ">
              Who is this program for?
            </h2>
          </div>

          <div className="my-5 grid justify-center gap-6 px-6 md:grid-cols-2">
            {ProgramList.map((val) => (
              <ul key={val.id}>
                <div className="flex items-center gap-4  rounded-3xl bg-[rgba(240,242,255,.1)] px-5 py-8">
                  <div className="relative ">
                    {val.circleIcon}{' '}
                    <span className="from-cyan-500 to-blue-500 absolute right-1 top-2 rounded-full bg-gradient-to-r p-3">
                      {val.checkIcon}
                    </span>
                  </div>
                  <li className="text-2xl font-semibold md:text-3xl">
                    {val.title}
                  </li>
                </div>
              </ul>
            ))}
          </div>

          <div className="flex">
            <button className="mx-6 hidden flex-1 rounded-xl bg-gradient-to-l from-[#ff7373] to-[#491eb8] px-10 py-8 text-3xl font-semibold md:list-item ">
              <div className="flex justify-between">
                <div>Enroll Now</div>
                <div>
                  <ButonArrow />
                </div>
              </div>
            </button>
          </div>

          <p className="px-3 text-center text-sm md:py-5">
            Register before midnight of May 4, 2023, to unlock these bonusses.
            This offer is never heard before.
          </p>
        </div>

        <div>{/* <Separator/> */}</div>
      </section>
      <section className="text-white flex flex-col px-container">
        <div>
          <div className="text-center text-4xl md:px-48">
            <h2>
              {' '}
              Unlock Bonuses Worth{' '}
              <span className="text-6xl font-bold"> ₹20,000 </span>
            </h2>
          </div>

          <div className="my-10 grid justify-center gap-8 px-6 md:grid-cols-3 md:gap-10">
            {BonusesList.map((val) => (
              <ul key={val.id}>
                <div className="items-center gap-4 rounded-3xl bg-[rgba(240,242,255,.1)] px-3 py-6 text-center md:py-16">
                  <li className="mb-4 text-2xl font-bold">{val.title}</li>
                  <li className="bg-gradient-to-l from-[#ff7373] to-[#491eb8] bg-clip-text text-4xl font-bold text-transparent">
                    {val.cost}
                  </li>
                </div>
              </ul>
            ))}
          </div>
        </div>

        <div>{/* <Separator/> */}</div>
      </section>
      <Suspense fallback={<LeadersSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Leaders />
      </Suspense>
      <section className="text-white grid gap-6 px-container md:grid-cols-2">
        <div className="">
          <h2 className="text-4xl font-bold leading-normal">
            Still wondering if the program is for you?
          </h2>
          <p className="my-5">
            Please Check All Boxes, Where Your Answer is YES! , If you checked
            ANY of the boxes above, then this Webflow Web Design Workshop is
            perfect for you😁
          </p>

          <div className="flex">
            <button className="hidden flex-1 rounded-xl bg-gradient-to-l from-[#ff7373] to-[#491eb8] px-10 py-8 text-3xl font-semibold md:list-item ">
              <div className="flex justify-between">
                <div>Enroll Now</div>
                <div>
                  <ButonArrow />
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 text-xl">
          {CheckBoxList.map((val) => (
            <ul key={val.id}>
              <div className=" relative flex items-center rounded-3xl bg-[rgba(240,242,255,.1)] py-6 text-center md:py-10">
                <label>
                  <input
                    type="checkbox"
                    className="absolute left-10 scale-[5]"
                  />
                </label>
                <p className="pl-20 pr-5 text-sm md:text-base">{val.title}</p>
              </div>
            </ul>
          ))}
        </div>
      </section>
      <section className="px-container py-14 lg:py-24">
        <h4 className="text-white flex justify-center text-center text-4xl font-bold lg:mb-24 lg:text-[42px]">
          Meet the Instructor
        </h4>

        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 xl:gap-16">
          <div className="relative flex aspect-[3/3] items-center justify-center lg:p-5">
            {/* <Image src={ProfileImage} alt={ProfileImage} fill /> */}
          </div>

          <div className="flex flex-col items-start lg:p-5">
            <div>
              <h3 className="text-white pb-2 text-xl font-bold">
                Yagnesh Modh
              </h3>
              <div className="text-white pb-6 font-semibold">
                Founder Of The Special Character It Services
              </div>
            </div>
            <div className="max-w-sm text-lg text-[#FFFFFFCC]">
              Hey! I am Yagnesh Modh, a designer turned No-Code entrepreneur and
              I help businesses save precious time and money by building
              software without code.
              <p className="py-6 text-lg text-[#FFFFFFCC]">
                I started India's first No-Code studio(EPYC) along with my bud
                Mayank 👉We've built products for startups without code that
                scaled to become unicorns later.
              </p>
              <div className="text-lg text-[#FFFFFFCC]">
                In the past couple of years, I've trained and mentored 6000+
                students in No-Code, and helped them build their dream products,
                without ever learning to code. EVER!
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="h-full  px-4 py-24 md:px-9 lg:px-60">
        <div className="text-white flex justify-center py-6 text-3xl">
          FAQs: Here’s everything you may ask...
        </div>
        <div className="max-sm:max-w-x flex flex-col gap-4">
          {accordion.map((x) => {
            return (
              <Accordian key={x.id} title={x.title} description={x.desc} />
            );
          })}
        </div>
        <div className="my-4 flex flex-col items-center justify-center ">
          <button className="text-white bg-pink-700 hidden rounded-2xl border px-20 py-6 text-2xl md:block">
            Enroll Now
          </button>
          <div className="text-white my-4 flex text-center">
            Register before midnight of May 4, 2023, to unlock these bonusses.
            This offer is never heard before.
          </div>
        </div>
      </section> */}
      <Faq />
    </div>
  );
};

export default page;
