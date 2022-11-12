import { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInUserAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { UserContext } from "../../contexts/user-context";

import "./sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //userContext
  const { setCurrentUser } = useContext(UserContext);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    setCurrentUser(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInUserAuthWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
    } catch (error) {
      switch (error.code) {
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
    <div className="sign-in-container">
      <h2>Already have an account ?</h2>
      <span>Sign In with you email and password</span>
      <form
        onSubmit={(e) => {
          handleSubmit(e, formFields);
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={"google"} onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
