import React from "react";
import Main from "../../../compomemts/Main";
import Map from "../../../compomemts/Map";
import { getCitiesWithCountryAndCityId } from "../../../API/GetCities";
import { getCafesWithCityId } from "../../../API/GetCafes";

const city = async ({ params }) => {
  const { country_id, city_id } = await params;
  // console.log(country_id, city_id);

  const found = await getCitiesWithCountryAndCityId(country_id, city_id);

  // console.log(found);

  if (!found) {
    throw new Error("city not found");
  }

  const city_list = await getCafesWithCityId(city_id);

  // console.log(city_list);

  return (
    <Main>
      <Map city_list={city_list} />
    </Main>
  );
};

export default city;
