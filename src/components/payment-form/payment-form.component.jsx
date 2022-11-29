import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

import { FormContainer, PaymentFormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const elements = useElements();
  const stripe = useStripe();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer>
        <CardElement />
        <Button buttonType={BUTTON_TYPES_CLASSES.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
