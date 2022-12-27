import { FaqEntityResponseCollection } from 'types/types';

export type FAQType = () => Promise<{
  data: {
    faqs: FaqEntityResponseCollection;
  };
}>;

export const getFaqData: FAQType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
            faqs{
              data{
                id
                attributes{
                  question
                  answer
                }
              }
            }
          }`,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return await res.json();
  } catch (error) {}
};
