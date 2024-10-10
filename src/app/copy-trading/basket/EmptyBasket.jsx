import React from "react";

function EmptyBasket({ setActiveStep }) {
  return (
    <div className="flex card flex-col px-16 pt-6 pb-12 mx-auto w-full leading-none bg-white rounded-xl max-md:px-5 max-md:mt-1 max-md:max-w-full">
      <div className="flex flex-col self-center -mt-1 max-w-full font-bold text-neutral-800 w-[373px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/243bc672c9c5fa30ec132cdfbbc06d97f87a869dddaa88868665db67d12e2604?apiKey=b4d1b9e87b084579b1e2475047caf617&"
          className="object-contain w-full aspect-[1.36]"
          alt="Empty basket illustration"
        />
        <div className="flex flex-col items-center self-center mt-1.5 w-full max-w-[355px]">
          <p className="text-base">Aww! Your Baskets are empty.</p>
          <button
            className="flex gap-2 justify-center items-center px-3 py-1.5 mt-4 text-sm text-center bg-lime-500 rounded min-h-[36px]"
            onClick={() => setActiveStep("Basket Step 2")}
          >
          +
            <span className="self-stretch my-auto">Add new Basket</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmptyBasket;
