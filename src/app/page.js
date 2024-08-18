import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center pb-14 bg-slate-950 h-[100vh]">
      <h2 className="text-4xl text-white max-md:max-w-full mt-10 ml-8">
        <span className="font-bold">Welcome to </span>Spedit
      </h2>
      <a
        href="./landing"
        className="flex overflow-hidden gap-4 justify-center items-center mt-10  px-9 py-3.5 text-base whitespace-nowrap bg-lime-500 rounded-md"
        tabIndex="0"
        role="button"
      >
        <span className="self-stretch my-auto">Explore Spedit</span>
      </a>
    </div>
  );
}

export default Home;
