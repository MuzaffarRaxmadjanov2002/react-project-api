import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyARMMxBkmQbxDCBUNwc8YAvYyh0L1-t9pI",
    authDomain: "my-box-d37ac.firebaseapp.com",
    projectId: "my-box-d37ac",
    storageBucket: "my-box-d37ac.appspot.com",
    messagingSenderId: "504196715212",
    appId: "1:504196715212:web:cba954ee919ead6c8c2869",
    measurementId: "G-F2FYMR3P0K"
  };
  const app = initializeApp(firebaseConfig);
  const auth= getAuth(app);
  const provider =new GoogleAuthProvider();
  export{auth,provider}