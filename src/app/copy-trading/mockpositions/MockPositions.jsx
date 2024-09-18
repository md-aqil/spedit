
import React from "react";
import PositionCard from "./PositionCard";
import Image from 'next/image';
import userIcon from "../../../assets/user1.png"; 
import JoinedUsers from "../../../assets/JoinedUsers.png"; 
import avatar from "../../../assets/avatar.jpg"; 


const mockPositionsData = [
  {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47,
    avatarSrc:
      "./avatar.jpg",
    ratingSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5ae64e79badb8d2b3f1be30867e1c1b178baaf830c6a9cc6c2e282dfd9003071?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/831f01e5a05811f097962aeb97852ed541ee3e5c0a6469cb356a815ffbdcb02b?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  // Repeat the above object 5 more times with different image URLs
  {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47,
    avatarSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7c62b7d3f937fbd4b1613119320479795c50ea47f5855156f0fa337c0804bc40?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    ratingSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/baa6c5e4a3143b4b57b60de913356ec4c87f6a0b4b09b832b07a65edb0feb4d5?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f35eb60031bfa9aeaf85e3055c0488ff889a43a40ce5a949e47b5b04349f78e9?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47,
    avatarSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f919e662a59f4d417d9d0e6cd02bc449ce98b53da499acf42d388734223870f7?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    ratingSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ada1a1d28630b8610e5249b9da7a17e54e9ef9211f4232872b833f1048e24bb0?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be8f112e8fda009a434510139394c9874131248f5f533e2d190e2b0c9bac9833?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47,
    avatarSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8ac8533991da1fb375302372e115b455c3a283403d100998ebd1b9b1a9af2d9b?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    ratingSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/551f25136aff2aa3cc6ac5daad68626962543d1f8c146c8aa148ed26ddbe39d9?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8d0514507eab393240b49f6a5fc349d1e680ac224403c698bfe2e37e6855ffc4?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47,
    avatarSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e83b5b95d0ba4e3d1ca4dafcb8b60c90d7d624b6c4fd296a8d4b2a2069304d96?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    ratingSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4e8ee294fb030ee9116a3d470235f957023fd35a1094cf081d36ce95c5db7f76?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/15d673f66ba70d1cfc9a8d531babba8989320e658f316a158c60929c29f92c5b?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47,
    avatarSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7355cf5356c3d0a1d07cfd730dd79a8cf011e28fb41f6da5b14dc83ca9e10d41?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    ratingSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9b778ab8b9d996ff6a83e12077d91e2acfb6717bdb0114572d143e81eb026cbb?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/50e4f1b0898b713e32728c3d50d1ddf170c7a6f350be8b607a528505fb556852?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
];

function MockPositions() {
  return (
    <main className="flex flex-col">
      <header className="flex flex-wrap gap-10 justify-between items-center self-center w-full  max-md:max-w-full">
        <h1 className="self-stretch my-auto text-xl font-bold leading-none text-black">
          Mock Positions
        </h1>
        <nav className="flex gap-4 items-center self-stretch my-auto">
     <span className="aspect-square cursor-pointer icon-firstline text-2xl arrow"></span>
           
        </nav>
      </header>
      <section className="flex flex-wrap gap-3.5 justify-center items-center mt-6 leading-none">
        {mockPositionsData.map((position, index) => (
          <PositionCard key={index} {...position} />
        ))}
      </section>
    </main>
  );
}

export default MockPositions;
