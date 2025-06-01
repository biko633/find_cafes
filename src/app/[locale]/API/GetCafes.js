import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../utils/firebase";

export const getCafesWithCityId = async (city_id) => {
  const collectionRef = collection(db, "cafes");
  const q = query(collectionRef, where("city_code_2", "==", city_id));
  const cafes = await getDocs(q);
  return cafes.docs.map((city) => city.data());
};
