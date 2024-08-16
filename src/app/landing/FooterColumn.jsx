import React from 'react';

function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col flex-1 shrink basis-0">
      <div className="flex flex-col pb-4 w-full">
        <div className="flex items-center w-full text-sm tracking-normal leading-6 text-gray-300 whitespace-nowrap">
          <div className="flex-1 shrink self-stretch my-auto w-full">
            {title}
          </div>
        </div>
        <div className="flex overflow-hidden flex-col mt-4 w-full">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-start mt-4 w-full text-sm tracking-normal leading-6 text-gray-400 whitespace-nowrap">
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterColumn;