import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const Card = ({ imageSrc, title, quests, categories }) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 px-3.5 py-4 bg-white rounded-xl border border-solid border-stone-300">
      <div className="flex gap-2 justify-center items-center self-center rounded-lg bg-neutral-500 h-[37px] min-h-[37px] w-[37px]">
        <img
          loading="lazy"
          srcSet={`${imageSrc}`}
          className="object-contain self-stretch my-auto aspect-square w-[37px]"
        />
      </div>
      <div className="mt-3 text-sm font-bold leading-none text-neutral-800 max-md:ml-2">
        {title}
      </div>
      <div className="self-center text-xs leading-none text-neutral-800">
        {quests} Quests
      </div>
      <div className="self-start mt-4 text-xs leading-none text-neutral-500">
        Categories
      </div>
      <div className="flex gap-0.5 items-center self-start mt-1.5 text-xs font-bold leading-none text-black whitespace-nowrap">
        {categories.map((category, index) => (
          <div
            key={index}
            className="overflow-hidden gap-2 self-stretch px-1.5 py-1 my-auto bg-lime-500 rounded border border-black border-solid"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

const SpaceList = React.forwardRef((props, ref) => { // Accept ref as a prop
  const spaces = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/83331a72f68fc4a65ea8bf8ae82c5c6bd96f395fa342c2d9079187e584a9f760",
      title: "Space Name 1",
      quests: 50,
      categories: ["Edu", "Options"]
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/911bca0958be6ba3300ea44e7e5b502d8100a5900c614607b49391ad2413be31",
      title: "Space Name 2",
      quests: 30,
      categories: ["Tech", "Development"]
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/911bca0958be6ba3300ea44e7e5b502d8100a5900c614607b49391ad2413be31",
      title: "Space Name 3",
      quests: 40,
      categories: ["Health", "Wellness"]
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/911bca0958be6ba3300ea44e7e5b502d8100a5900c614607b49391ad2413be31",
      title: "Space Name 4",
      quests: 25,
      categories: ["Art", "Creativity"]
    },
  ];

  return (
    <Swiper
      ref={ref} // Attach ref to Swiper
      slidesPerView={6}
      spaceBetween={10}
      navigation
      modules={[Navigation]} 
      className="mySwiper3"
    >
      {spaces.map((space, index) => (
        <SwiperSlide key={index}>
          <Card
            imageSrc={space.imageSrc}
            title={space.title}
            quests={space.quests}
            categories={space.categories}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default SpaceList;