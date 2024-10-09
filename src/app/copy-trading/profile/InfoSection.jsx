import React, { useState } from 'react';

function InfoSection() {
  const [isEditing, setIsEditing] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('+91 ');

  const handleSaveClick = () => {
    setIsEditing(!isEditing);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <section className="p-8 bg-white rounded-xl shadow-md card">
      <header className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-stone-950">Personal Information</h1>
          <p className="mt-1 text-xs text-neutral-500">*This Section can be edited anytime</p>
        </div>
        <button
          onClick={handleSaveClick}
          className={`px-6 py-3 text-sm font-bold rounded ${isEditing ? 'bg-lime-500 text-stone-950' : 'border border-gray-500 text-gray-500 bg-transparent'} transition-colors`}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </header>

      <div className="space-y-6">

    <div className="flex justify-between gap-32 max-md:gap-5 max-md:flex-col">
      
    <div className="flex flex-col space-y-2 w-full">
          <label className="text-stone-800">Full Name*</label>
          <input
            type="text"
            placeholder="Eg: John Doe"
            className="px-3 py-2 border rounded bg-stone-50"
            disabled={!isEditing}
          />
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <label className="font-bold text-stone-800">Date of Birth</label>
          <input
            type="date"
            className="px-3 py-2 border rounded bg-stone-50"
            disabled={!isEditing}
          />
        </div>

    </div>

    <div className="flex justify-between gap-32">
    <div className="flex flex-col space-y-2 w-full">
          <label className="font-bold text-stone-800">Phone Number</label>
          <div className="flex items-center border rounded bg-stone-50">
            <select
              className="px-3 py-2 border-r border-gray-300 rounded-l bg-white"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              disabled={!isEditing}
            >
              <option value="+91">+91</option>
              {/* Add other country codes here */}
            </select>
            <input
              type="tel"
              placeholder="Eg: 623468782"
              className="px-3 py-2 bg-transparent flex-1"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              disabled={!isEditing}
            />
          </div>
        </div>


        <div className="flex flex-col space-y-2 w-full">
          <label className="font-bold text-stone-800">Address</label>
          <input
            type="text"
            placeholder="Eg: ABC, Street no.1"
            className="px-3 py-2 border rounded bg-stone-50"
            disabled={!isEditing}
          />
        </div>

      </div>

      
        
       
      
       

        {isEditing && (
          <div className="flex flex-col space-y-2  w-[45%] max-md:w-full">
            <label className="font-bold text-stone-800">Document Upload</label>
            <input
              type="file"
              className="border rounded bg-stone-50 py-2"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default InfoSection;
