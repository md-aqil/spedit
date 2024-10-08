import React, { useState } from 'react';

function PasswordSection() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const passwordFields = [
    { label: 'Password', placeholder: 'Eg: XXXXXX', type: showPassword ? 'text' : 'password' },
    { label: 'Re-enter Password', placeholder: 'Eg: XXXXXX', type: showPassword ? 'text' : 'password' },
  ];

  // Display only one password field if saved
  const displayFields = isSaved ? [passwordFields[0]] : passwordFields;

  const handleSaveClick = () => {
    if (isSaved) {
      setIsSaved(false); // Switch back to edit mode
    } else {
      setIsSaved(true); // Save and switch to "Change Password" mode
    }
  };

  const handleEyeClick = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <section className="flex flex-col px-12 py-9 mt-6 w-full bg-white rounded-xl shadow-md card">
      <div className="flex  gap-10 justify-between items-center w-full leading-none max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto max-md:max-w-full">
          <h2 className="text-xl font-bold opacity-80 text-stone-950">Password</h2>
          <p className="mt-2 text-xs text-neutral-500 max-md:max-w-full">
            Password should be at least 8 digits long and must have an alphabet, number, and a special character.
          </p>
        </div>
        <button
          onClick={handleSaveClick}
          className={`px-3 py-4 my-auto  text-sm font-bold text-center whitespace-nowrap ${isSaved ? 'border border-gray-500 text-gray-500 bg-transparent' : 'bg-lime-500 rounded min-h-[44px] text-stone-950'} transition-all duration-300 ease-in-out`}
        >
          {isSaved ? 'Change Password' : 'Save'}
        </button>
      </div>
      <div className="flex gap-10 mt-20 text-base max-md:mt-10 max-md:max-w-full max-md:flex-col max-md:gap-4">
        {displayFields.map((field, index) => (
          <div key={index} className="flex flex-col mb-4 w-full">
            <label className="mb-2 text-sm font-semibold text-stone-700">{field.label}</label>
            <div className="relative">
              <input
                type={field.type}
                placeholder={field.placeholder}
                className={`w-full px-3 py-2 border rounded ${isSaved ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white text-stone-700'} transition-all duration-300 ease-in-out`}
                disabled={isSaved}
              />
              <button
                type="button"
                onClick={handleEyeClick}
                className="absolute right-0 top-3 flex no-wrap items-center px-3 cursor-pointer"
              >
                <span className={showPassword ? "icon-eye-slash" : "icon-eye"}></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PasswordSection;
