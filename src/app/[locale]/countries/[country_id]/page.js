import React from "react";
import Main from "../../compomemts/Main";
import ChooseBody from "../../compomemts/ChooseBody";
import { prisma } from "../../../../../utils/db";

const Cities = async ({ params }) => {
  const { country_id } = await params;

  const _ = await prisma.countries.findUnique({
    where: { country_code_2: country_id },
  });

  if (!_) {
    throw new Error("country not found");
  }

  // throw new Error("this path is not supported");
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
