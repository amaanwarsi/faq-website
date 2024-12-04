import React from "react";
import FAQItem from "./FAQItem";

const FAQList = () => {
  const faqs = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for rapid UI development." },
    { question: "How do I start a React project?", answer: "You can start a React project using `npx create-react-app`." },
    { question: "What is an FAQ?", answer: "FAQ stands for Frequently Asked Questions." },
    { question: "How do I style components in React?", answer: "You can style components using CSS, CSS-in-JS, or frameworks like Tailwind CSS." },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center py-6">FAQs</h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
