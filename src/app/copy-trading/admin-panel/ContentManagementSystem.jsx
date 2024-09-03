import Image from 'next/image';
import React, { useState } from 'react';

/**
 * ContentManagementSystem component
 * @returns {JSX.Element} The ContentManagementSystem component
 */
export default function ContentManagementSystem() {
  const [bannerImage, setBannerImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-stone-50 mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-start py-8 pr-20 pl-7 w-full leading-none bg-white rounded-xl shadow-lg max-md:px-5 max-md:max-w-full">
              <div className="text-xl font-bold text-stone-950">
                Content Management System (CMS)
              </div>
              <div className="mt-1.5 text-xs text-neutral-500">
                Enter metadata, Alt text, Keywords{" "}
              </div>
            </div>
            <div className="flex flex-col px-7 pt-6 pb-3.5 mt-3 w-full bg-white rounded-xl shadow-lg max-md:px-5 max-md:max-w-full">
              <div className="flex flex-wrap gap-10 justify-between items-center w-full text-sm leading-none max-md:max-w-full">
                <div className="self-stretch my-auto font-bold text-neutral-800">
                  Copy &gt; <span className="text-neutral-800"> Leaderboard</span>
                </div>
                <div className="flex gap-2.5 items-center self-stretch my-auto whitespace-nowrap">
                  <button className="flex items-center px-5 py-4 font-semibold bg-white border border-black rounded-md shadow-sm">
                    Preview
                  </button>
                  <button className="gap-2 px-3 py-4 font-bold text-center bg-lime-500 rounded min-h-[44px] text-stone-950 w-[110px]">
                    Save
                  </button>
                </div>
              </div>
              <div className="flex flex-col mt-11 w-full text-base font-bold leading-none whitespace-nowrap text-neutral-800 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
                  <label className="opacity-80">Metadata</label>
                </div>
                <input type="text" className="mt-3 block w-full p-3 rounded-lg bg-stone-50 border border-stone-300 shadow-sm" />
              </div>
              <div className="flex flex-col mt-9 w-full text-base font-bold leading-none whitespace-nowrap text-neutral-800 max-md:max-w-full">
                <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
                  <label className="opacity-80">Keywords</label>
                </div>
                <input type="text" className="mt-3 block w-full p-3 rounded-lg bg-stone-50 border border-stone-300 shadow-sm" />
              </div>
              <div className="flex flex-col mt-9 w-full text-neutral-800 max-md:max-w-full">
                <div className="flex flex-wrap gap-10 justify-between items-start max-w-full text-base font-bold leading-none w-[690px]">
                  <label className="opacity-80">Alt text</label>
                </div>
                <div className="flex gap-3 items-start mt-3 w-full max-md:max-w-full">
                  <input type="text" className="block w-full p-3 rounded-lg bg-stone-50 border border-stone-300 shadow-sm" placeholder="Image ID (#)" />
                  <input type="text" className="block w-full p-3 rounded-lg bg-stone-50 border border-stone-300 shadow-sm" placeholder="Alt text" />
                </div>
              </div>
              <div className="flex flex-col mt-9 w-full text-neutral-800 max-md:max-w-full">
                <div className="flex flex-wrap gap-10 justify-between items-start max-w-full text-base font-bold leading-none w-[690px]">
                  <label className="opacity-80">Banner Image</label>
                </div>
                <div className="flex flex-col justify-center items-center px-16 py-24 mt-3 w-full text-sm leading-none rounded-lg bg-stone-50 max-md:px-5 max-md:max-w-full">
                  {bannerImage ? (
                    <Image src={bannerImage} alt="Banner Image" className="object-cover w-full h-[200px] rounded-lg" width={300} height={200} />
                  ) : (
                    <div className="flex flex-col items-center">
                      <Image
                        src="http://b.io/ext_19-"
                        alt="Upload Icon"
                        className="object-contain w-8 h-8 mb-2"
                        width={32}
                        height={32}
                      />
                      <span className="opacity-40">Upload or Drag image to upload</span>
                      <input type="file" onChange={handleImageUpload} className="mt-2" />
                    </div>
                  )}
                </div>
                <div className="flex gap-2 items-start self-start mt-3">
                  <input type="text" className="block w-[240px] p-3 rounded-lg bg-stone-50 border border-stone-300 shadow-sm" placeholder="Alt Text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-7 pt-9 pb-16 mx-auto w-full bg-white rounded-xl shadow-lg max-md:pl-5 max-md:mt-10">
            <div className="flex gap-10 justify-between items-center self-center max-w-full leading-none w-[293px]">
              <div className="self-stretch my-auto text-xl font-bold whitespace-nowrap text-stone-950">
                Pages
              </div>
              <div className="flex gap-1 justify-center items-center self-stretch my-auto text-xs text-right text-stone-400">
                <div className="self-stretch my-auto rounded-none w-[74px]">
                  Search Pages
                </div>
                <Image
                  src="http://b.io/ext_20-"
                  alt="Search Icon"
                  className="object-contain w-6 h-6"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="flex flex-col mt-16 mx-3 leading-none max-md:mx-2.5">
              <div className="flex gap-10 justify-between items-center mb-8">
                <div className="flex gap-2 items-center text-base font-bold text-neutral-800">
                  <Image
                    src="http://b.io/ext_21-"
                    alt="Page Icon"
                    className="object-contain w-6 h-6"
                    width={24}
                    height={24}
                  />
                  <span>Onboarding</span>
                </div>
                <div className="flex items-center text-xs text-neutral-500">
                  <span>edited 18min ago</span>
                  <Image
                    src="http://b.io/ext_22-"
                    alt="Edit Icon"
                    className="object-contain w-4 h-4"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <div className="flex gap-10 justify-between items-center mb-8">
                <div className="flex gap-2 items-center text-base font-bold text-neutral-800">
                  <Image
                    src="http://b.io/ext_23-"
                    alt="Page Icon"
                    className="object-contain w-6 h-6"
                    width={24}
                    height={24}
                  />
                  <span>Profile</span>
                </div>
                <div className="flex items-center text-xs text-neutral-500">
                  <span>edited 15min ago</span>
                  <Image
                    src="http://b.io/ext_22-"
                    alt="Edit Icon"
                    className="object-contain w-4 h-4"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              {/* Repeat similar structure for other pages */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
