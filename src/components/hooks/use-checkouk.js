import {useState} from 'react';

const useCheckout = (validateValue) => {
  // Register two states
  // 1) for value
  // 2) whether the input field got blurred or not
  const [enteredValue, setEnteredValue] = useState("");
  const [isBlurred, setIsBlurred] = useState(false);

  //check whether the input is valid ?
  const valueIsValid = validateValue(enteredValue);
  //Finding out whether we need to show error or not
  const hasError = !valueIsValid && isBlurred;

  //updating state on every key stroke
  const valueChangehandler = (event) => {
    setEnteredValue(event.target.value);
  };

  // setting blur when input losses focus
  const inputBlurHandler = (event) => {
    setIsBlurred(true);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangehandler,
    inputBlurHandler,

  }

}

export default useCheckout;