import { useState } from "react";

const useInputValidation = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const validateInput = () => {
    return value.search(/\d/) > -1;
  };
  const validateColor = validateInput() ? "text-danger" : null;
  return { value, onChange, validateInput, validateColor };
};

export default useInputValidation;
