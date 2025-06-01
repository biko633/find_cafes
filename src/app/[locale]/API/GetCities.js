import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../utils/firebase";

export const getCitiesWithCountry = async (country_id) => {
  const collectionRef = collection(db, "cities");
  const q = query(collectionRef, where("country_code_2", "==", country_id));
  const cities = await getDocs(q);
  return cities.docs.map((city) => city.data());
};

export const getCitiesWithCountryAndCityId = async (country_id, city_id) => {
  const collectionRef = collection(db, "cities");
  const q = query(
    collectionRef,
    where("country_code_2", "==", country_id),
    where("city_code_2", "==", city_id)
  );
  const cities = await getDocs(q);
  return cities.docs.map((city) => city.data());
};
