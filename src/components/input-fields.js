import React, { useId } from "react";

const TextInput = ({
  type = "text",
  onChange,
  value,
  label,
  subLabel,
  error,
  required = true,
  placeholder = "Enter value",
  ...rest
}) => {
  const inputId = useId();
  const errorId = `${inputId}-error`;

  return (
    <div className="flex flex-col gap-1.5 md:gap-3">
      {label && (
        <div className="space-y-2">
          <p
            className="text-Content-Primary font-semibold text-base leading-6 lg:text-lg lg:leading-6.5"
            htmlFor={inputId}
          >
            {label}
          </p>
          {subLabel && (
            <p className="text-Content-Primary font-semibold text-base leading-6 lg:text-lg lg:leading-6.5">
              {subLabel}
            </p>
          )}
        </div>
      )}
      <input
        id={inputId}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`outline-none text-Content-Primary font-normal .placeholder-Content-Tertiary border ${
          error ? "border-red-500" : "border-Content-Tertiary"
        } bg-backgroundDarkGray text-base md:text-lg lg:text-xl leading-6 md:leading-6.5 lg:leading-7 rounded-xl px-3 py-4 lg:px-5 lg:py-4`}
        {...rest}
      />
      {error && (
        <p
          id={errorId}
          role="alert"
          aria-live="polite"
          className="text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
};
const TextAreaInput = ({
  onChange,
  value,
  label,
  subLabel,
  error,
  rows = 4,
  required = true,
  placeholder = "Enter value",
  ...rest
}) => {
  const inputId = useId();
  const errorId = `${inputId}-error`;

  return (
    <div className="flex flex-col gap-1.5 md:gap-3">
      {label && (
        <div className="space-y-2">
          <p
            className="text-Content-Primary font-semibold text-base leading-6 lg:text-lg lg:leading-6.5"
            htmlFor={inputId}
          >
            {label}
          </p>
          {subLabel && (
            <p className="text-Content-Secondary text-sm leading-6 lg:text-base lg:leading-6.5">
              {subLabel}
            </p>
          )}
        </div>
      )}
      <textarea
        id={inputId}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`outline-none text-Content-Primary .placeholder-Content-Tertiary border ${
          error ? "border-red-500" : "border-Content-Tertiary"
        }  bg-backgroundDarkGray text-base md:text-lg lg:text-xl leading-6 md:leading-6.5 lg:leading-7 rounded-xl px-3 py-4 lg:px-5 lg:py-4`}
        {...rest}
      />
      {error && (
        <p
          id={errorId}
          role="alert"
          aria-live="polite"
          className="text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export { TextInput, TextAreaInput };
