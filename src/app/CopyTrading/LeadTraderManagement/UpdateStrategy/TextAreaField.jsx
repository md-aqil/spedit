/**
 * This code was generated by Builder.io.
 */
import React from "react";

function TextAreaField({ label, placeholder }) {
  return (
    <div className="flex flex-col mt-8 text-base text-neutral-800 max-md:max-w-full">
      <label className="font-bold leading-none opacity-80 max-md:max-w-full">
        {label}
      </label>
      <div className="">
        <textarea
          placeholder={placeholder}
          className="w-full  opacity-40 px-5 py-3.5 mt-3 w-full rounded-lg bg-stone-100 border border-stone-500 resize-none"
          aria-label={label}
        />
      </div>
    </div>
  );
}

export default TextAreaField;
