import SignUpForm from "../../Components/sign-up-form/sign-up-form";
import SignInWithPassWordForm from "../../Components/Sign-in/Signin";
import Button from "../../Components/button/button";

import {
  signInWithGooglePopup,
  createUserDocumentOnAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const userLoginToGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentOnAuth(user);
  };

  return (
    <div>
      <h1>Hello this is signin</h1>

      <SignInWithPassWordForm />
      <Button
        onClick={userLoginToGoogle}
        Children="Sign in with google"
        buttonType="google"
      />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
