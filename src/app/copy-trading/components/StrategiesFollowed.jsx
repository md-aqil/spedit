import React from "react";
import StrategyItem from "./StrategyItem";

const strategies = [
  {
    name: "Tanya",
    rating: 502,
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e0a180803af1677498fdcfe032a6e266831b65df8760e180b2ac8421cd3a98a7?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    profit: 74100.23,
    profitPercentage: 5.71,
    roi: 1.27,
    amount: 74100.23,
  },
  {
    name: "Shubham",
    rating: 600,
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e410e3d350d4a97c26a4e3bd89942a7c8d76a726dd16adcffcdcdab3cd001448?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    profit: 74100.23,
    profitPercentage: 5.71,
    roi: 1.27,
    amount: 74100.23,
  },
  {
    name: "Badal",
    rating: 456,
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c39e04d4e92cd56638ff3227fca0bbc3079f3d3b69da47035cc9952a7ac09f63?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    profit: 74100.23,
    profitPercentage: 5.71,
    roi: 1.27,
    amount: 74100.23,
  },
  {
    name: "Karishma",
    rating: 622,
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cfaa546c02280bc63fc2a35237f465aaeae5a3f280934cb0a53e176c3257221d?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    profit: 74100.23,
    profitPercentage: 5.71,
    roi: 1.27,
    amount: 74100.23,
  },
];

function StrategiesFollowed() {
  return (
     <div className="flex flex-col mt-0 leading-none max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          {strategies.map((strategy, index) => (
            <StrategyItem index={index} key={index} {...strategy} />
          ))}
        </div>
      </div>

  );
}

export default StrategiesFollowed;
