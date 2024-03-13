import React from 'react';

const data = [
  'Hands-On Experience: In the IT and software industry, practical experience is invaluable. Our program allows you to work on real-world projects, giving you a chance to apply your theoretical knowledge in a practical setting.',
  'Industry-Relevant Skills: We focus on teaching you the latest industry trends and technologies, ensuring that you are up-to-date with the skills that employers are looking for.',
  'Mentorship: You’ll have access to experienced mentors who will guide you throughout the training, providing insights, advice, and support to help you succeed.',
  'Networking Opportunities: Connect with professionals and peers in the industry, expanding your network and building valuable relationships that can lead to future job opportunities.',
  'Paid Training: We understand that starting your career can be financially challenging. That’s why we offer a paid training program, so you can earn while you learn.',
];

const data1 = [
  'Programming Languages: Learn popular programming languages like JavaScript, Python, PHP and more, and become proficient in coding and software development.',
  'Web Development: Master front-end and back-end development, including HTML, CSS, JavaScript, and frameworks like React and Node.js.',
  'Database Management: Gain expertise in SQL and other databases, essential for building robust software applications.',
  'Project Management: Develop essential project management skills to plan, execute, and deliver successful IT projects.',
  'Soft Skills: Improve your communication, teamwork, and problem-solving skills, making you a well-rounded IT professional.',
  'Certifications: Prepare for industry-recognized certifications to boost your resume and increase your job prospects.',
  'Job Placement Assistance: Receive support in finding job placements after completing the program, including resume building, interview preparation, and job search assistance.',
  'Type of Training: The fees can vary based on whether you are pursuing a Short/Longer-term training',
];

const ListItems = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const Content = () => (
  <section id="/resources" className="relative px-container py-24 md:py-32">
    <div className="px-4">
      <div>
        <h3>
          Why Choose Paid Freshers & Project Training? With The Special
          Character
        </h3>
        <ListItems items={data} />
      </div>
      <div>
        <h3>Program Highlights:</h3>
        <h4 className="mb-2 text-base font-semibold text-neutral-800 sm:text-lg">
          Our IT/Software Freshers & Project Training program covers a wide
          range of topics and includes the following highlights:
        </h4>
        <ListItems items={data1} />
        <div>
          <p>
            Project Training program. Gain the experience, skills, and
            confidence you need to excel in this competitive industry. Join us
            and take the first step towards a rewarding and successful career in
            IT and software development. Your future starts here!
          </p>
          <p>
            Eligibility: Our program is open to individuals with varying levels
            of experience, from beginners to those with some IT background. We
            value diversity and believe that a mix of perspectives enriches our
            learning environment.
          </p>
          <h5>
            Don’t miss out on this opportunity to jumpstart your IT and software
            career with our Freshers
          </h5>
        </div>
      </div>
    </div>
  </section>
);

export default Content;
