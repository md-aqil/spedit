import Image from 'next/image';
import React from 'react';

/**
 * UserDetails component displaying user information and navigation
 * @returns {JSX.Element} The UserDetails component
 */
function UserDetails() {
  return (
    <div className="flex flex-col">
      <header className="flex flex-wrap gap-10 justify-between items-center px-9 py-4 w-full rounded-none bg-white bg-opacity-90 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-3 self-stretch my-auto min-h-[54px] min-w-[240px]">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad43272a23b168849b46aba39c54e2c147ebe5600b37a9c84276534e8685a7fc?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            alt="User profile"
            width={50}
            height={54}
            className="object-contain shrink-0 self-start rounded-xl"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col max-w-full text-neutral-500 w-[109px]">
              <div className="text-sm font-bold leading-none">Name</div>
              <div className="flex gap-1 items-center w-full text-xs leading-none">
                <div className="self-stretch my-auto">@Username</div>
                <div className="self-stretch my-auto font-semibold">Level 18</div>
              </div>
            </div>
            <div className="flex gap-3 items-start mt-3.5 text-xs font-bold leading-none whitespace-nowrap text-neutral-800">
              {[
                { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f7006cde2a811042d4a62d1230da92c3207bd024635f043814fd8b3f0f9c931?apiKey=b4d1b9e87b084579b1e2475047caf617&", value: "2" },
                { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/657ab899235ed173da5fb57793528a4fdc098ebe6864f92868b79be3a5dc3eb6?apiKey=b4d1b9e87b084579b1e2475047caf617&", value: "2" },
                { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0b7723318dc98a8cbdc33bca8545751bb8902c6211f120b502fe2faf51f8ecd?apiKey=b4d1b9e87b084579b1e2475047caf617&", value: "20,000pts" },
                { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0932d3d8e46fdcd6bbb88d01010673eae4ee828d231f3e64cbc651c4baba6a30?apiKey=b4d1b9e87b084579b1e2475047caf617&", value: "50" }
              ].map((stat, index) => (
                <div key={index} className="flex gap-0.5 items-start">
                  <Image src={stat.icon} alt="" width={13} height={13} className="object-contain shrink-0" />
                  <div>{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <nav className="flex gap-5 items-start self-stretch my-auto text-sm font-semibold leading-none text-center min-w-[240px] text-neutral-800 w-[285px]">
          {[
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f570ebfd1b7cf1cf4d28f3f0addbb2e50e79e38da5f77122dd83d5a8b95dab7?apiKey=b4d1b9e87b084579b1e2475047caf617&", label: "Daily Event" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a7dac91259eab6133703835b06cb70bc69635bfe0d0f550b9c4def58044cd76?apiKey=b4d1b9e87b084579b1e2475047caf617&", label: "Discussion", hasNotification: true },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6fa205d4d18767b71ca7c89fff66f391e7877a71c6a2dcba24318bd9189b4c1?apiKey=b4d1b9e87b084579b1e2475047caf617&", label: "Shop" }
          ].map((item, index) => (
            <div key={index} className="flex gap-2 items-center whitespace-nowrap">
              <Image src={item.icon} alt="" width={15} height={15} className="object-contain shrink-0 self-stretch my-auto" />
              <div className="self-stretch my-auto">{item.label}</div>
              {item.hasNotification && <div className="flex shrink-0 self-start w-2 h-2 bg-pink-700 rounded-2xl" />}
            </div>
          ))}
        </nav>
      </header>
      <div className="flex z-10 flex-col self-end mt-0 mr-7 max-w-full text-xs font-semibold leading-none text-center whitespace-nowrap text-stone-50 w-[209px] max-md:mr-2.5">
        <div className="overflow-hidden self-start px-1 py-1 bg-pink-700 rounded-2xl">1/3</div>
        <div className="flex z-10 shrink-0 self-end w-2 h-2 bg-pink-700 rounded-2xl" />
      </div>
    </div>
  );
}

export default UserDetails;