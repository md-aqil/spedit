import React from "react";

function FavTable() {
  const traders = [
    {
      name: "Tanya",
      followers: 502,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0a180803af1677498fdcfe032a6e266831b65df8760e180b2ac8421cd3a98a7?apiKey=b4d1b9e87b084579b1e2475047caf617&",
      profit: 74100.23,
      profitPercentage: 5.71,
      roi: 1.27,
      amount: 74100.23,
      status: "active"
    },
    {
      name: "Shubham",
      followers: 600,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e410e3d350d4a97c26a4e3bd89942a7c8d76a726dd16adcffcdcdab3cd001448?apiKey=b4d1b9e87b084579b1e2475047caf617&",
      profit: 74100.23,
      profitPercentage: 5.71,
      roi: 1.27,
      amount: 74100.23,
      status: "inactive"
    },
    {
      name: "Badal",
      followers: 456,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c39e04d4e92cd56638ff3227fca0bbc3079f3d3b69da47035cc9952a7ac09f63?apiKey=b4d1b9e87b084579b1e2475047caf617&",
      profit: 74100.23,
      profitPercentage: 5.71,
      roi: 1.27,
      amount: 74100.23,
      status: "active"
    },
    {
      name: "Karishma",
      followers: 622,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cfaa546c02280bc63fc2a35237f465aaeae5a3f280934cb0a53e176c3257221d?apiKey=b4d1b9e87b084579b1e2475047caf617&",
      profit: 74100.23,
      profitPercentage: 5.71,
      roi: 1.27,
      amount: 74100.23,
      status: "active"
    },
    {
      name: "Josh",
      followers: 622,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba07290c520fe084fc82652f8068dc09b35f5cff06bfa1d24c4a01f7d19860fa?apiKey=b4d1b9e87b084579b1e2475047caf617&",
      profit: 74100.23,
      profitPercentage: 5.71,
      roi: 1.27,
      amount: 74100.23,
      status: "active"
    },
    {
      name: "Shubham",
      followers: 600,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e410e3d350d4a97c26a4e3bd89942a7c8d76a726dd16adcffcdcdab3cd001448?apiKey=b4d1b9e87b084579b1e2475047caf617&",
      profit: 74100.23,
      profitPercentage: 5.71,
      roi: 1.27,
      amount: 74100.23,
      status: "inactive"
    },
    {
      name: "Jorge",
      followers: 622,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9ef3d846d074f79d7a99846b33502224b41fe4e9304f3a46bff0f9359a21592?apiKey=b4d1b9e87b084579b1e2475047caf617&",
      profit: 74100.23,
      profitPercentage: 5.71,
      roi: 1.27,
      amount: 74100.23,
      status: "active"
    },
    {
      name: "Shubham",
      followers: 600,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e410e3d350d4a97c26a4e3bd89942a7c8d76a726dd16adcffcdcdab3cd001448?apiKey=b4d1b9e87b084579b1e2475047caf617&",
      profit: 74100.23,
      profitPercentage: 5.71,
      roi: 1.27,
      amount: 74100.23,
      status: "inactive"
    }
  ];

  const FollowersBadge = ({ followers }) => (
    <div className="flex gap-1.5 items-center self-start mt-2 text-xs text-neutral-500">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f541c647e3f4cfe9b0e78e497862b107847de05efbb13b46e204710a72eeecc?apiKey=b4d1b9e87b084579b1e2475047caf617&"
        alt=""
        className="object-contain shrink-0 gap-0 self-stretch my-auto w-12 aspect-[2.67]"
      />
      <div className="self-stretch my-auto">{followers}</div>
    </div>
  );

  const ProfitIndicator = ({ value }) => (
    <div className="flex gap-1.5 justify-center items-end self-stretch py-2 my-auto text-base font-bold whitespace-nowrap rounded text-stone-950">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/40209b71424afc71e449ae6ea3baa182772584eb58a9bc74c6f0d7bfe0bbcf47?apiKey=b4d1b9e87b084579b1e2475047caf617&"
        alt=""
        className="object-contain shrink-0 w-3.5 aspect-square fill-lime-500"
      />
      <div>{value}</div>
    </div>
  );

  const CopyTraderActions = ({ status }) => {
    if (status === "inactive") {
      return (
        <div className="flex grow shrink gap-4 items-center self-stretch my-auto text-sm font-bold text-center min-w-[240px] text-stone-950 w-[244px]">
          <button className="flex-1 shrink gap-1 self-stretch px-2 py-3 my-auto w-full bg-lime-500 rounded min-h-[36px] min-w-[240px]">
            Start Copy
          </button>
        </div>
      );
    }
    return (
      <div className="flex gap-4 items-center self-stretch my-auto text-sm font-bold text-center min-w-[240px]">
        <button className="gap-1 self-stretch px-2 py-3 my-auto rounded border border-solid border-neutral-800 min-h-[36px] text-neutral-800 w-[116px]">
          Pause Copy
        </button>
        <button className="gap-1 self-stretch px-2 py-3 my-auto text-white bg-pink-700 rounded min-h-[36px] w-[116px]">
          Stop Copy
        </button>
      </div>
    );
  };

  const CopyTraderCard = ({ trader }) => (
    <article className="flex flex-wrap gap-10 justify-between items-center px-3 py-4 mt-1 w-full bg-white rounded-lg shadow-sm w-full">
      <div className="flex gap-3 items-start self-stretch my-auto whitespace-nowrap">
        <img
          loading="lazy"
          src={trader.image}
          alt={`${trader.name}'s profile`}
          className="object-contain shrink-0 rounded-xl aspect-square w-[72px]"
        />
        <div className="flex flex-col w-[108px]">
          <h2 className="text-base font-bold text-stone-950">{trader.name}</h2>
          <FollowersBadge followers={trader.followers} />
        </div>
      </div>
      <ProfitIndicator value={trader.profit} />
      <ProfitIndicator value={`+${trader.profitPercentage}%`} />
      <div className="self-stretch py-2 my-auto text-sm font-semibold whitespace-nowrap rounded text-stone-950">
        {trader.roi}%
      </div>
      <div className="gap-2 self-stretch p-2 my-auto text-sm font-semibold text-stone-950">
        ₹{trader.amount.toLocaleString()}
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72b00afa2935ce36d6e7360659afa27520b3515f5dff2cca2aaa30ff7f129141?apiKey=b4d1b9e87b084579b1e2475047caf617&"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
      />
      <CopyTraderActions status={trader.status} />
    </article>
  );

  return (
    <main className="flex flex-wrap gap-5 items-start pt-8 pb-5 pl-5 leading-none">
      <section className="flex flex-col grow  max-md:max-w-full">
        {traders.map((trader, index) => (
          <CopyTraderCard key={index} trader={trader} />
        ))}
      </section>
    </main>
  );
}

export default FavTable;