import {collection, getDocs} from 'firebase/firestore'
import {fireStore} from "@/firebase";
import {DocDataType} from "@/types";

class API {
  private COLLECTION: string = "book-mark";

  getAllData = async () => {
    const query = await getDocs(collection(fireStore, this.COLLECTION))
    return query.docs.map((doc) => doc.data() as DocDataType);
  }
}
export default API;