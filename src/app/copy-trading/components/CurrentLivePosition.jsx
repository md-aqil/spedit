
import React from "react";
import PositionItem from "./PositionItem";
import Link from "next/link";


const positionItems = [
  {
    name: "Nifty",
    amount: 10000,
    roi: -0.47,
    unrealizedPnl: -47.56,
    chart:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e52bf680daa67237352d5e9ec68980c1be9220a48f19fe98a7fad52f999c477d?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "BankNifty",
    amount: 10000,
    roi: 1.57,
    unrealizedPnl: 157.56,
    chart:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3ada998621d949917389b8ac9dc8cd2d2fe7b23f887cebf28b692188dd018be4?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Nifty",
    amount: 10000,
    roi: -0.47,
    unrealizedPnl: -47.5654,
    chart:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/348b611cbec924efd4323fc1977bc85febfc9f8bf73c7fb9c4e385a678007d3f?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
];

function CurrentLivePosition() {
  return (
    <div className="flex flex-col self-stretch my-auto card clp-side">
      <div className="flex flex-col pt-5">
        <div className="flex flex-col">
          <div className="self-start text-xl font-bold text-neutral-800 m-white">
            Current Live Position
          </div>
          <div className="flex flex-col justify-center px-1.5 mt-5 min-h-[336px]">
            {positionItems.map((item, index) => (
              <PositionItem key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center px-12 py-8 lpd">
          
          <Link rel="stylesheet" className="btn btn-outline whitespace-nowrap  px-2 text-center py-6 rounded-lg mobile-fill" href="/login" >
          Login to Replace Mock Data
          </Link>
        
        </div>
      </div>
    </div>
  );
}

export default CurrentLivePosition;
