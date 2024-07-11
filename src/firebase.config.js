import { initializeApp } from "firebase/app";
import { getDocs, getFirestore , collection, addDoc, query, where} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const dbRef = collection(db, 'book-mark')

export const getBookMarkList = async () => {
  const result = await getDocs(dbRef);
  return result.docs.map((e)  => e.data())
}

export const getGroupDataList = async (groupName) => {
  const myQuery = query(dbRef, where("group", "==", groupName))
  try {
    const result = await getDocs(myQuery);
    return result.docs.map((e) => e.data());
  } catch(err) {
    console.error(err)
  }
}


export const postBookMarkList = async (data) => {
  return await addDoc(dbRef, data)
}