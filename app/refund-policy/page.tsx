import React from 'react';


const RefundPolicy = () => {
  const refundDetails = [
    "The course or service has not been fully consumed or completed.",
    "The request for a refund is made within 30 days of the original purchase date.",
    "The reason for the refund is a legitimate concern, such as technical issues or unmet expectations."
  ];

  return (
    <section className='px-container py-16' id='#refundpolicy'>
      <h1>Refund Policy</h1>

      <p>
        Thank you for choosing our IT education technology services. We want to ensure you are satisfied with your purchase. Please read our refund policy below:
      </p>

      <h2>Refund Eligibility</h2>
      <ul>
        {refundDetails.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>

      <h2>How to Request a Refund</h2>
      <p>
        To request a refund, please contact our customer support team at support@example.com with the following information:
      </p>
      <ul>
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
        If you have any questions about our refund policy, please contact us at support@example.com.
      </p>
    </section>
  );
};

export default RefundPolicy;
