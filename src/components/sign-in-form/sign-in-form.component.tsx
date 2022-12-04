import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError } from "firebase/auth";
import {
  signInWithGooglePopup,
  signInUserAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { ButtonsContainer, SignInContainer } from "./sign-in.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInUserAuthWithEmailAndPassword(email, password);
    } catch (error) {
      switch ((error as AuthError).code) {
        case "auth/user-not-found":
          alert("No user with this email found");
          break;

        case "auth/wrong-password":
          alert("Wrong password");
          break;

        default:
          console.log(error);
          break;
      }
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account ?</h2>
      <span>Sign In with you email and password</span>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={logGoogleUser}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
