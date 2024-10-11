import React, { useState } from 'react';

/**
 * TrashContainer component displays the trash section with header, table, and trash items.
 * @returns {JSX.Element} The TrashContainer component
 */
function TrashContainer() {
  const [selectedAll, setSelectedAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trashItems = [
    { username: "@tanya123", id: "id123", daysUntilDeletion: 28 },
    { username: "@tanya123", id: "id124", daysUntilDeletion: 27 },
    { username: "@tanya123", id: "id125", daysUntilDeletion: 26 },
    { username: "@tanya123", id: "id126", daysUntilDeletion: 25 },
    { username: "@tanya123", id: "id127", daysUntilDeletion: 24 },
    { username: "@tanya123", id: "id128", daysUntilDeletion: 23 },
    { username: "@tanya123", id: "id129", daysUntilDeletion: 22 },
  ];

  const toggleSelectAll = (selectAll) => {
    if (selectAll) {
      const allItemIndexes = trashItems.map((_, index) => index);
      setCheckedItems(allItemIndexes);
      setSelectedAll(true);
    } else {
      setCheckedItems([]);
      setSelectedAll(false);
    }
    setDropdownOpen(false);
  };

  const toggleCheckbox = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="flex flex-col items-start px-10 py-10 bg-white rounded-xl max-md:px-5 !shadow-md mt-5 card">
      <header className="flex flex-col self-stretch w-full max-md:max-w-full">
        <h1 className="self-start text-base font-bold leading-none whitespace-nowrap text-stone-950">
          Trash
        </h1>
        <p className="mt-1 text-xs leading-none text-neutral-500 max-md:max-w-full">
          Items that have been in Trash more than 30 days will be automatically deleted.
        </p>
        <div className="relative flex items-center md:hidden mt-3">
       
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 bg-black"
              checked={selectedAll}
              onChange={() => toggleSelectAll(!selectedAll)}
            />
            <button
              className="ml-2 relative py-2 text-sm text-gray-600 flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
               
              <span className="icon-arrow-down-1 mr-2"></span>
              Select
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-1 bg-white border rounded shadow-lg">
                <ul className="text-sm">
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer max-md:!text-black"
                    onClick={() => toggleSelectAll(true)}
                  >
                     All
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer max-md:!text-black"
                    onClick={() => toggleSelectAll(false)}
                  >
                     None
                  </li>
                </ul>
              </div>
            )}
          </div>

      </header>

{/* Table Header */}
<div className="mt-6 w-full max-md:hidden">
  <table className="min-w-full table-auto text-left text-sm bg-white border border-black shadow-sm rounded-lg">
    <thead>
      <tr className="">
        <th className="py-2 px-4 pl-5 w-[137px]">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 bg-black"
              checked={selectedAll}
              onChange={() => toggleSelectAll(!selectedAll)}
            />
            <button
              className="ml-2 relative py-2 text-sm text-gray-600 flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="icon-arrow-down-1"></span>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-1 bg-white border rounded shadow-lg">
                <ul className="text-sm">
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => toggleSelectAll(true)}
                  >
                     All
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => toggleSelectAll(false)}
                  >
                     None
                  </li>
                </ul>
              </div>
            )}
          </div>
        </th>
        <th className="text-gray-500 py-2 px-6  w-[272px]">Username</th>
        <th className="text-gray-500 py-2 px-6  w-[205px]">ID</th>
        <th className="text-gray-500 py-2 px-6 ">Days Until Deletion</th>
        <th className="relative py-2 px-6">
        <div className="relative flex items-center mr-5">
        <input
          type="text"
          placeholder="Search Setting options"
          className="block w-full px-4 py-2 text-sm text-right text-gray-700 font-normal focus:outline-none bg-transparent"
        />
       
        <i className="icon-search-normal-1 absolute right-[-20px] text-2xl"></i>
      </div>
        </th>
      </tr>
    </thead>
  </table>
</div>

      {/* Table Rows */}
      <div className="mt-6 w-full hidden md:block">
        <table className="min-w-full table-auto text-left text-sm">
          <tbody>
            {trashItems.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="py-3 px-6">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5"
                    checked={checkedItems.includes(index)}
                    onChange={() => toggleCheckbox(index)}
                  />
                </td>
                <td className="py-3 px-6 w-1/4 text-center">{item.username}</td>
                <td className="py-3 px-6 w-1/4 text-center text-blue-500">{item.id}</td>
                <td className="py-3 px-6 w-1/4 text-center">
                  will delete in {item.daysUntilDeletion} days
                </td>
                <td className="py-3 px-6 w-1/4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="bg-lime-500 text-gray-900 px-3 py-2 rounded">
                      Restore
                    </button>
                    <button className="border border-neutral-800 px-3 py-2 rounded whitespace-nowrap">
                      Delete Permanently
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        
      </div>

        {/* Mobile Cards */}
        <div className="w-full md:hidden">
        {trashItems.map((item, index) => (
          <div
            key={index}
            className="border-b my-2 py-5 max-md:rounded-none rounded-lg shadow-md hover:bg-gray-50"
          >
            <div className="flex items-center justify-between mb-2">
            <span className="text-blue-500">{item.id}</span>
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5"
                checked={checkedItems.includes(index)}
                onChange={() => toggleCheckbox(index)}
              />
             
            </div>


            <div className="text-gray-500 mb-1">Username: {item.username}</div>
            <div className="text-gray-500 mb-1">
              Days Until Deletion: {item.daysUntilDeletion}
            </div>
            <div className="flex justify-between gap-2 mt-5">
              <button className="btn2 text-xs !text-black">
                Restore
              </button>
              <button className="btn btn-outline !text-xs">
                Delete Permanently
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default TrashContainer;
