import { useState } from "react";
import FormInput from "../form-input/form-input";
import "./sign-up-form";
import Button from "../button/button";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentOnAuth,
} from "../../utils/firebase/firebase.utils";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setformField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformField({ ...formField, [name]: value });
  };

  const clearFields = () => {
    setformField(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your Password did not match with confirm password");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentOnAuth(user, { displayName });
      clearFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already exist");
      } else {
        console.log("user creation encounted an error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          value={displayName}
          onChange={handleChange}
          name="displayName"
        />

        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          required
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />
        <Button type="submit" Children="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpForm;
