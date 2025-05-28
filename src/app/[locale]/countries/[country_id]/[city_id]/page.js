import React from "react";
import { prisma } from "../../../../../../utils/db";
import Main from "../../../compomemts/Main";
import Map from "../../../compomemts/Map";

const city = async ({ params }) => {
  const { country_id, city_id } = await params;
  // console.log(country_id, city_id);

  const found = await prisma.cities.findUnique({
    where: { country_code_2: country_id, city_code_2: city_id },
  });

  // console.log(found);

  if (!found) {
    throw new Error("city not found");
  }

  const city_list = await prisma.cafes.findMany({
    where: {
      city_code_2: city_id,
    },
  });

  return (
    <Main>
      <Map city_list={city_list} />
    </Main>
  );
};

export default city;
