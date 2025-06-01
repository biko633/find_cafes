import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../utils/firebase";

export const getCountries = async () => {
  const collectionRef = collection(db, "countries");
  const countries = await getDocs(collectionRef);
  return countries.docs.map((country) => country.data());
};
