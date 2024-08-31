import React, { useState } from "react";

const OneTimeEdit = () => {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("xyz@email.com");
  const [isEditing, setIsEditing] = useState(true); // Default to edit mode

  const handleSave = () => {
    setIsEditing(false); // Disable edit mode
    console.log("Saving:", { username, email });
  };

  const handleEdit = () => {
    setIsEditing(true); // Enable edit mode
  };

  return (
    <section className="flex flex-col px-10 py-9 bg-white rounded-xl shadow-sm max-md:px-5 mt-5">
      <header className="flex flex-wrap gap-10 justify-between items-center w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px]">
          <div className="flex gap-2 items-end text-xl font-bold text-stone-950">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab9ba563070792525f8c7e0e57fdbb559144abbd2492eca14f695b96ddff6619?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              className="object-contain w-6"
              alt="Icon"
            />
            <h1 className="opacity-80">One time editable Information</h1>
          </div>
          <p className="mt-2 text-xs text-neutral-500">
            This Section can be edited only once and will be unique only to you.
          </p>
        </div>
        <button
          onClick={isEditing ? handleSave : handleEdit}
          className={`px-3 py-4 w-24 text-sm font-bold text-center whitespace-nowrap rounded min-h-[44px] transition-all duration-300 ease-in-out ${
            isEditing
              ? "bg-lime-500 text-stone-950"
              : "border border-gray-500 text-gray-500 bg-transparent"
          }`}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </header>
      <div className="flex flex-wrap gap-10 mt-20 text-base">
        <div className="flex flex-col flex-1">
          <label htmlFor="username" className="font-bold text-black opacity-80">
            Username*
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`px-5 py-3 mt-3 rounded-lg bg-stone-50 text-black w-full ${
              isEditing ? "" : "bg-transparent cursor-not-allowed"
            }`}
            placeholder="Eg: John Doe"
            disabled={!isEditing}
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="email" className="font-bold text-black opacity-80">
            Email*
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`px-5 py-3.5 mt-3 rounded-lg bg-stone-50 text-black w-full ${
              isEditing ? "" : "bg-transparent cursor-not-allowed"
            }`}
            placeholder="Eg: xyz@email.com"
            disabled={!isEditing}
          />
        </div>
      </div>
    </section>
  );
};

export default OneTimeEdit;
