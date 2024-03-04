import React from 'react';


const RefundPolicy = () => {
  const refundDetails = [
    "The course or service has not been fully consumed or completed.",
    "The request for a refund is made within 30 days of the original purchase date.",
    "The reason for the refund is a legitimate concern, such as technical issues or unmet expectations."
  ];

  return (
    <section className='px-4 md:px-container py-32' id='#refundpolicy'>
      <h1>Refund Policy - Specialchar Pvt. Ltd.</h1>

      <p>
        Thank you for choosing our IT education technology services. We want to ensure you are satisfied with your purchase. Please read our refund policy below:
      </p>

      <h2>Refund Eligibility</h2>
      <ul className='px-4'>
        {refundDetails.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>

      <h2>How to Request a Refund</h2>
      <p>
        To request a refund, please contact our customer support team at <a href='mailto:contact@thespecialcharacter.com'>contact@thespecialcharacter.com</a> with the following information:
      </p>
      <ul className='px-4'>
        <li>Your full name and contact information</li>
        <li>Order number</li>
        <li>Reason for the refund request</li>
      </ul>

      <h2>Refund Processing</h2>
      <p>
        Once your refund request is received and approved, we will process the refund within 5-7 business days. The refund will be issued to the original payment method.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about our refund policy, please contact us at <a href='mailto:contact@thespecialcharacter.com'>contact@thespecialcharacter.com</a>
      </p>
    </section>
  );
};

export default RefundPolicy;
