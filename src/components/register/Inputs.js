import { useState } from "react";
import { Inputs_wrapper } from "../../styled/styled";

const Inputs = (props) => {

  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <Inputs_wrapper>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </Inputs_wrapper>
  )
}

export default Inputs;
