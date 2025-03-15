import React from "react";

const FAQ = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="mt-8 space-y-6">
          {[
            {
              question: "What are the check-in and check-out times?",
              answer: "Check-in is from 2 PM, and check-out is by 11 AM.",
            },
            {
              question: "Do you offer airport shuttle service?",
              answer: "Yes, we provide complimentary airport transfers for all guests.",
            },
            {
              question: "Are pets allowed in the hotel?",
              answer: "Yes, we have pet-friendly rooms available upon request.",
            },
          ].map((faq, index) => (
            <details
              key={index}
              className="group p-4 bg-white rounded-lg shadow-md transition-all duration-300"
            >
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
                {faq.question}
                <span className="text-green-600 group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
