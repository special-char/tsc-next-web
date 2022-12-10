import React from 'react';
import '@/styles/employeeCerti.css';

type Props = {};
const CertificateData = [
  {
    title: 'Lorem ipsum dolor sit amet.',
    issuingOrganization: 'Lorem ipsum dolor',
    issueDate: '08-12-2022',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    issuingOrganization: 'Lorem ipsum dolor',
    issueDate: '08-12-2022',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    issuingOrganization: 'Lorem ipsum dolor',
    issueDate: '08-12-2022',
  },
];

const EmployeeCertificates = (props: Props) => {
  return (
    <section className="employeeCerti">
      <div className="employeeCerti__main">
        <div className="employeeCerti__content">
          <div className="employeeCerti__content-part">
            <h2 className=" w-20 hover:w-40 hover:duration-200">
              Certificates
            </h2>
          </div>
          <div className="flex-[2]">
            <ul id="list " className="employeeCerti__list">
              {CertificateData.map((val) => {
                return (
                  <li className="flex items-center gap-4 ">
                    <div>
                      <h3>{val.title}</h3>
                      <p>{val.issuingOrganization}</p>
                      <p>{val.issueDate}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeCertificates;
