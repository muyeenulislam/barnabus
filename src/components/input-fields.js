import React from "react";

const TextInput = ({
  type = "text",
  onChange,
  value,
  label,
  required = true,
  placeholder = "Enter value",
}) => {
  return (
    <div className="flex flex-col gap-1.5 md:gap-3">
      <p className="text-Content-Primary font-semibold text-base leading-6 lg:text-lg lg:leading-6.5">
        {label}
      </p>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        className="outline-none text-Content-Primary font-normal .placeholder-Content-Tertiary border border-Badge-Gray-Subtle-Background bg-Overlays-Black-9 text-base md:text-lg lg:text-xl leading-6 md:leading-6.5 lg:leading-7 rounded-xl px-3 py-4 lg:px-5 lg:py-4"
      />
    </div>
  );
};
const TextAreaInput = ({
  onChange,
  value,
  label,
  rows = 4,
  required = true,
  placeholder = "Enter value",
}) => {
  return (
    <div className="flex flex-col gap-1.5 md:gap-3">
      <p className="text-Content-Primary font-semibold text-base leading-6 lg:text-lg lg:leading-6.5">
        {label}
      </p>
      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="outline-none text-Content-Primary .placeholder-Content-Tertiary border border-Badge-Gray-Subtle-Background bg-Overlays-Black-9 text-base md:text-lg lg:text-xl leading-6 md:leading-6.5 lg:leading-7 rounded-xl px-3 py-4 lg:px-5 lg:py-4"
      />
    </div>
  );
};

export { TextInput, TextAreaInput };
