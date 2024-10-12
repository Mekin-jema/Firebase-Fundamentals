import { db } from "./ConfigureFirebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
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
export const getData = () => {
  getDocs(collection(db, "users")).then((res) => {
    console.log(res.docs.map((doc) => doc.data()));
  });
};

export const updateData = (id) => {
  const docToUpdate = doc(db, "users", id);
  updateDoc(docToUpdate, {
    username: "newusername",
    password: "newpassword",
  });
  console.log("user id is updted successfully");
  // Update the document with id
};
