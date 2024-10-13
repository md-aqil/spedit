import React from 'react';

function InputField({ label, placeholder, type, icon }) {
  return (
    <div className="flex flex-col flex-1">
      <label htmlFor={label.toLowerCase().replace(/\s/g, '-')} className="font-bold leading-none text-neutral-800 opacity-80">
        {label}
      </label>
      <div className={`flex gap-4 px-5 py-3.5 mt-3 max-w-full rounded-lg bg-stone-50 w-[393px] ${icon ? 'justify-between' : ''}`}>
        <input
          type={type}
          id={label.toLowerCase().replace(/\s/g, '-')}
          placeholder={placeholder}
          className="bg-transparent opacity-40 w-full"
          aria-label={label}
        />
        {icon && <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 rounded-md aspect-[1.08] w-[52px]" />}
      </div>
    </div>
  );
}

export default InputField;