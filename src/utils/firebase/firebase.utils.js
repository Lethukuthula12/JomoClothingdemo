import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3-sBYBckg-U4CasHltaos8qk48Sg8lv4",
  authDomain: "crwn-clothing-db-c4c7b.firebaseapp.com",
  projectId: "crwn-clothing-db-c4c7b",
  storageBucket: "crwn-clothing-db-c4c7b.appspot.com",
  messagingSenderId: "366896747554",
  appId: "1:366896747554:web:d88e8e8eb66d1b0ebfa67b",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(firebaseApp);
export const createUserDocumentOnAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("Error in create the user", error.message);
    }
  }

  return userDocRef;
};
