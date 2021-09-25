import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.firebaseApi}`,
  authDomain: `${process.env.domain}`,
  projectId: "graphboards",
  storageBucket: `${process.env.storageBucket}`,
  messagingSenderId: `${process.env.firebaseMessasingSenderID}`,
  appId: `${process.env.appID}`,
  measurementId: `${process.env.measurementId}`

};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

// collection references


// export utils/refs
export {
  db,
  auth,
};
