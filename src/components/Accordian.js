import { useState, useRef, useEffect } from 'react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openIndex === index) {
          ref.style.height = `${ref.scrollHeight}px`;
        } else {
          ref.style.height = '0px';
        }
      }
    });
  }, [openIndex]);

  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <div key={index} className={`rounded-xl ${openIndex === index ? 'bg-white' : 'bg-[#EFF5F7]'} accordian-shadow transition-all ease-out duration-500`}>
          <div
            className={`flex justify-between items-center p-4 ${openIndex === index ? 'pb-3' : ''} cursor-pointer`}
            onClick={() => handleToggle(index)}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <svg
              className={`w-6 h-6 transform transition-transform duration-500 ${
                openIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>

          {/* Conditionally render the border between title and content when open */}
          {openIndex === index && (
            <div className="px-4">
              <div className='border-t border-gray'></div>
            </div>
          )}

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className={`overflow-hidden transition-all duration-500 ease-in-out`}
            style={{ height: '0px' }}
          >
            <div className="p-4 pt-3 bg-gray-50 text-gray text-sm">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
