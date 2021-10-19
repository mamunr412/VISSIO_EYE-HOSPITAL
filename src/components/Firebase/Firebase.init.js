import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const Firebaseinit = () => {
    initializeApp(firebaseConfig);
}
export default Firebaseinit;