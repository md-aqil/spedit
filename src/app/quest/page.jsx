'use client'

import React, { useRef, useState } from 'react';
import Sidebar from "../copy-trading/components/Sidebar";
import Header from "../copy-trading/components/Header";
import UserDetails from "./components/UserDetails";
import Image from 'next/image';
import QuestImg from "../../assets/Quest.png"
import FeaturedCard from "./components/FeaturedCard";
import QuestCard from "./components/QuestCard";
import QuestCardSmall from "./components/QuestCardSmall";
import SpaceList from "./components/SpaceList";



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';




import { Autoplay, Pagination, Navigation ,EffectCoverflow, EffectCards} from 'swiper/modules';

function Quest() {

  const swiperNavPrevRef = React.useRef(null);
  const swiperNavNextRef = React.useRef(null);
  const progressCircle = React.useRef(null);
  const progressContent = React.useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const swiperRef = useRef(null); // Create a ref for the Swiper

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Navigate to the previous slide
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Navigate to the next slide
    }
  };



  const questData = {
    questName: 'Epic Adventure',
    currentProgress: 3,
    totalProgress: 5,
    currentPoints: 12,
    totalPoints: 20,
    description: 'Complete the epic adventure to earn awesome rewards!',
    rewardPoints: 500,
    endDate: '2024-10-01',
    boostMultiplier: 2,
    brandName: "Brand Name"
  };

  return (
    <div className="flex  flex-col pb-20 bg-stone-50">
      {/* <Header /> */}
      <div className="flex flex-1  main-body">
        <Sidebar />
        <main className="flex flex-col transition-all duration-300 p-5 bg-stone-50  main-container">

    <div className="flex  flex-col w-full ">
     
     <UserDetails />

      <section className='w-full flex gap-5 max-md:flex-col'>
        <main className='flex flex-col  w-[75%]'>
        <Image
                  loading="lazy"
                  src={QuestImg}
                  className="object-cover   size-full"
                />


<div className="flex flex-col justify-center px-6 py-5 mt-3 w-full bg-white rounded-2xl shadow-md">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full mb-5">
        <div className="self-stretch my-auto text-base font-bold leading-none text-black">
          Featured
        </div>

        <div className="flex gap-4 justify-between items-center self-stretch my-auto">
          {/* Custom Prev Button */}
          <span ref={swiperNavPrevRef} className="icon-arrow-square-left text-2xl cursor-pointer"></span>

          {/* Custom Next Button */}
          <span ref={swiperNavNextRef} className="icon-arrow-right text-2xl cursor-pointer"></span>
        </div>
      </div>
      <div className="w-full overflow-hidden">
      <Swiper
        effect={'cards'}

        cardsEffect={{
          perSlideOffset: 15,
          perSlideRotate: 0,
          slideShadows:false
        }}
        
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        className="mySwiper"

        navigation={{
          prevEl: swiperNavPrevRef.current, // Custom prev button
          nextEl: swiperNavNextRef.current, // Custom next button
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
        }}
      >
        <SwiperSlide>
        <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide> <FeaturedCard /></SwiperSlide>
        <SwiperSlide> <FeaturedCard /></SwiperSlide>
        <SwiperSlide> <FeaturedCard /></SwiperSlide>
       
      </Swiper>
      </div>

     
    </div>

    <div className="flex flex-col justify-center px-6 py-6 mt-10 w-full bg-white rounded-2xl shadow-sm">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full -mb-5 ">
        <div className="self-stretch my-auto text-base font-bold leading-none text-stone-950">
          New
        </div>
        <div className="flex gap-6 items-center self-stretch my-auto">
          <div className="flex gap-4 items-center self-stretch my-auto">
            {/* Custom Prev Button for Swiper */}
            <span className="icon-arrow-square-left text-2xl cursor-pointer swiper-button-prev-1"></span>
            {/* Custom Next Button for Swiper */}
            <span className="icon-arrow-right text-2xl cursor-pointer swiper-button-next-1"></span>
          </div>
          <div className="self-stretch my-auto text-sm font-semibold leading-none text-neutral-800">
            View all
          </div>
        </div>
      </div>

      <div className="mt-5 w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev-1',
            nextEl: '.swiper-button-next-1',
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = '.swiper-button-prev-1';
            swiper.params.navigation.nextEl = '.swiper-button-next-1';
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="mySwiper2"
        >
          <SwiperSlide>
            <QuestCardSmall
              questName={questData.questName}
              currentProgress={questData.currentProgress}
              totalProgress={questData.totalProgress}
              currentPoints={questData.currentPoints}
              totalPoints={questData.totalPoints}
              description={questData.description}
              rewardPoints={questData.rewardPoints}
              endDate={questData.endDate}
              boostMultiplier={questData.boostMultiplier}
              brandName={questData.brandName}
            />
          </SwiperSlide>
          <SwiperSlide>
            <QuestCardSmall
              questName={questData.questName}
              currentProgress={questData.currentProgress}
              totalProgress={questData.totalProgress}
              currentPoints={questData.currentPoints}
              totalPoints={questData.totalPoints}
              description={questData.description}
              rewardPoints={questData.rewardPoints}
              endDate={questData.endDate}
              boostMultiplier={questData.boostMultiplier}
            />
          </SwiperSlide>
          <SwiperSlide>
            <QuestCardSmall
              questName={questData.questName}
              currentProgress={questData.currentProgress}
              totalProgress={questData.totalProgress}
              currentPoints={questData.currentPoints}
              totalPoints={questData.totalPoints}
              description={questData.description}
              rewardPoints={questData.rewardPoints}
              endDate={questData.endDate}
              boostMultiplier={questData.boostMultiplier}
            />
          </SwiperSlide>
          <SwiperSlide>
            <QuestCardSmall
              questName={questData.questName}
              currentProgress={questData.currentProgress}
              totalProgress={questData.totalProgress}
              currentPoints={questData.currentPoints}
              totalPoints={questData.totalPoints}
              description={questData.description}
              rewardPoints={questData.rewardPoints}
              endDate={questData.endDate}
              boostMultiplier={questData.boostMultiplier}
            />
          </SwiperSlide>
          <SwiperSlide>
            <QuestCardSmall
              questName={questData.questName}
              currentProgress={questData.currentProgress}
              totalProgress={questData.totalProgress}
              currentPoints={questData.currentPoints}
              totalPoints={questData.totalPoints}
              description={questData.description}
              rewardPoints={questData.rewardPoints}
              endDate={questData.endDate}
              boostMultiplier={questData.boostMultiplier}
            />
          </SwiperSlide>
          <SwiperSlide>
            <QuestCardSmall
              questName={questData.questName}
              currentProgress={questData.currentProgress}
              totalProgress={questData.totalProgress}
              currentPoints={questData.currentPoints}
              totalPoints={questData.totalPoints}
              description={questData.description}
              rewardPoints={questData.rewardPoints}
              endDate={questData.endDate}
              boostMultiplier={questData.boostMultiplier}
            />
          </SwiperSlide>

          {/* Additional SwiperSlides */}
        </Swiper>
      </div>
    </div>

    <div className="flex flex-col px-6 py-5 mt-6 w-full bg-white rounded-2xl shadow-md">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <div className="self-stretch my-auto text-base font-bold leading-none text-stone-950">
          Spaces you might like
        </div>
        <div className="flex gap-6 items-center self-stretch my-auto">
          <div className="flex gap-4 items-center self-stretch my-auto">
            {/* Custom Prev Button for Swiper */}
            <span className="icon-arrow-square-left text-2xl cursor-pointer swiper-button-prev-3" onClick={handlePrevClick}></span>
            {/* Custom Next Button for Swiper */}
            <span className="icon-arrow-right text-2xl cursor-pointer swiper-button-next-3" onClick={handleNextClick}></span>
          </div>
          <div className="self-stretch my-auto text-sm font-semibold leading-none text-neutral-800">
            View all
          </div>
        </div>
      </div>
      <div className='mt-5'>

        <SpaceList ref={swiperRef} /> {/* Pass the ref to SpaceList */}
      </div>
    </div>

 
    <div className="flex flex-col self-center px-6 py-5 mt-6 max-w-full bg-white rounded-2xl shadow-md w-full">

  <div className="gap-10 self-stretch text-base font-bold leading-none text-stone-950 max-md:max-w-full">
    Explore Quests
  </div>


  <div className="flex items-center gap-4 self-start px-6 py-3 mt-6 text-sm rounded-lg bg-stone-50 text-neutral-800 ">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8fb6151794df7d7334a97c00fcc4d64d10ebb81005aff05044d43b863617c09?apiKey=b4d1b9e87b084579b1e2475047caf617&"
      className="object-contain shrink-0 aspect-square w-[18px]"
    />
    <input 
      type="text" 
      placeholder="Search Instruments" 
      className="w-full bg-transparent focus:outline-none text-neutral-800 placeholder-opacity-40"
    />
  </div>
</div>



      <div className="flex  flex-col justify-center self-center px-6 py-5 max-w-full bg-white rounded-2xl shadow-md w-full mt-5">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[814px] max-md:max-w-full">
            <div className="flex gap-4 items-center self-stretch my-auto">
              <div className="flex justify-center items-center self-stretch my-auto w-12 h-12 rounded-lg bg-neutral-500 min-h-[48px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/25bf3d17ed3a96f4945d1e0781f485d041a7f5d1aae58b50e6f5bdac4adb5e57?apiKey=b4d1b9e87b084579b1e2475047caf617&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/25bf3d17ed3a96f4945d1e0781f485d041a7f5d1aae58b50e6f5bdac4adb5e57?apiKey=b4d1b9e87b084579b1e2475047caf617&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25bf3d17ed3a96f4945d1e0781f485d041a7f5d1aae58b50e6f5bdac4adb5e57?apiKey=b4d1b9e87b084579b1e2475047caf617&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/25bf3d17ed3a96f4945d1e0781f485d041a7f5d1aae58b50e6f5bdac4adb5e57?apiKey=b4d1b9e87b084579b1e2475047caf617&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/25bf3d17ed3a96f4945d1e0781f485d041a7f5d1aae58b50e6f5bdac4adb5e57?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25bf3d17ed3a96f4945d1e0781f485d041a7f5d1aae58b50e6f5bdac4adb5e57?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/25bf3d17ed3a96f4945d1e0781f485d041a7f5d1aae58b50e6f5bdac4adb5e57?apiKey=b4d1b9e87b084579b1e2475047caf617&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/25bf3d17ed3a96f4945d1e0781f485d041a7f5d1aae58b50e6f5bdac4adb5e57?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  className="object-contain flex-1 shrink w-12 aspect-square basis-0"
                />
              </div>
              <div className="flex flex-col justify-center self-stretch my-auto w-24">
                <div className="text-sm font-bold leading-none text-neutral-800">
                  Space Name
                </div>
                <div className="flex gap-1 items-center self-start mt-2 text-xs font-semibold leading-none text-stone-400">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a98e08b51213e30bd48f2224fb9019dec51741c24d0da0a69d9fa86318a3dd5f?apiKey=b4d1b9e87b084579b1e2475047caf617&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a98e08b51213e30bd48f2224fb9019dec51741c24d0da0a69d9fa86318a3dd5f?apiKey=b4d1b9e87b084579b1e2475047caf617&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a98e08b51213e30bd48f2224fb9019dec51741c24d0da0a69d9fa86318a3dd5f?apiKey=b4d1b9e87b084579b1e2475047caf617&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a98e08b51213e30bd48f2224fb9019dec51741c24d0da0a69d9fa86318a3dd5f?apiKey=b4d1b9e87b084579b1e2475047caf617&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a98e08b51213e30bd48f2224fb9019dec51741c24d0da0a69d9fa86318a3dd5f?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a98e08b51213e30bd48f2224fb9019dec51741c24d0da0a69d9fa86318a3dd5f?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a98e08b51213e30bd48f2224fb9019dec51741c24d0da0a69d9fa86318a3dd5f?apiKey=b4d1b9e87b084579b1e2475047caf617&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a98e08b51213e30bd48f2224fb9019dec51741c24d0da0a69d9fa86318a3dd5f?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                    className="object-contain shrink-0 gap-0 self-stretch my-auto aspect-[2.72] w-[38px]"
                  />
                  <div className="self-stretch my-auto">
                    <span className="text-neutral-800">2k </span>
                    <span className="text-xs  text-stone-400">/ 50k</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3.5 items-center self-stretch my-auto text-sm font-semibold leading-none text-neutral-800 w-[164px]">
              <div className="self-stretch my-auto whitespace-nowrap">50 Quests</div>
              <div className="flex flex-col self-stretch my-auto">
                <div className="flex gap-1 items-center whitespace-nowrap">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/654f3ccc2332feca1b5e059671826b1c87f3c1770af2cac118867dae66ce25ff?apiKey=b4d1b9e87b084579b1e2475047caf617&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f3ccc2332feca1b5e059671826b1c87f3c1770af2cac118867dae66ce25ff?apiKey=b4d1b9e87b084579b1e2475047caf617&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f3ccc2332feca1b5e059671826b1c87f3c1770af2cac118867dae66ce25ff?apiKey=b4d1b9e87b084579b1e2475047caf617&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f3ccc2332feca1b5e059671826b1c87f3c1770af2cac118867dae66ce25ff?apiKey=b4d1b9e87b084579b1e2475047caf617&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f3ccc2332feca1b5e059671826b1c87f3c1770af2cac118867dae66ce25ff?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f3ccc2332feca1b5e059671826b1c87f3c1770af2cac118867dae66ce25ff?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f3ccc2332feca1b5e059671826b1c87f3c1770af2cac118867dae66ce25ff?apiKey=b4d1b9e87b084579b1e2475047caf617&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f3ccc2332feca1b5e059671826b1c87f3c1770af2cac118867dae66ce25ff?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[1.08] w-[13px]"
                  />
                  <div className="self-stretch my-auto">15000 pts</div>
                </div>
              </div>
            </div>
          </div>
          

          
          <div className="mt-5 w-full flex gap-5">

                <QuestCardSmall
        questName={questData.questName}
        currentProgress={questData.currentProgress}
        totalProgress={questData.totalProgress}
        currentPoints={questData.currentPoints}
        totalPoints={questData.totalPoints}
        description={questData.description}
        rewardPoints={questData.rewardPoints}
        endDate={questData.endDate}
        boostMultiplier={questData.boostMultiplier}
      />
       <QuestCardSmall
        questName={questData.questName}
        currentProgress={questData.currentProgress}
        totalProgress={questData.totalProgress}
        currentPoints={questData.currentPoints}
        totalPoints={questData.totalPoints}
        description={questData.description}
        rewardPoints={questData.rewardPoints}
        endDate={questData.endDate}
        boostMultiplier={questData.boostMultiplier}
      />
       <QuestCardSmall
        questName={questData.questName}
        currentProgress={questData.currentProgress}
        totalProgress={questData.totalProgress}
        currentPoints={questData.currentPoints}
        totalPoints={questData.totalPoints}
        description={questData.description}
        rewardPoints={questData.rewardPoints}
        endDate={questData.endDate}
        boostMultiplier={questData.boostMultiplier}
      />
                
                </div>

        </div>
      </div>

        </main>



        <aside className='flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full'>
        <div className="flex flex-col leading-none max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bf26541c2e692b13e2cc2a11a5b315bfadca038af858669ed5efe9378ee0e81a?apiKey=b4d1b9e87b084579b1e2475047caf617&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf26541c2e692b13e2cc2a11a5b315bfadca038af858669ed5efe9378ee0e81a?apiKey=b4d1b9e87b084579b1e2475047caf617&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf26541c2e692b13e2cc2a11a5b315bfadca038af858669ed5efe9378ee0e81a?apiKey=b4d1b9e87b084579b1e2475047caf617&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf26541c2e692b13e2cc2a11a5b315bfadca038af858669ed5efe9378ee0e81a?apiKey=b4d1b9e87b084579b1e2475047caf617&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf26541c2e692b13e2cc2a11a5b315bfadca038af858669ed5efe9378ee0e81a?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf26541c2e692b13e2cc2a11a5b315bfadca038af858669ed5efe9378ee0e81a?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf26541c2e692b13e2cc2a11a5b315bfadca038af858669ed5efe9378ee0e81a?apiKey=b4d1b9e87b084579b1e2475047caf617&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf26541c2e692b13e2cc2a11a5b315bfadca038af858669ed5efe9378ee0e81a?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                className="object-contain w-full shadow-sm aspect-[0.82]"
              />
              <div className="flex flex-col justify-center mt-6 w-full">
                <div className="flex overflow-hidden gap-5 justify-between items-start pt-4 pl-4 w-full rounded-lg shadow-sm bg-neutral-800">
                  <div className="flex flex-col">
                    <div className="text-base font-extrabold text-white">
                      Live Voter
                    </div>
                    <div className="flex flex-col mt-9 w-[51px]">
                      <div className="flex gap-1 items-center w-full text-xs whitespace-nowrap text-stone-400">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                          className="object-contain shrink-0 self-stretch my-auto aspect-[1.1] w-[11px]"
                        />
                        <div className="self-stretch my-auto">Reward</div>
                      </div>
                      <div className="gap-1 self-stretch w-full text-sm font-semibold text-white">
                        100 pts
                      </div>
                    </div>
                  </div>
                  <div className="flex shrink-0 mt-3 bg-lime-500 rounded-full h-[110px] w-[101px]" />
                </div>
                <div className="flex overflow-hidden flex-col px-4 py-4 mt-6 w-full rounded-lg shadow-sm bg-neutral-800">
                  <div className="flex gap-1.5 w-full text-base font-extrabold text-white">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/09378fb4565b60f24445dcd680d00b07005a999d07c56238bbaa58eddbf81b90?apiKey=b4d1b9e87b084579b1e2475047caf617&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/09378fb4565b60f24445dcd680d00b07005a999d07c56238bbaa58eddbf81b90?apiKey=b4d1b9e87b084579b1e2475047caf617&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09378fb4565b60f24445dcd680d00b07005a999d07c56238bbaa58eddbf81b90?apiKey=b4d1b9e87b084579b1e2475047caf617&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/09378fb4565b60f24445dcd680d00b07005a999d07c56238bbaa58eddbf81b90?apiKey=b4d1b9e87b084579b1e2475047caf617&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/09378fb4565b60f24445dcd680d00b07005a999d07c56238bbaa58eddbf81b90?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09378fb4565b60f24445dcd680d00b07005a999d07c56238bbaa58eddbf81b90?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/09378fb4565b60f24445dcd680d00b07005a999d07c56238bbaa58eddbf81b90?apiKey=b4d1b9e87b084579b1e2475047caf617&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/09378fb4565b60f24445dcd680d00b07005a999d07c56238bbaa58eddbf81b90?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                      className="object-contain shrink-0 my-auto w-1.5 aspect-[0.46]"
                    />
                    <div className="self-stretch">Daily Events</div>
                  </div>
                  <div className="flex gap-5 justify-between mt-5">
                    <div className="flex flex-col">
                      <div className="flex gap-1 items-center w-full text-xs whitespace-nowrap text-stone-400">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1017ddc4fada729a27e59b3002b320059a924c37d3f142ec48319718c5c903c8?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                          className="object-contain shrink-0 self-stretch my-auto aspect-[1.1] w-[11px]"
                        />
                        <div className="self-stretch my-auto">Reward</div>
                      </div>
                      <div className="gap-1 self-stretch w-full text-sm font-semibold text-white">
                        500 pts
                      </div>
                    </div>
                    <div className="flex flex-col my-auto text-xs">
                      <div className="flex gap-1 items-center w-full text-stone-400">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f687b3d5c1a881834e29d95d31e9a31be281b31305f7947d85c3f89374eccbb5?apiKey=b4d1b9e87b084579b1e2475047caf617&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f687b3d5c1a881834e29d95d31e9a31be281b31305f7947d85c3f89374eccbb5?apiKey=b4d1b9e87b084579b1e2475047caf617&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f687b3d5c1a881834e29d95d31e9a31be281b31305f7947d85c3f89374eccbb5?apiKey=b4d1b9e87b084579b1e2475047caf617&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f687b3d5c1a881834e29d95d31e9a31be281b31305f7947d85c3f89374eccbb5?apiKey=b4d1b9e87b084579b1e2475047caf617&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f687b3d5c1a881834e29d95d31e9a31be281b31305f7947d85c3f89374eccbb5?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f687b3d5c1a881834e29d95d31e9a31be281b31305f7947d85c3f89374eccbb5?apiKey=b4d1b9e87b084579b1e2475047caf617&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f687b3d5c1a881834e29d95d31e9a31be281b31305f7947d85c3f89374eccbb5?apiKey=b4d1b9e87b084579b1e2475047caf617&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f687b3d5c1a881834e29d95d31e9a31be281b31305f7947d85c3f89374eccbb5?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                          className="object-contain shrink-0 self-stretch my-auto aspect-[0.75] w-[9px]"
                        />
                        <div className="self-stretch my-auto">
                          Next events in
                        </div>
                      </div>
                      <div className="font-semibold text-right text-white">
                        18:34:22
                      </div>
                    </div>
                  </div>
                  <div className="flex overflow-hidden relative flex-col gap-5 justify-between px-0.5 py-px mt-4 w-full text-xs whitespace-nowrap aspect-[18.833] stroke-[12px] stroke-stone-50 text-neutral-800">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d0cd25b50bffd70ec03814fadc432fc5929395c236262177beb37ee03c204cc?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f8c5d1ac05508d3aa248e4a455bb154d4af3c255b8804a1a71f8f56f14c3c1a?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                      className="object-contain shrink-0 my-auto aspect-[9.35] stroke-[8px] stroke-lime-500 w-[75px]"
                    />
                    <div className="relative">1/3</div>
                  </div>
                </div>
              </div>
            </div>

            
        </aside>

      </section>

     


    </div>

        </main>
      </div>
    </div>
  );
}

export default Quest;
