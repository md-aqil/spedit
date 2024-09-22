"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import DashboardIcons from "../../components/DashboardIcons";

const TraderStrategyDetails = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/copy-trading/startegy-description");
  };

  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      <Header />
      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 w-full">
          <Sidebar />
          <div className="flex flex-col main-container">
            <DashboardIcons />
            <div className="flex flex-col rounded-none">
              <div
                onClick={handleBackClick}
                className="flex cursor-pointer gap-0.5 items-center self-start text-sm font-semibold leading-none text-neutral-500"
              >
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b66b1d35b539cee75af5c51aa054135a0481171b5c24f2a216347dc4eb28a8b?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  alt="Back arrow"
                  width={14}
                  height={14}
                  className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square cursor-pointer"
                />
                <div className="self-stretch my-auto">
                  <span className="text-neutral-500">Back</span>
                </div>
              </div>
              <div className="flex flex-col items-start px-2 mt-6 w-full text-black max-md:max-w-full">
                <div className="text-xl font-bold leading-none">
                  Trader Strategy Details
                </div>
                <div className="flex flex-wrap gap-10 justify-between items-center mt-11 w-full max-md:mt-10 max-md:max-w-full">
                  <div className="self-stretch my-auto text-base font-bold leading-none">
                    TCPAP| TCS Crude Paired Aggressive Plus
                  </div>
                  <div className="flex items-center self-stretch my-auto">
                    <div className="self-stretch my-auto text-sm leading-none">
                      Monthly Fee :
                    </div>
                    <div className="self-stretch my-auto text-base font-bold leading-none">
                      Free
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-sm leading-none text-zinc-800 max-md:max-w-full">
                  Our goal is to achieve consistent capital appreciation with a
                  target annual return of 6-8%, while maintaining a risk level
                </div>
                <div className="self-stretch mt-2.5 text-sm leading-5 text-zinc-800 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Vitae quis morbi
                  sagittis pharetra. Nisl lacus morbi orci risus mauris. Elit
                  sit senectus sagittis vitae in gravida sociis id. Morbi nam
                  feugiat non cursus aliquet vulputate fames ullamcorper.
                  Interdum eu lacus et mauris lacus quis ridiculus risus vitae.
                  Nulla consequat amet ornare viverra. Diam tempor eu eget nunc
                  gravida. Diam porttitor tristique fermentum habitant. Sed in
                  fermentum vitae at duis.
                  <br />
                  <br />
                </div>
              </div>
              <div className="mt-8 w-full max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                      <div className="ml-3 text-sm leading-none text-zinc-800 max-md:ml-2.5">
                        <span className="font-bold">
                          Here is what you should expect with the strategy
                        </span>
                      </div>
                      <div className="self-stretch mt-2 text-sm leading-5 text-zinc-800 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Vitae quis morbi
                        sagittis pharetra. Nisl lacus morbi orci risus mauris.
                        <br />
                        Elit sit senectus sagittis vitae in gravida sociis id.
                        Morbi nam feugiat non cursus aliquet vulputate fames
                        ullamcorper.
                        <br />
                        Interdum eu lacus et mauris lacus quis ridiculus risus
                        vitae. Nulla consequat amet ornare viverra.
                        <br />
                        Diam tempor eu eget nunc gravida. Diam porttitor
                        tristique fermentum habitant. Sed in fermentum vitae at
                        duis.
                      </div>
                      <div className="mt-12 ml-3 max-w-full w-[482px] max-md:mt-10">
                        <div className="flex gap-5 max-md:flex-col">
                          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col w-full max-md:mt-10">
                              <div className="flex flex-col justify-center self-start">
                                <div className="flex gap-10 items-center self-start whitespace-nowrap h-[38px]">
                                  <div className="flex flex-col self-stretch my-auto rounded">
                                    <div className="text-sm leading-none text-neutral-500">
                                      Capital
                                    </div>
                                    <div className="mt-1.5 text-base font-bold leading-none text-stone-950">
                                      195000
                                    </div>
                                  </div>
                                </div>
                                <div className="flex gap-6 items-center mt-6">
                                  <div className="flex flex-col self-stretch my-auto rounded">
                                    <div className="text-sm leading-none text-neutral-500">
                                      Order Type
                                    </div>
                                    <div className="mt-1.5 text-base font-bold leading-none text-stone-950">
                                      NRML Mkt
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-5 items-center mt-5">
                                <div className="flex flex-col self-stretch my-auto w-[151px]">
                                  <div className="flex flex-col w-full">
                                    <div className="text-sm leading-none text-neutral-500">
                                      Max Stop Loss
                                    </div>
                                    <div className="mt-2 text-base font-bold leading-none text-stone-950">
                                      5%
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-start max-md:mt-10">
                              <div className="flex flex-col self-stretch rounded">
                                <div className="text-sm leading-none text-neutral-500">
                                  Strategy Type
                                </div>
                                <div className="mt-1.5 text-base font-bold leading-none text-stone-950">
                                  Intraday Non Directional
                                </div>
                              </div>
                              <div className="flex flex-col mt-6 rounded">
                                <div className="text-sm leading-none text-neutral-500">
                                  Expected Trades
                                </div>
                                <div className="mt-1.5 text-base font-bold leading-none text-stone-950">
                                  150
                                </div>
                              </div>
                              <div className="flex flex-col mt-6">
                                <div className="text-sm leading-none text-neutral-500">
                                  Profit Target (monthly)
                                </div>
                                <div className="mt-2 text-base font-bold leading-none text-stone-950">
                                  15%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <iframe
                      width="500"
                      height="298"
                      src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="object-contain w-full rounded-none aspect-[1.68] max-md:mt-10 max-md:max-w-full"
                    ></iframe>
                  </div>
                </div>
                <div className="self-center mt-11 text-sm leading-none text-center text-zinc-800 max-md:mt-10">
                  <span className="font-bold">Disclaimer</span>
                </div>
                <div className="self-start mt-2 ml-3.5 text-sm leading-5 text-zinc-800 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Vitae quis morbi
                  sagittis pharetra. Nisl lacus morbi orci risus mauris. Elit
                  sit senectus sagittis vitae in gravida sociis id. Morbi nam
                  feugiat non cursus aliquet vulputate fames ullamcorper.
                  Interdum eu lacus et mauris lacus quis ridiculus risus vitae.
                  Nulla consequat amet ornare viverra. Diam tempor eu eget nunc
                  gravida. Diam porttitor tristique fermentum habitant. Sed in
                  fermentum vitae at duis.
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraderStrategyDetails;
