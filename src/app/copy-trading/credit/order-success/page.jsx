import React from 'react';

function PricingCard({title, description, price, currency, frequency}) {
  return (
    <div className="flex flex-col justify-center items-start self-stretch p-5 mt-6 w-full rounded-lg border border-solid border-zinc-300">
      <div className="flex gap-3.5 items-center max-w-full min-h-[63px] w-[447px]">

        <div className="flex flex-col self-stretch my-auto">
          <div className="text-base font-bold leading-none text-zinc-900">{title}</div>
          <div className="mt-2 text-xs leading-4 text-ellipsis text-slate-500">{description}</div>
        </div>
        <div className="flex flex-col self-stretch my-auto w-[180px]">
          <div className="flex gap-1 items-center w-full">
            <div className="self-stretch my-auto text-4xl font-semibold text-zinc-900">{currency}{price}</div>
            <div className="self-stretch my-auto text-xs font-light text-slate-600"> / {frequency}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({text, primary = false, onClick}) {
  const primaryStyles = "bg-lime-500 text-stone-950";
  const secondaryStyles = "border border-solid border-neutral-800 text-neutral-800";
  return (
    <button className={`gap-1 self-stretch px-3 py-4 my-auto rounded min-h-[44px] text-sm font-bold leading-none ${primary ? primaryStyles : secondaryStyles}`} onClick={onClick}>
      {text}
    </button>
  );
}

function MyImage({src, alt}) {
  return <img loading="lazy" src={src} alt={alt} className="object-contain max-w-full aspect-square w-[184px]" />;
}

function CombinedComponent() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 bg-white max-md:px-5 max-md:pb-24">
      <div className="flex flex-col items-center max-w-full w-[500px]">
        <MyImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/4184ef094b26fc4ce3d940a4ba25c3b8f3260be1971edc644e12e1fc8b592d95?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="Description of image" />
        <h2 className="mt-4 text-xl font-bold leading-none text-lime-600">
          Your Package has <span className="text-lime-600">Confirmed</span>
        </h2>
        <PricingCard title="Enterprise" description="Ideal for businesses who need personalized services and security for large teams." price="2500" currency="Rs" frequency="Month" />
        <div className="flex gap-4 items-center mt-7 ml-3.5 min-h-[44px]">
          
          <a href='/copy-trading' >Start Exploring</a>

          <Button text="Download Receipt" />
        </div>
      </div>
    </div>
  );
}

export default CombinedComponent;