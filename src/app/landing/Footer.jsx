import React from 'react';
import FooterColumn from './FooterColumn';

function Footer() {
  return (
    <footer className="flex flex-col mt-28 mx-auto  max-md:mt-10 ">
      <div className="flex gap-10 py-20 container mx-auto">
        <div className="flex flex-col">
          <div className="text-base font-black text-lime-500">SPEDIT</div>
          <div className="flex flex-col mt-6 w-full text-base tracking-normal">
            <div className="w-full">Experience the next generation</div>
            <div className="pr-28 w-full max-md:pr-5">of Copy Trading</div>
          </div>
          <div className="self-start mt-6 text-sm tracking-normal leading-6 text-gray-400">
            ©2024 SPEDIT. All rights reserved.
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-start h-full min-w-[240px] w-[784px] max-md:max-w-full">
          <div className="flex flex-wrap flex-1 shrink gap-4 justify-center basis-0 min-w-[240px] max-md:max-w-full">
            <FooterColumn title="Platform" items={["Features", "Pricing", "Wiki", "Partnership", "Affiliate"]} />
            <FooterColumn title="Legals" items={["Terms of Services", "Privacy Policy"]} />
            <FooterColumn title="Wope for" items={["Agencies", "Startups"]} />
          </div>
          <div className="flex flex-col text-xl font-bold leading-loose text-white min-w-[240px] w-[264px]">
            <div className="flex flex-col w-full">
              <div className="flex relative flex-col flex-1 items-start p-7 w-full rounded-2xl max-md:px-5">
                <div className="self-stretch w-full">Get in touch</div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5237e17763557dd9ced0579636cc798c28d834635060ab6bc9602dec8ced4e21?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="Contact icons" className="object-contain z-0 mt-2 max-w-full aspect-[7.69] w-[184px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;