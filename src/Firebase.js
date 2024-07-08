import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBhVU6eUK5npMuWO-Y61jhq5YFop0r8OD8",
  authDomain: "insta-clone-9d77f.firebaseapp.com",
  projectId: "insta-clone-9d77f",
  storageBucket: "insta-clone-9d77f.appspot.com",
  messagingSenderId: "339330296897",
  appId: "1:339330296897:web:c94374b0fc68a6a3fc2ac0",
  measurementId: "G-LZ80QMYN8M",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);
 