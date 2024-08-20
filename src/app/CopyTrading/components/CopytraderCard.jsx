import React from 'react';

const CopytraderGrid = () => {
  const copytraderData = [
    {
      name: 'Karishma',
      followers: 502,
      actionType: 'copy',
      pnl: '74,100.23',
      roi: '5.71%',
      aum: '₹74,100.23',
      mdd: '1.27%',
      chartData: 'https://cdn.builder.io/api/v1/image/assets/TEMP/05e984395f7102c5f252bca1179cbaf1da4498262cdab82f1da3a7e8b84d354f?apiKey=b4d1b9e87b084579b1e2475047caf617&',
      period: '7 day'
    },
    {
      name: 'Karishma',
      followers: 502,
      actionType: 'stopPause',
      pnl: '74,100.23',
      roi: '5.71%',
      aum: '₹74,100.23',
      mdd: '1.27%',
      chartData: 'https://cdn.builder.io/api/v1/image/assets/TEMP/720a95e0fabccc540eea9e098dd01be2547a3e07ab775d759419085e72f79a30?apiKey=b4d1b9e87b084579b1e2475047caf617&',
      period: '7 day'
    },
    {
      name: 'Karishma',
      followers: 502,
      actionType: 'copy',
      pnl: '74,100.23',
      roi: '5.71%',
      aum: '₹74,100.23',
      mdd: '1.27%',
      chartData: 'https://cdn.builder.io/api/v1/image/assets/TEMP/11c7b14e9be27244a93da9f771a182f5c7db761148cc3329b134edbd4e2d98db?apiKey=b4d1b9e87b084579b1e2475047caf617&',
      period: '7 day'
    },
    {
      name: 'Karishma',
      followers: 502,
      actionType: 'copy',
      pnl: '74,100.23',
      roi: '5.71%',
      aum: '₹74,100.23',
      mdd: '1.27%',
      chartData: 'https://cdn.builder.io/api/v1/image/assets/TEMP/92181f1e13cf1d67d49695535e3d1ba00b309aea53306b94a45640ab8855c199?apiKey=b4d1b9e87b084579b1e2475047caf617&',
      period: '7 day'
    },
    {
      name: 'Karishma',
      followers: 502,
      actionType: 'copy',
      pnl: '74,100.23',
      roi: '5.71%',
      aum: '₹74,100.23',
      mdd: '1.27%',
      chartData: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4771e9b3495838dee47027c402693d0a4ca822b841032e677c05a4a984c73453?apiKey=b4d1b9e87b084579b1e2475047caf617&',
      period: '7 day'
    },
    {
      name: 'Karishma',
      followers: 502,
      actionType: 'stopPause',
      pnl: '74,100.23',
      roi: '5.71%',
      aum: '₹74,100.23',
      mdd: '1.27%',
      chartData: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b448fd96d29ab8c89d0364ef72f685c61e0f05b6798e2a1b4621849f5f8fcbb?apiKey=b4d1b9e87b084579b1e2475047caf617&',
      period: '7 day'
    }
  ];

  return (
    <div className="flex flex-col items-center leading-none">
      <div className="flex flex-wrap gap-5 items-start pt-8 pb-5 pl-5 max-w-full w-[1165px]">
        {copytraderData.map((trader, index) => (
          <div key={index} className="flex flex-col grow shrink justify-center px-4 py-5 w-72 bg-white rounded-md shadow-sm min-h-[200px] min-w-[240px]">
            <div className="flex flex-col w-full">
              <div className="flex gap-10 justify-between items-center w-full whitespace-nowrap">
                <div className="flex gap-2.5 items-start self-stretch my-auto h-[43px]">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bba9259288bb77aecf6f258a1b4d94e598e654daff91a8933b1ea232336070ed?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt={`${trader.name}'s profile picture`} className="object-contain shrink-0 w-10 rounded-full aspect-square" />
                  <div className="flex flex-col py-1 w-[85px]">
                    <div className="text-base font-bold text-neutral-800">{trader.name}</div>
                    <div className="flex gap-1.5 items-center self-start mt-1.5 text-xs text-neutral-500">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee2bc911c5d31b6e7bd54437578a77505ee3f8b93981d6dbae42fa32dd784ddb?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="Followers icon" className="object-contain shrink-0 gap-0 self-stretch my-auto w-12 aspect-[2.67]" />
                      <div className="self-stretch my-auto">{trader.followers}</div>
                    </div>
                  </div>
                </div>
                {trader.actionType === 'copy' ? (
                  <div className="flex gap-4 items-center self-stretch my-auto text-sm font-bold text-center text-stone-950">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/965f90b34354dbfdde0126edc069b1e895cdee7c30589d01ca89d28feee41a85?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.2] fill-pink-700 stroke-[1px] stroke-stone-950 w-[18px]" />
                    <button className="gap-2 self-stretch p-3 my-auto bg-lime-500 rounded min-h-[38px] w-[76px]">
                      Copy
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-4 items-center self-stretch my-auto text-sm font-bold text-center">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/965f90b34354dbfdde0126edc069b1e895cdee7c30589d01ca89d28feee41a85?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.2] fill-pink-700 stroke-[1px] stroke-stone-950 w-[18px]" />
                    <div className="flex gap-1 items-center self-stretch my-auto">
                      <button className="gap-2 self-stretch p-3 my-auto w-16 text-white bg-pink-700 rounded min-h-[38px]">
                        Stop
                      </button>
                      <button className="gap-2 self-stretch py-3 pr-3 pl-3 my-auto w-16 rounded border border-solid border-neutral-800 min-h-[38px] text-neutral-800">
                        Pause
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-4 justify-between items-end mt-5 w-full">
                <div className="flex flex-col w-[207px]">
                  <div className="flex gap-5 items-center w-full">
                    <div className="flex flex-col self-stretch my-auto w-28">
                      <div className="text-xs text-neutral-500">7D PnL</div>
                      <div className="flex gap-1.5 justify-center items-center py-1.5 mt-1 w-full text-xl font-bold whitespace-nowrap rounded text-stone-950">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/04a4875830827dfe99ab565cab2a22187ca9466b293f09bc752cac3fa30e4846?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square fill-lime-500" />
                        <div className="self-stretch my-auto">{trader.pnl}</div>
                      </div>
                    </div>
                    <div className="flex flex-col self-stretch my-auto w-[79px]">
                      <div className="text-xs text-neutral-500">7D ROI</div>
                      <div className="flex gap-1.5 justify-center items-center mt-1.5 w-full text-xl font-bold whitespace-nowrap rounded text-stone-950">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/04a4875830827dfe99ab565cab2a22187ca9466b293f09bc752cac3fa30e4846?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square fill-lime-500" />
                        <div className="self-stretch my-auto">{trader.roi}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-10 mt-6 max-w-full w-[190px]">
                    <div className="flex flex-col justify-center whitespace-nowrap rounded">
                      <div className="text-xs text-neutral-500">AUM</div>
                      <div className="mt-1.5 text-sm font-semibold text-neutral-800">
                        {trader.aum}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-xs text-stone-400">7D MDD</div>
                      <div className="mt-1.5 text-sm font-semibold text-neutral-800">
                        {trader.mdd}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-xs text-center text-stone-400 w-[105px]">
                  <img loading="lazy" src={trader.chartData} alt={`Performance chart for last ${trader.period}`} className="object-contain self-center rounded-sm aspect-[1.86] w-[89px]" />
                  <div className="mt-3.5">Last {trader.period}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CopytraderGrid;