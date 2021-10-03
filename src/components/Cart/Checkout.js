import { useContext } from "react";
import AuthContext from "../../store/auth.context";
import useCheckout from "../hooks/use-checkouk";
import classes from "./Checkout.module.css";
const Checkout = (props) => {
  const {
    value: name,
    isValid: isNameValid,
    hasError: nameHasError,
    valueChangehandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useCheckout((enteredValue) => enteredValue.trim() !== "");
  const {
    value: address,
    isValid: isAddressValid,
    hasError: addressHasError,
    valueChangehandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
  } = useCheckout((enteredValue) => enteredValue.trim() !== "");
  const {
    value: postalCode,
    isValid: isPostalCodeValid,
    hasError: postalCodeHasError,
    valueChangehandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
  } = useCheckout(
    (enteredValue) =>
      enteredValue.trim().length >= 5 && enteredValue.trim().length <= 10
  );
  const {
    value: city,
    isValid: isCityValid,
    hasError: cityHasError,
    valueChangehandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useCheckout((enteredValue) => enteredValue.trim() !== "");

  // checking over all form validity
  let formIsValid = false;
  if (isNameValid && isAddressValid && isPostalCodeValid && isCityValid) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();
    props.onConfirm({
      name,
      address,
      postalCode,
      city,
    });
  };

  const nameClass = nameHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;
  const addressClass = addressHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;
  const postCodeClass = postalCodeHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;
  const cityClass = cityHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const ctx = useContext(AuthContext);
  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={nameClass}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p>Please enter your name!</p>}
      </div>
      <div className={addressClass}>
        <label htmlFor="address">Your address</label>
        <input
          type="text"
          id="address"
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        />
        {addressHasError && <p>Please enter your address!</p>}
      </div>
      <div className={postCodeClass}>
        <label htmlFor="postal">Psotal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeHasError && (
          <p>Please enter your 5 - 10 character posta code!</p>
        )}
      </div>
      <div className={cityClass}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && <p>Please enter your city name!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={ctx.hideCartHandler}>
          Cancel
        </button>
        {formIsValid ? (
          <button className={classes.submit}>Confirm</button>
        ) : (
          <button className={classes.submit} disabled>
            Confirm
          </button>
        )}
      </div>
    </form>
  );
};

export default Checkout;
