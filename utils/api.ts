import {addDoc, collection, getDocs, query, orderBy, limit} from 'firebase/firestore'
import {fireStore} from "@/firebase";
import {DocDataType} from "@/types";

class API {
  private COLLECTION: string = "book-mark";

  getAllData = async () => {
    const query = await getDocs(collection(fireStore, this.COLLECTION))
    return query.docs.map((doc) => doc.data() as DocDataType);
  }

  getRecentData = async () => {
    const myQuery = query(collection(fireStore, this.COLLECTION), orderBy('storeTime', 'desc'), limit(5));
    const result = await getDocs(myQuery);
    return result.docs.map((doc) => doc.data() as DocDataType);
  }

  postNewData = (param: DocDataType) => {
    return addDoc(collection(fireStore, this.COLLECTION), param)
  }
}
export default API;