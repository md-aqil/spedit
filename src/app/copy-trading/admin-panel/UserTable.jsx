'use client'

import React, { useState } from "react";

const users = [
  {
    name: "Tanya",
    id: "id123",
    contactNo: "987654321",
    username: "@tanya123",
    email: "tanya64@gmail.com",
    isPremium: true,
  },
  {
    name: "Tanya",
    id: "id124",
    contactNo: "987654322",
    username: "@tanya124",
    email: "tanya65@gmail.com",
    isPremium: false,
  },

];

function UserTable() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedUsers(users.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleUserSelect = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter((userId) => userId !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  const handleDropdownSelect = (option) => {
    if (option === "All") {
      setSelectedUsers(users.map((user) => user.id));
      setSelectAll(true);
    } else if (option === "None") {
      setSelectedUsers([]);
      setSelectAll(false);
    } else if (option === "Lead Trader") {
      const leadTraders = users.filter((user) => user.isPremium).map((user) => user.id);
      setSelectedUsers(leadTraders);
      setSelectAll(leadTraders.length === users.length);
    }
    setDropdownOpen(false);
  };

  return (
    <main className="flex flex-col rounded-xl p-10 shadow-md bg-white mt-5 max-md:p-0 max-md:bg-transparent">
      <h1 className="text-base font-bold leading-none text-stone-950 max-md:text-white">
        User management
      </h1>
      <div className="max-md:hidden flex flex-wrap gap-10 justify-between items-center py-1.5 pr-5 pl-1.5 mt-6 w-full bg-white rounded-lg border border-black border-solid shadow-sm max-md:max-w-full">
        <div className="flex flex-wrap gap-10 self-stretch pr-10 pb-2 pl-5 my-auto min-w-[240px] w-[603px] max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-auto gap-3.5 max-md:max-w-full items-center">
            {/* Checkbox with Dropdown */}
            <div className="relative flex items-center gap-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded"
                checked={selectAll}
                onChange={handleSelectAll}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {/* Dropdown Arrow */}
              <svg
                className="w-4 h-4 text-gray-600 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              {dropdownOpen && (
                <div className="absolute z-10 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <ul className="py-1 text-sm text-gray-700" aria-labelledby="options-menu">
                    <li
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleDropdownSelect("All")}
                    >
                      All
                    </li>
                    <li
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleDropdownSelect("None")}
                    >
                      None
                    </li>
                    <li
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleDropdownSelect("Lead Trader")}
                    >
                      Lead Trader
                    </li>
                  </ul>
                </div>
              )}
            </div>


            <div className="py-3 text-xs font-bold leading-none whitespace-nowrap text-neutral-500">
              Name
            </div>
            <div className="px-4 py-3 text-xs font-bold leading-none whitespace-nowrap text-neutral-500">
              ID
            </div>
            <div className="px-4 py-3 text-xs font-bold leading-none whitespace-nowrap text-neutral-500">
              Contact No.
            </div>
            <div className="px-4 py-3 text-xs font-bold leading-none whitespace-nowrap text-neutral-500">
              Username
            </div>
            <div className="px-4 py-3 text-xs font-bold leading-none whitespace-nowrap text-neutral-500">
              Email
            </div>
            <div className="px-4 py-3 text-xs font-bold leading-none whitespace-nowrap text-neutral-500">
              Premium
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-center items-center self-stretch my-auto text-xs leading-none text-right text-stone-400">
        <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search Setting options"
          className="block w-full px-4 py-2 text-sm text-gray-700 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2290c4f96e9479ad8edf54630605c9692b71c7d901f8659d84f0314f34751a3?apiKey=b4d1b9e87b084579b1e2475047caf617&"
          alt="Search Icon"
          className="absolute right-2 w-4 h-4 text-gray-400"
        />
      </div>
        </div>
      </div>

      <section className="flex flex-col mt-6 w-full max-md:hidden">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-wrap gap-7 justify-between items-center px-6 py-4 mt-1 w-full bg-white rounded-lg border border-solid shadow-sm border-stone-50 max-md:px-5 max-md:max-w-full"
          >
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded"
              checked={selectedUsers.includes(user.id)}
              onChange={() => handleUserSelect(user.id)}
            />
            <div className="self-stretch my-auto text-base font-bold leading-none text-stone-950">
              {user.name}
            </div>
            <div className="self-stretch my-auto text-sm font-semibold leading-none text-blue-500">
              {user.id}
            </div>
            <div className="self-stretch my-auto text-sm font-semibold leading-none text-stone-950">
              {user.contactNo}
            </div>
            <div className="self-stretch my-auto text-sm font-semibold leading-none text-stone-950">
              {user.username}
            </div>
            <div className="self-stretch my-auto text-sm font-semibold leading-none text-stone-950">
              {user.email}
            </div>

            {user.isPremium ? (
  <div className="overflow-hidden self-stretch px-3.5 py-2.5 my-auto text-sm font-bold leading-none text-center text-lime-500 whitespace-nowrap rounded border border-lime-500 border-solid bg-stone-950 w-[67px]">
    PREM
  </div>
) : (
  <div className="w-[67px]">{/* Empty div for alignment */}</div>  // Corrected the placement of the comment
)}

            <div className="flex gap-3 items-center self-stretch my-auto">
              <button className="flex gap-1 justify-center items-center self-stretch px-2 my-auto w-9 h-9 rounded border border-solid border-neutral-800 min-h-[36px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b99622a19943a22afa8a641011045dc692fe52e1d5ddf3f348a804b6810a844b?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  className="object-contain self-stretch my-auto aspect-square w-[18px]"
                  alt=""
                />
              </button>
              <button className="flex gap-1 justify-center items-center self-stretch px-2 my-auto w-9 h-9 rounded border border-solid border-neutral-800 min-h-[36px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1db2aa784773fde4e29ba5dfa45f03c0ca866b1ce341d561ea3819aca91fe8c4?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  className="object-contain self-stretch my-auto aspect-square w-[18px]"
                  alt=""
                />
              </button>
              <button className="gap-1 self-stretch px-2 py-3 my-auto text-sm font-bold leading-none text-center whitespace-nowrap rounded border border-solid border-neutral-800 min-h-[36px] text-neutral-800">
                Deactivate
              </button>
              <button className="flex gap-1 justify-center items-center self-stretch px-2 my-auto w-9 h-9 bg-pink-700 rounded min-h-[36px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f778e6bafa4f36f831b6cd89d9206a6c7e902c4f0d8cb19e94c2763c48b6d1e2?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  className="object-contain self-stretch my-auto aspect-square w-[18px]"
                  alt=""
                />
              </button>
            </div>
          </div>
        ))}
      </section>
      <section className="mt-6 w-full md:hidden">
      <div className="relative flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-lime-500 border-gray-300 rounded"
                checked={selectAll}
                onChange={handleSelectAll}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {/* Dropdown Arrow */}
              <svg
                className="w-4 h-4 text-gray cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="text-white">Select Options</span>
              
              {dropdownOpen && (
                <div className="absolute z-10 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <ul className="py-1 text-sm text-gray-700" aria-labelledby="options-menu">
                    <li
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleDropdownSelect("All")}
                    >
                      All
                    </li>
                    <li
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleDropdownSelect("None")}
                    >
                      None
                    </li>
                    <li
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleDropdownSelect("Lead Trader")}
                    >
                      Lead Trader
                    </li>
                  </ul>
                </div>
              )}
            </div>

        {users.map((user) => (
          <div
            key={user.id}
            className="card-table border-b text-gray py-3 my-2"
          >
            <div className="flex justify-between">
              <div className="font-bold text-white">{user.name}</div>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-lime-500 border-gray-300 rounded"
                checked={selectedUsers.includes(user.id)}
                onChange={() => handleUserSelect(user.id)}
              />
            </div>
            <p className="text-sm"><span>ID:</span> {user.id}</p>
            <p className="text-sm"><span>Contact No.:</span> {user.contactNo}</p>
            <p className="text-sm"><span>Username:</span> {user.username}</p>
            <p className="text-sm"> <span>Email:</span> {user.email}</p>
            <p className="text-sm">
             <span>Premium:</span> {user.isPremium ? 'Premium' : 'Basic'}
            </p>
          </div>
        ))}
      </section>

    </main>
  );
}

export default UserTable;
