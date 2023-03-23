import React from "react";
const AllListingInput = ({
  name,
  text,
  holder,
  className,
  register,
  inputhandle,
  inputVal,
  handleBlur,
  handleFocus,
  inputClick,
  autoOff,
  errorMessage,
  reff,
}) => {
  return (
    <div className="">
      <input
        type={text}
        ref={reff}
        required
        placeholder={holder}
        name={name}
        value={inputVal}
        className={className}
        onChange={inputhandle}
        onClick={inputClick}
        onBlur={handleBlur}
        onFocus={handleFocus}
        autoComplete={autoOff}
        {...register}
      />
      <p className="text-red-500 text-sm">{errorMessage}</p>
    </div>
  );
};
export default AllListingInput;
