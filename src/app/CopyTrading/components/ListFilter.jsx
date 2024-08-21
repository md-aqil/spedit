import React from 'react';

const ListFilter = () => {
  const headerItems = [
    { label: 'Pnl', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1d49d7e723838e6ea7c074d9651de0fb9aac85c3e04dfd3ae83793b4c64277c8?apiKey=b4d1b9e87b084579b1e2475047caf617&' },
    { label: 'ROI', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa45553dd1d3dbde3be36f15e87f7027ca5231957ffcf80b6e43a97bc2219cab?apiKey=b4d1b9e87b084579b1e2475047caf617&' },
    { label: 'MDD', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/532d19d87299f95c9105d2acedba423ad9b4d3e889889855db2f98c83339a37c?apiKey=b4d1b9e87b084579b1e2475047caf617&' },
    { label: 'AUM', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ebdeb34eca681bfb635496c3e2cd61eb40c5d0bc1c72224401297096e43f29d2?apiKey=b4d1b9e87b084579b1e2475047caf617&' },
    { label: 'Copiers', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2eb02949c5b86271c994feda1ed5c37b2b1f26e7297ba5d5a5f6a5e9ad6594eb?apiKey=b4d1b9e87b084579b1e2475047caf617&' },
  ];

  return (
    <header className="flex flex-wrap gap-5 pt-8  w-full text-base font-semibold leading-none text-center text-black whitespace-nowrap w-full justify-end mr-8 pr-8">
      {headerItems.map((item, index) => (
        <div key={index} className={`flex gap-1.5 items-end justify-end self-stretch px-6 py-3 my-auto bg-white rounded-lg ${index === 0 ? 'border border-solid border-neutral-800 text-neutral-800' : ''} ${item.label === 'Copiers' ? 'w-[120px] pr-2 pl-6' : ''} max-md:px-5`}>
          <div className="self-stretch my-auto">{item.label}</div>
          <img loading="lazy" src={item.icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[2]" />
        </div>
      ))}
    </header>
  );
};

export default ListFilter;