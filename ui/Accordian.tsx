type AccordianType = {
  id: number;
  title: string;
  description: string;
};

type Props = {
  data: [AccordianType];
};

const Accordian = ({ data }: Props) => {
  return (
    <>
      {data.map((val) => (
        <details className="rounded-2xl md:py-8">
          <summary>{val.attributes.question}</summary>
          <p>{val.attributes.answer}</p>
        </details>
      ))}
    </>
  );
};

export default Accordian;
