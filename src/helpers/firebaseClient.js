import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0G2VD6yCFXho0frqfwMB3tmE7jEwB84Y",
  authDomain: "shop-eb1ee.firebaseapp.com",
  projectId: "shop-eb1ee",
  storageBucket: "shop-eb1ee.appspot.com",
  messagingSenderId: "72267713803",
  appId: "1:72267713803:web:4d9598b831983d009e260e",
};

export const uploadFile = async (filename, dataFile) => {
  //khoi tao firebase
  const file = firebase.initializeApp(firebaseConfig);
  //upload file len server
  await file.storage().ref(`images/${filename}`).put(dataFile);
  const getUrl = await file
    .storage()
    .ref(`images/${filename}`)
    .getDownloadURL();
  return getUrl;
};
