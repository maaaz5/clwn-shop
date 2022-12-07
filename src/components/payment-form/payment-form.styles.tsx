import styled from "styled-components";

export const PaymentFormContainer = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  width: 100%;

  .StripeElement {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 600px;
    /* justify-items: center; */
  }

  button {
    margin-top: 30px;
  }

  @media screen and (max-width: 600px) {
    min-width: unset;
  }
`;
