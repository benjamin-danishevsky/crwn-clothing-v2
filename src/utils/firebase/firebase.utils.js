import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDP8VbwFBM7qOtLeiyQO54WKoLka0Ytqd8",
  authDomain: "crwn-clothing-db-e1533.firebaseapp.com",
  projectId: "crwn-clothing-db-e1533",
  storageBucket: "crwn-clothing-db-e1533.appspot.com",
  messagingSenderId: "544796069505",
  appId: "1:544796069505:web:f049da66c3ac0b9e5dc780"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
