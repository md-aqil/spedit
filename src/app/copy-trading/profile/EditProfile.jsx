import React, { useState } from "react";

const EditProfile = () => {
  const [name, setName] = useState("Alexa Rawles");
  const [email, setEmail] = useState("alexarawles@gmail.com");
  const [dob, setDob] = useState("1994-01-01");
  const [doj, setDoj] = useState("1994-01-01");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <main className="flex flex-col rounded-none max-w-[875px] mt-10">
      <section className="flex flex-col px-8 pt-5 pb-20 w-full bg-white rounded-xl shadow-[0px_0px_4px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
        <header className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <div className="flex gap-4 text-sm text-stone-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/42639fec3590af6a677ab5d7b0f6fdd0a2a5104bfcba7c993413f5799d0383a1?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt={`${name}'s avatar`}
              className="object-contain shrink-0 my-auto rounded-full aspect-[0.93] w-[68px]"
            />
            <div className="flex flex-col">
              <h1 className="text-base font-medium text-black">{name}</h1>
              <p className="mt-1">{email}</p>
              <p className="mt-1">
                <span className="text-black">DOB:</span> {dob}
              </p>
              <p className="mt-1">
                <span className="text-black">DOJ:</span> {doj}
              </p>
            </div>
          </div>
          <button
            onClick={handleSave}
            className=" my-auto text-base btn text-black whitespace-nowrap bg-lime-500 rounded-lg max-md:px-5"
          >
            Save
          </button>
        </header>
        <hr className="shrink-0 mt-4 max-w-full h-px border border-solid border-zinc-300 w-[813px]" />
        <form className="flex flex-col gap-5 mt-6" onSubmit={handleSave}>
          <div className="flex flex-wrap gap-5 self-start text-base text-black w-full">
            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
              <label htmlFor="name" className="text-base text-black">
                Name
              </label>
              <div className="flex flex-col mt-3 w-full rounded-lg max-w-[393px]">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="self-stretch px-5 py-3.5 rounded-lg bg-stone-50 min-h-[52px]"
                />
              </div>
            </div>
            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
              <label htmlFor="dob" className="text-base text-black">
                DOB
              </label>
              <div className="flex flex-col mt-3 w-full rounded-lg max-w-[393px]">
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="self-stretch px-5 py-3.5 rounded-lg bg-stone-50 min-h-[52px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 self-start text-base text-black w-full">
            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
              <label htmlFor="address" className="text-base text-black">
                Address
              </label>
              <div className="flex flex-col mt-3 w-full rounded-lg max-w-[393px]">
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="self-stretch px-5 py-3.5 rounded-lg bg-stone-50 min-h-[52px]"
                />
              </div>
            </div>
            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
              <label htmlFor="upload" className="text-base text-black">
                Upload docs
              </label>
              <div className="flex flex-col mt-3 w-full rounded-lg max-w-[393px]">
                <div className="flex gap-10 justify-between items-center py-0.5 pr-2.5 pl-5 rounded-lg bg-stone-50 min-h-[52px]">
                  <input
                    type="file"
                    id="upload"
                    onChange={handleFileChange}
                    className="sr-only"
                    aria-label="Upload docs/pdfs/images"
                  />
                  <label
                    htmlFor="upload"
                    className="cursor-pointer flex items-center justify-between w-full"
                  >
                    <span>
                      {file ? file.name : "Upload docs/pdfs/images"}
                    </span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d83e177cf21b3310bf3e0c61b5c16b69e980690d16302f6a8cc72ad08c63c0a?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <p className="self-end mt-1 text-sm text-gray-700">
            For TAG generation (Manual Verification)
          </p>
        </form>
      </section>
    </main>
  );
};

export default EditProfile;