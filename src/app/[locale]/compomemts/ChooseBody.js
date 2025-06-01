import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { cookies } from "next/headers";
import { Link } from "i18n/routing";
import { getCountries } from "../API/GetCountries";
import { getCitiesWithCountry } from "../API/GetCities";

// this is the body of the choose page countries and cities
const ChooseBody = async (props) => {
  const type = props.type;
  const country_list = await getCountries();
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE").value;

  if (type === "countries") {
    const t = await getTranslations("Countries");
    const path = props.path;
    return (
      <div className="flex flex-col items-center">
        <div className="choosebody-list-title flex flex-row items-center mt-6 text-5xl font-bold gap-4">
          <Image
            className="choosebody-title-icon"
            src={path}
            width={100}
            height={100}
            alt={lang === "en" ? "countries icon" : "ايقونة بلدان"}
            style={{ width: "100px", height: "100px" }}
          />
          <h1 className="text-primary1">{t("title")}</h1>
        </div>
        <div className="grid md:grid-cols-3 mt-6 gap-6 border-t-2 border-primary3 pt-10">
          {country_list.map((country) => {
            return (
              <Link
                className="flex flex-row gap-4 items-center hover:shadow-lg"
                key={country.id}
                href={`/countries/${country.country_code_2}`}
              >
                <Image
                  className="rounded-md"
                  src={`https://flagcdn.com/${country.country_code_2.toLocaleLowerCase()}.svg`}
                  width={120}
                  height={80}
                  alt={lang === "en" ? country.name : country.name_ar}
                  style={{ width: "120px", height: "80px" }}
                />
                <p className="text-primary4 text-2xl">
                  {lang === "en" ? country.name : country.name_ar}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else if (type === "cities") {
    const city_list = await getCitiesWithCountry(props.country_id);
    const t = await getTranslations("Cities");
    const path = props.path;
    return (
      <div className="flex flex-col items-center">
        <div className="choosebody-list-title flex flex-row items-center mt-6 text-5xl font-bold gap-4">
          <Image
            className="choosebody-title-icon"
            src={path}
            width={100}
            height={100}
            alt={lang === "en" ? "cities icon" : "أيقونة المدن"}
            style={{ width: "100px", height: "100px" }}
          />
          <h1 className="text-primary1">{t("title")}</h1>
        </div>
        <div className="grid md:grid-cols-3 mt-6 gap-6 border-t-2 border-primary3 pt-10">
          {city_list.map((city) => {
            return (
              <Link
                className="flex flex-row gap-4 items-center hover:shadow-lg"
                key={city.id}
                href={`/countries/${city.country_code_2}/${city.city_code_2}`}
              >
                <Image
                  className="rounded-md"
                  src="/imgs/placeholder.png"
                  width={80}
                  height={80}
                  alt={lang === "en" ? city.name : city.name_ar}
                  style={{ width: "80px", height: "80px" }}
                />
                <p className="text-primary4 text-2xl">
                  {lang === "en" ? city.name : city.name_ar}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
};

export default ChooseBody;
