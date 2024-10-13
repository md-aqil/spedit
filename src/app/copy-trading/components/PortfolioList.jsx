import React from "react";
import PortfolioCard from "./PortfolioCard";

const portfolioData = [
  {
    name: "Karishma",
    id: "firstTour",
    rating: "502",
    pnl: "74,100.23",
    roi: "5.71%",
    aum: "₹74,100.23",
    mdd: "1.27%",
    chartSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d96c4c4de1173ee71d64b2f147e36157bdd9f87a4af29c90a12ae4c0380413b6?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: "502",
    pnl: "74,100.23",
    roi: "5.71%",
    aum: "₹74,100.23",
    mdd: "1.27%",
    chartSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dc7f4f18894e1239ccf7ed1c9d0100df37ac6e80cb5a874d00ef6fa91120f6be?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: "502",
    pnl: "74,100.23",
    roi: "5.71%",
    aum: "₹74,100.23",
    mdd: "1.27%",
    chartSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/16b88a76b6cd345a8d3e0525441287fac206e9d6f1f702882da9a3083c004a09?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: "502",
    pnl: "74,100.23",
    roi: "5.71%",
    aum: "₹74,100.23",
    mdd: "1.27%",
    chartSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6e8acd01e23774e747231914a7f0e29422b1d15f4eb330f7b7693e42558c6202?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: "502",
    pnl: "74,100.23",
    roi: "5.71%",
    aum: "₹74,100.23",
    mdd: "1.27%",
    chartSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c11c1e5c68516f9370aadbb9b76635bf06f1cda9e9e896725e148fffe3c3ce0f?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: "502",
    pnl: "74,100.23",
    roi: "5.71%",
    aum: "₹74,100.23",
    mdd: "1.27%",
    chartSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dab7e2184be3e97de149adf3fd5101a1fa915b230696b91507a5f63943ad8391?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: "502",
    pnl: "74,100.23",
    roi: "5.71%",
    aum: "₹74,100.23",
    mdd: "1.27%",
    chartSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/72e4a93ba2a74f1aeb91b5dd00007179da6bbc8b2fa4ae89c72573ca1ff6d128?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: "502",
    pnl: "74,100.23",
    roi: "5.71%",
    aum: "₹74,100.23",
    mdd: "1.27%",
    chartSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a3072bbbc1df39dacdbfb2673fc6be5bd606f8471159bf1aee361ed29c80207d?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: "502",
    pnl: "74,100.23",
    roi: "5.71%",
    aum: "₹74,100.23",
    mdd: "1.27%",
    chartSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/30bba1098a246786e6f38f4e5db4f1724725784a3ea59c639ea32600c1b3586c?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: "502",
    pnl: "74,100.23",
    roi: "5.71%",
    aum: "₹74,100.23",
    mdd: "1.27%",
    chartSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9b69159b758e28a23aad99339b0f6a5903aa03ef76465e9732112841e6861941?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: "502",
    pnl: "74,100.23",
    roi: "5.71%",
    aum: "₹74,100.23",
    mdd: "1.27%",
    chartSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6d0571489207f90cc6242b6712ec1c8b9846af5e57a85c3324fa8187c198414a?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
  {
    name: "Karishma",
    rating: "502",
    pnl: "74,100.23",
    roi: "5.71%",
    aum: "₹74,100.23",
    mdd: "1.27%",
    chartSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/344b0896f1ec1975e7d6c7ed80b4a32e9f9cdfac7f9381ae325cf08845dac595?apiKey=b4d1b9e87b084579b1e2475047caf617&",
  },
];

const PortfolioList = () => {
  return (
    <section className="flex flex-wrap gap-5 justify-center items-start self-stretch px-5 pt-0 pb-5 mt-6 w-full max-md:max-w-full">
      {portfolioData.map((portfolio, index) => (
        <PortfolioCard key={index} {...portfolio} />
      ))}
    </section>
  );
};

export default PortfolioList;
