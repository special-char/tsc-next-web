import React from 'react';
import '@/styles/employeeCerti.css';

type Props = {};
const CertificateData = [
  {
    title: 'Lorem ipsum dolor sit amet.',
    issuingOrganization: 'Organization',
    issueDate: '08-12-2022',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    issuingOrganization: 'Organization',
    issueDate: '08-12-2022',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    issuingOrganization: 'Organization',
    issueDate: '08-12-2022',
  },
];

const EmployeeCertificates = (props: Props) => {
  return (
    <section className="employeeCerti">
      <div className="employeeCerti__main">
        <div className="employeeCerti__content">
          <h2>Certificates</h2>
          <div className="flex-[2]">
            <ul id="list " className="employeeCerti__list">
              {CertificateData.map((val) => {
                return (
                  <li className="flex items-center gap-4 ">
                    <div>
                      <h3>{val.title}</h3>
                      <p className="mb-2">{val.issuingOrganization}</p>
                      <p className="mb-2">{val.issueDate}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <hr className="col-span-full" />
    </section>
  );
};

export default EmployeeCertificates;
