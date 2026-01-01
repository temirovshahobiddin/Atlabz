import React from "react";
import Accordion from "../../Accordion";

interface FAQCardProps {
  question: string;
  answer: string;
}

interface FAQProps {
  faq: FAQCardProps[];
}

const FAQ = ({ faq }: FAQProps) => {
  return (
    <div id="faq" className="flex flex-col gap-[30px]  w-full mt-[60px] xl:mt-[150px] max-md:mt-20 max-sm:mt-16">
      <h1 className="title-1">Частые вопросы</h1>
      <div className="flex flex-col gap-2.5">
        {faq.map((item, idx) => (
          <Accordion key={idx} title={item.question} text={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
