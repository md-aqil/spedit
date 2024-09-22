import * as React from "react";
import Image from "next/image";

/**
 * TrashContainer component displays the trash section with header, table, and trash items.
 * @returns {JSX.Element} The TrashContainer component
 */
function TrashContainer() {
  const trashItems = [
    { username: "@tanya123", id: "id123", daysUntilDeletion: 28 },
    { username: "@tanya123", id: "id123", daysUntilDeletion: 28 },
    { username: "@tanya123", id: "id123", daysUntilDeletion: 28 },
    { username: "@tanya123", id: "id123", daysUntilDeletion: 28 },
    { username: "@tanya123", id: "id123", daysUntilDeletion: 28 },
    { username: "@tanya123", id: "id123", daysUntilDeletion: 28 },
    { username: "@tanya123", id: "id123", daysUntilDeletion: 28 },
  ];

  return (
    <section className="flex flex-col items-start px-16 py-10 bg-white rounded-xl max-md:px-5">
      <header className="flex flex-col self-stretch w-full max-md:max-w-full">
        <h1 className="self-start text-base font-bold leading-none whitespace-nowrap text-stone-950">
          Trash
        </h1>
        <p className="mt-1 text-xs leading-none text-neutral-500 max-md:max-w-full">
          Items that have been in Trash more than 30 days will be automatically deleted.
        </p>
      </header>

      <div className="flex  flex-wrap gap-10 justify-between items-center  mt-6 w-full bg-white rounded-lg border border-black border-solid shadow-sm w-full">
        <div className="flex flex-wrap gap-10 items-start self-stretch py-0.5 pr-16 pl-5 my-auto  max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5">
            <div className="flex gap-1 items-center my-auto">
              <div className="flex shrink-0 self-stretch my-auto bg-white rounded-sm border border-solid border-neutral-800 h-[18px] w-[18px]" />
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/72c08db302f3dc1b1cd84b3645c56859d1044155eb98752ac52890e38db29863?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                alt=""
                width={6}
                height={18}
                className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[0.6]"
              />
            </div>
            <div className="py-3 text-xs font-bold leading-none whitespace-nowrap text-neutral-500">
              Name
            </div>
          </div>
          <div className="flex gap-10 items-start mt-1 text-xs font-bold leading-none whitespace-nowrap text-neutral-500">
            <div className="px-4 py-3">Username</div>
            <div className="gap-2.5 px-4 py-3">ID</div>
          </div>
        </div>
        <div className="flex gap-1 justify-center items-center self-stretch my-auto text-xs leading-none text-right text-stone-400">
          <label htmlFor="searchInput" className="sr-only">
            Search username, id
          </label>
          <input
            id="searchInput"
            type="text"
            className="self-stretch my-auto w-28 rounded-none"
            placeholder="Search username, id"
            aria-label="Search username, id"
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2290c4f96e9479ad8edf54630605c9692b71c7d901f8659d84f0314f34751a3?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            alt="Search"
            width={24}
            height={24}
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>

      <div className="flex flex-col mt-6 max-w-full text-sm font-semibold leading-none text-stone-950 w-[991px]">
        {trashItems.map((item, index) => (
          <div key={index} className="flex flex-col mt-1 w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-center px-6 py-4 w-full bg-white rounded-lg border border-solid shadow-sm border-stone-50 max-md:px-5 max-md:max-w-full">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/54ea9c144b4770c3c0e7d272f00e0ed30807487f3569729ce0e6dd20285dafdf?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                alt=""
                width={18}
                height={18}
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
              />
              <div className="self-stretch my-auto">{item.username}</div>
              <div className="self-stretch my-auto text-blue-500">{item.id}</div>
              <div className="self-stretch my-auto text-xs">
                will delete in {item.daysUntilDeletion} days
              </div>
              <div className="flex gap-3 items-center self-stretch my-auto font-bold text-center text-neutral-800">
                <button className="gap-1 self-stretch px-2 py-3 my-auto whitespace-nowrap bg-lime-500 rounded min-h-[36px]">
                  Restore
                </button>
                <button className="gap-1 self-stretch px-2 py-3 my-auto rounded border border-solid border-neutral-800 min-h-[36px]">
                  Delete Permanently
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrashContainer;