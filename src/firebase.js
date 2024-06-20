import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
import { getDocs, doc , collection} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const getBookMarkList = async () => {
  const datas = collection(db, 'book-mark')
  const result = await getDocs(datas);
  return result.docs.map((e)  => e.data())
}