import React from "react";
import Main from "../../compomemts/Main";
import ChooseBody from "../../compomemts/ChooseBody";
import { getCitiesWithCountry } from "../../API/GetCities";

const Cities = async ({ params }) => {
  const { country_id } = await params;

  const _ = await getCitiesWithCountry(country_id);

  if (!_) {
    throw new Error("country not found");
  }
  return (
    <Main>
      <ChooseBody
        path="/imgs/city-map.png"
        type="cities"
        country_id={country_id}
      />
    </Main>
  );
};

export default Cities;
