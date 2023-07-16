import {
  signInWithGooglePopup,
  createUserDocumentOnAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const userLoginToGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentOnAuth(user);
  };

  return (
    <div>
      <h1>Hello this is signin</h1>
      <button onClick={userLoginToGoogle}>Sign in with google</button>
    </div>
  );
};

export default SignIn;
