import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAqFQ1u1ypdJEKiNLH6ldkXCqHCVVS_AeI",
  authDomain: "billion-ables-a7d02.firebaseapp.com",
  projectId: "billion-ables-a7d02",
  storageBucket: "billion-ables-a7d02.appspot.com",
  messagingSenderId: "228015364155",
  appId: "1:228015364155:web:ae6fef7b6516e542d1241e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);