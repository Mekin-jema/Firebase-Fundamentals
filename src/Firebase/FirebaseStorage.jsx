import { useState } from "react";
import { storage } from "./ConfigureFirebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "./ConfigureFirebase";

const FirebaseStorage = () => {
  const [file, setFile] = useState("");

  const handleUpload = () => {
    if (!file) {
      console.log("No file selected");
      return;
    }

    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error("Upload failed:", error);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFile(downloadURL);
        });
      }
    );
  };

  return (
    <div
      style={{
        background: `url(${file}) center no-repeat `,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        // display: "flex",
      }}
    >
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button
        onClick={handleUpload}
        className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 uppercase"
      >
        Upload
      </button>
    </div>
  );
};

export default FirebaseStorage;
