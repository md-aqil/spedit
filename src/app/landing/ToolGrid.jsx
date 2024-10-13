import React from 'react';

const ToolGrid = () => {
  const tools = Array(11).fill('Tool 1');

  return (
    <div className="flex relative flex-col items-center px-20 pt-1.5 pb-96 mt-8 w-full text-xl font-bold leading-none text-center text-lime-500 max-w-[1153px] min-h-[550px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ac25b55c557d09cc7160c0dfdb39b5ba09935a1b5f423952c3706a3c0e57e4a?apiKey=b4d1b9e87b084579b1e2475047caf617&"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col mb-0 max-w-full w-[884px]">
      <ul className="flex flex-wrap gap-2 max-w-[900px] justify-center gap-y-5">
  <li className="px-10 py-3 text-lime-300 border border-gray-500 rounded-full font-light">Tool 1</li>
  <li className="px-10 py-3 text-lime-300 border border-gray-500 rounded-full font-light">Tool 1</li>
  <li className="px-10 py-3 text-lime-300 border border-gray-500 rounded-full font-light">Tool 1</li>
  <li className="px-10 py-3 text-lime-300 border border-gray-500 rounded-full font-light">Tool 1</li>
  <li className="px-10 py-3 text-lime-300 border border-gray-500 rounded-full font-light">Tool 1</li>
  <li className="px-10 py-3 text-lime-300 border border-gray-500 rounded-full font-light">Tool 1</li>
  <li className="px-10 py-3 text-lime-300 border border-gray-500 rounded-full font-light">Tool 1</li>
  <li className="px-10 py-3 text-lime-300 border border-gray-500 rounded-full font-light">Tool 1</li>
  <li className="px-10 py-3 text-lime-300 border border-gray-500 rounded-full font-light">Tool 1</li>
  <li className="px-10 py-3 text-lime-300 border border-gray-500 rounded-full font-light">Tool 1</li>
</ul>

      </div>
    </div>
  );
};

export default ToolGrid;