import Main from "../compomemts/Main";
import ChooseBody from "../compomemts/ChooseBody";
// import { useTranslations } from "next-intl";
// import prisma from "../../../../utils/db";
// import { notFound } from "next/navigation";

export default async function Countries() {
  return (
    <Main>
      <ChooseBody path="/imgs/earth.png" type="countries" />
    </Main>
  );
}
