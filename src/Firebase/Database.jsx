import { db } from "./ConfigureFirebase";
import { collection, addDoc } from "firebase/firestore";
export const addUserToDatabase = async (username, email, password) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      username,
      email,
      password,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
