import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBZOrlt2NAhdeknynjkU7w6bg5uDU-WQdA",
  authDomain: "chat-8746d.firebaseapp.com",
  projectId: "chat-8746d",
  storageBucket: "chat-8746d.appspot.com",
  messagingSenderId: "1028601557072",
  appId: "1:1028601557072:web:55ddc931c606295986a155",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app)
