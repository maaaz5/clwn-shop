import { useState, useContext } from "react";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { UserContext } from "../../contexts/user-context";

import "./sign-up.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  //context
  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        password
      );
      createUserDocumentFromAuth(user, { displayName });
      setCurrentUser(user);

      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create the user, email already in use");
      }
      console.log("There was an error creating the user", error.message);
    }
  };

  return (
    <div className="sign-up-container ">
      <h2>Don't have an account ?</h2>
      <span>Sign Up with you email and password</span>
      <form
        onSubmit={(e) => {
          handleSubmit(e, formFields);
        }}
      >
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button type="submit">Sing Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
