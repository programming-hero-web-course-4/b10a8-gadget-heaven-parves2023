import { Helmet } from "react-helmet";




const FAQPage = () => {
    const faqs = [
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods including credit cards, PayPal, and bank transfers."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive a tracking number via email."
        },
        {
            question: "What is your return policy?",
            answer: "You can return items within 30 days of receipt for a full refund, provided they are unused and in original packaging."
        },
        {
            question: "Do you offer warranty on products?",
            answer: "Yes, most products come with a manufacturer's warranty. Please check the product details for specific warranty information."
        },
        {
            question: "Can I cancel or modify my order?",
            answer: "Orders can be modified or canceled within the first 24 hours. Please contact customer support for assistance."
        },
        {
            question: "How long does shipping take?",
            answer: "Standard shipping typically takes 3-5 business days. Expedited options are also available at checkout."
        }
    ];

    return (
        <div>
            <Helmet>
        <title>Gadgets | FAQ </title>
      </Helmet>

<div className="mx-auto bg-[#9538E2] space-y-8">
        {/* Header Section */}
        <div className="text-white py-8 text-center rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h1>
          <p className="mt-2 text-lg font-bold text-center mb-8 text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

            
        <div className="max-w-2xl mx-auto p-6">
            {faqs.map((faq, index) => (
                <div className="collapse bg-base-200 mb-4" key={index}>
                    <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
                    <div className="collapse-title text-xl font-medium">
                        {faq.question}
                    </div>
                    <div className="collapse-content">
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default FAQPage;
