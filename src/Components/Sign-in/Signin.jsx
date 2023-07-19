import FormInput from "../form-input/form-input";
import Button from "../button/button";
const SignInWithPassWordForm = () => {
  const confirmEmailAndPassword = () => {};
  const handleSignIn = () => {};
  return (
    <div>
      <h1>This is sign In with email and password</h1>
      <form>
        <FormInput
          label="Email"
          type="email"
          value=""
          name="email"
          onChange={confirmEmailAndPassword}
        />

        <FormInput
          label="Password"
          type="password"
          value=""
          name="password"
          onChange={confirmEmailAndPassword}
        />
        <Button onChange={handleSignIn} Children="Sign In" />
      </form>
    </div>
  );
};

export default SignInWithPassWordForm;
