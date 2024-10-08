/**
 * This code was generated by Builder.io.
 */
import * as React from "react";

function NavBar() {
  return (
    <header className="flex flex-wrap items-center px-16 py-4 w-full border-b border-solid bg-stone-950 border-b-neutral-800 min-h-[53px] max-md:px-5 max-md:max-w-full">
      <div className="self-stretch my-auto w-16 text-base font-black text-lime-500">
        SPEDIT
      </div>
      <div className="flex flex-col flex-1 shrink justify-center items-center self-stretch pl-8 my-auto text-base whitespace-nowrap basis-0 min-w-[240px] text-neutral-500 max-md:max-w-full">
        <div className="flex gap-4 justify-between items-start w-[91px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b94dde9ffe8931d4eb318995a66ebe80b0ad27faf67ec5d11c8bb11572887cd?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div>Search</div>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center self-stretch my-auto w-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3a4fc06c812d4efca6d49cc5770710894e017523147678f30b0d980b0c8a596?apiKey=b4d1b9e87b084579b1e2475047caf617&"
          alt=""
          className="object-contain self-stretch my-auto w-4 aspect-square"
        />
      </div>
    </header>
  );
}

export default NavBar;
