import { useState } from "react";
import styles from "../../styles/styles.js";

const FAQPage = () => {
  return (
      <Faq />
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleActiveTab = (tab) => {
    setActiveTab(activeTab === tab ? 0 : tab);
  };

  const renderIcon = (isActive) => (
    isActive ? (
      <svg
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    )
  );

  const faqData = [
    {
      question: "What is your return policy?",
      answer: "If you're not satisfied with your purchase, we accept returns within 30 days of delivery. To initiate a return, please email us at support@myecommercestore.com with your order number and a brief explanation of why you're returning the item."
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order by clicking the tracking link in your shipping confirmation email, or by logging into your account on our website and viewing the order details."
    },
    // Add more FAQ data here
  ];

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div className="border-b border-gray-200 pb-4" key={index}>
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleActiveTab(index + 1)}
            >
              <span className="text-lg font-medium text-gray-900">
                {faq.question}
              </span>
              {renderIcon(activeTab === index + 1)}
            </button>
            {activeTab === index + 1 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
