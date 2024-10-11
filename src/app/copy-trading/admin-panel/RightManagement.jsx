'use client';
import React, { useState } from 'react';
import Image from 'next/image';

/**
 * RightManagement component for managing user rights and page access
 * @returns {JSX.Element} The RightManagement component
 */
function RightManagement() {
  const [assignedUsers, setAssignedUsers] = useState([
    { email: 'abcd@gmai.com' },
    { email: 'sfhs@gmai.com' }
  ]);

  const [viewRights, setViewRights] = useState(['Analytics and Reporting']);
  const [editRights, setEditRights] = useState(['Marketing Tools']);
  
  const pages = [
    { name: 'User Management', bgColor: 'bg-red-200' },
    { name: 'Transaction Monitor', bgColor: 'bg-fuchsia-300' },
    { name: 'CMS', bgColor: 'bg-indigo-200' },
    { name: 'Security', bgColor: 'bg-sky-200' },
    { name: 'Trash', bgColor: 'bg-stone-950 bg-opacity-20' }
  ];

  const removeUser = (emailToRemove) => {
    setAssignedUsers(assignedUsers.filter(user => user.email !== emailToRemove));
  };

  const handleAddRight = (right, type) => {
    if (type === 'view') {
      setViewRights([...viewRights, right]);
    } else {
      setEditRights([...editRights, right]);
    }
  };

  const handleRemoveRight = (right, type) => {
    if (type === 'view') {
      setViewRights(viewRights.filter(r => r !== right));
    } else {
      setEditRights(editRights.filter(r => r !== right));
    }
  };

  const MultiSelect = ({ tags, onTagAdd, onTagRemove }) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && inputValue.trim() !== '') {
        e.preventDefault();
        onTagAdd(inputValue);
        setInputValue('');
      }
    };

    return (
      <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-md bg-gray-50">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center gap-2 p-1 bg-[#C3FFB9] rounded-md">
            <span className="text-sm !text-black">{tag}</span>
            <button onClick={() => onTagRemove(tag)} className="!text-black">
             <i className='icon-close-circle text-2xl !text-black'></i>
            </button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-2 border border-transparent bg-gray-50 outline-none"
          placeholder="Add a tag..."
        />
      </div>
    );
  };

  const RightsSection = ({ title, bgColor, rights, onAddRight, onRemoveRight, type }) => (
    <section className="flex flex-col mt-5 w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full text-base font-bold text-neutral-800 max-md:max-w-full">
        <h2 className="opacity-80">{title}</h2>
       <i className='icon-trash text-2xl'></i>
      </div>
      <div className="flex flex-col items-start px-5 pt-4 pb-11 mt-3 w-full text-xs text-black rounded-lg bg-stone-50 max-md:pr-5 max-md:max-w-full">
        <MultiSelect
          tags={rights}
          onTagAdd={(right) => handleAddRight(right, type)}
          onTagRemove={(right) => handleRemoveRight(right, type)}
        />
      </div>
    </section>
  );

  const AssignTag = ({ email, onRemove }) => (
    <div className="flex items-center gap-2 p-1 rounded-md border border-black bg-gray-100">
      <span className="text-sm !text-gray-700">{email}</span>
      <button onClick={() => onRemove(email)} className="text-gray-500 hover:text-gray-700">
       <i className='icon-close-circle text-2xl !text-gray-700'></i>
      </button>
    </div>
  );

  return (
    <div className="mt-10 max-md:mt-0">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full ">
          <div className="flex flex-col grow leading-none max-md:mt-10 max-md:max-w-full">
            <header className="flex flex-col justify-center items-start py-8 pr-20 pl-7 card w-full shadow-sm bg-white rounded-xl max-md:px-5 max-md:max-w-full">
              <h1 className="text-xl font-bold text-stone-950">Right Management</h1>
              <p className="mt-1.5 text-xs text-neutral-500">
                Drag pages to provide rights to the assigned people via email Id.
              </p>
            </header>
            <main className="flex flex-col px-7 pt-12 pb-8 mt-3 w-full bg-white card rounded-xl max-md:px-5 max-md:max-w-full shadow-md">
              <section className="flex flex-col w-full whitespace-nowrap max-md:max-w-full">
                <div className="flex flex-wrap gap-10 justify-between items-start w-full text-base font-bold text-neutral-800 max-md:max-w-full">
                  <h2 className="opacity-80">Assign</h2>
                 <i className='icon-trash text-2xl'></i>
                </div>
                <div className="flex flex-wrap gap-3 py-1 pr-20 pl-1.5 mt-3 w-full text-xs text-black rounded-lg  max-w-[690px] max-md:pr-5 max-md:max-w-full">
                  {assignedUsers.map((user, index) => (
                    <AssignTag key={index} email={user.email} onRemove={removeUser} />
                  ))}
                </div>
              </section>
              <RightsSection
                title="Can View"
                bgColor="bg-green-200"
                rights={viewRights}
                onAddRight={(right) => handleAddRight(right, 'view')}
                onRemoveRight={(right) => handleRemoveRight(right, 'view')}
                type="view"
              />
              <RightsSection
                title="Can Edit"
                bgColor="bg-yellow-200"
                rights={editRights}
                onAddRight={(right) => handleAddRight(right, 'edit')}
                onRemoveRight={(right) => handleRemoveRight(right, 'edit')}
                type="edit"
              />
              <footer className="flex flex-wrap gap-10 justify-between items-center mt-7 w-full text-sm font-bold text-center whitespace-nowrap text-stone-950 max-md:max-w-full">
                <div className="flex self-stretch my-auto min-h-[14px]" />
                <div className="flex gap-2.5 items-center self-stretch my-auto w-[110px]">
                  <button className="btn2">
                    Save
                  </button>
                </div>
              </footer>
            </main>
          </div>
        </div>
        <aside className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full ">
          <div className="flex flex-col items-start px-9 pt-9 pb-96 mx-auto w-full card text-x shadow-md leading-none text-black bg-white rounded-xl ">
            <h2 className="gap-10 self-stretch max-w-full text-xl font-bold leading-6 text-stone-950 w-[269px]">
              Pages that can be edited/viewed
            </h2>
            <p className="self-stretch mt-3 leading-4 text-neutral-500">
              Drag page tags to provide either view rights or edit rights. Page tags that are not
              placed in either column cannot be edited or viewed.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-9 max-w-full">
              {pages.map((page, index) => (
                <div
                  key={index}
                  className={`flex overflow-hidden gap-2 items-center p-2 ${page.bgColor} rounded-md`}
                >
                  <span className="text-sm text-black">{page.name}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default RightManagement;
