import { FirebaseOptions, initializeApp } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCAASRZXONLYOJboAC2mnNRBN7zQSs2CBw",
  authDomain: "fir-learning-b8933.firebaseapp.com",
  projectId: "fir-learning-b8933",
  storageBucket: "fir-learning-b8933.appspot.com",
  messagingSenderId: "737231764723",
  appId: "1:737231764723:web:b8c94b3dcd3c5f96c98b86",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
