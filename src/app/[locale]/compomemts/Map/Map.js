import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import filter_func from "../../helper_functions/FilterFunc";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
/**
 * A map component that displays a map of shops based on the given city list and allows the user to filter by features and price range.
 *
 * @param {Object} props
 * @param {Array} props.city_list - an array of objects containing the city data
 * @param {string} props.city_list.name_en - the city name in English
 * @param {string} props.city_list.name_ar - the city name in Arabic
 * @param {number} props.city_list.latitude - the city latitude
 * @param {number} props.city_list.longitude - the city longitude
 * @param {boolean} props.city_list.toilets - whether the city has toilets
 * @param {boolean} props.city_list.wifi - whether the city has wifi
 * @param {boolean} props.city_list.wheelchair_accessible - whether the city is wheelchair accessible
 * @param {boolean} props.city_list.accepts_reservations - whether the city accepts reservations
 * @param {boolean} props.city_list.family_friendly - whether the city is family friendly
 * @param {number} props.city_list.price_per_person - the price per person in the city
 * @param {string} props.city_list.map_url - the url to the map of the city
 */

const Map = (props) => {
  const [dataBase_cities, set_dataBase_cities] = useState(props.city_list);
  const [filter_items, set_filter_items] = useState([]);
  const [filtered_cities, set_filtered_cities] = useState(props.city_list);
  const [showicon, set_showicon] = useState(true);
  const [price_filter, set_price_filter] = useState("");

  // console.log(props.city_list);

  const shops_icon = new icon({
    iconUrl: "/imgs/shop-icon.svg",
    iconSize: [45, 45],
  });

  const lang = useLocale();
  const t = useTranslations("map");
  // console.log(lang);

  const filter_features = (filter_item) => {
    if (filter_items.includes(filter_item)) {
      set_filter_items(filter_items.filter((item) => item !== filter_item));
    } else {
      set_filter_items([...filter_items, filter_item]);
    }
  };

  const filter_price = (p_range) => {
    // console.log(p_range);
    // console.log("map map map");
    if (price_filter === p_range) {
      set_price_filter("");
    } else {
      set_price_filter(p_range);
    }
  };

  const clear_filters = () => {
    set_filter_items([]);
    set_price_filter("");
  };

  useEffect(() => {
    set_filtered_cities(
      filter_func(filter_items, dataBase_cities, price_filter)
    );
  }, [filter_items, price_filter]);

  return (
    <MapContainer
      center={[
        filtered_cities[0]?.latitude ?? 0,
        filtered_cities[0]?.longitude ?? 0,
      ]}
      zoom={13}
    >
      <div className="absolute w-11/12 h-52">
        <div className="absolute z-[400] grid grid-cols-3 left-1/2">
          <Image
            className="hover:cursor-pointer hover:bg-primary3 rounded-full p-1"
            width={35}
            height={35}
            src="/imgs/filter-icon.svg"
            alt="toilet icon"
            onClick={() => set_showicon(!showicon)}
          />
          <p className="text-3xl bg-primary3 rounded-full text-center">
            {filtered_cities.length}
          </p>
          <Image
            className="hover:cursor-pointer hover:bg-primary3 rounded-full p-1"
            width={35}
            height={35}
            src="/imgs/clear-filter-icon.svg"
            alt="toilet icon"
            onClick={() => clear_filters()}
          />
        </div>
        {showicon && (
          <div
            className={`absolute z-[400] ${
              lang === "en" ? "left-[5%]" : "right-[5%]"
            } top-10 flex flex-row items-center gap-4 text-primary1 rounded-full ${
              lang === "en" ? "" : "flex-row-reverse"
            } text-2xl bg-primary3 max-xl:block max-xl:bg-transparent filter-icons`}
          >
            <div
              className={`flex flex-row items-center gap-2 hover:cursor-pointer bg-primary4 hover:bg-primary3 rounded-full p-1 min-w-fit ${
                filter_items.includes("toilets") ? "ring-2 ring-gray-400" : ""
              }`}
              onClick={() => filter_features("toilets")}
            >
              <Image
                width={35}
                height={35}
                src="/imgs/toilet-icon.svg"
                alt="toilet icon"
              />
              <h3>{t("icons.toilet.title")}</h3>
            </div>
            <div
              className={`flex flex-row items-center gap-2 hover:cursor-pointer bg-primary4 hover:bg-primary3 rounded-full p-1 min-w-fit ${
                filter_items.includes("wifi") ? "ring-2 ring-gray-400" : ""
              }`}
              onClick={() => filter_features("wifi")}
            >
              <Image
                width={35}
                height={35}
                src="/imgs/wifi-icon.svg"
                alt="wifi icon"
              />
              <h3>{t("icons.wifi.title")}</h3>
            </div>
            <div
              className={`flex flex-row items-center gap-2 hover:cursor-pointer bg-primary4 hover:bg-primary3 rounded-full p-1 min-w-fit ${
                filter_items.includes("wheelchair_accessible")
                  ? "ring-2 ring-gray-400"
                  : ""
              }`}
              onClick={() => filter_features("wheelchair_accessible")}
            >
              <Image
                width={35}
                height={35}
                src="/imgs/wheelchair-icon.svg"
                alt="wheelchair icon"
              />
              <h3>{t("icons.wheelchair_accessible.title")}</h3>
            </div>
            <div
              className={`flex flex-row items-center gap-2 hover:cursor-pointer bg-primary4 hover:bg-primary3 rounded-full p-1 min-w-fit ${
                filter_items.includes("accepts_reservations")
                  ? "ring-2 ring-gray-400"
                  : ""
              }`}
              onClick={() => filter_features("accepts_reservations")}
            >
              <Image
                width={35}
                height={35}
                src="/imgs/reservations-icon.svg"
                alt="reservations icon"
              />
              <h3>{t("icons.accepts_reservations.title")}</h3>
            </div>
            <div
              className={`flex flex-row items-center gap-2 hover:cursor-pointer bg-primary4 hover:bg-primary3 rounded-full p-1 min-w-fit ${
                filter_items.includes("family_friendly")
                  ? "ring-2 ring-gray-400"
                  : ""
              }`}
              onClick={() => filter_features("family_friendly")}
            >
              <Image
                className="rounded-full"
                width={35}
                height={35}
                src="/imgs/family-icon.svg"
                alt="family icon"
              />
              <h3>{t("icons.family_friendly.title")}</h3>
            </div>
            <div className="group">
              <div
                className={`flex flex-row items-center gap-2 hover:cursor-pointer bg-primary4 min-w-fit group-hover:bg-primary3 rounded-full group-hover:rounded-none p-1 ${
                  price_filter ? "ring-2 ring-gray-400" : ""
                }`}
              >
                <Image
                  width={35}
                  height={35}
                  src="/imgs/price-icon.svg"
                  alt="price icon"
                />
                <h3>{t("icons.price.title")}</h3>
              </div>
              <div className="hidden absolute group-hover:flex flex-col hover:cursor-pointer bg-primary4 z-[500] min-w-fit p-1">
                <button
                  className={`text-primary1 hover:bg-primary3 py-1 px-3 ${
                    lang === "en" ? "" : "text-right"
                  } ${price_filter === "low" ? "ring-2 ring-gray-400" : ""}`}
                  style={{ color: "var(--primary-1)" }}
                  onClick={() => filter_price("low")}
                >
                  {t("icons.price.range_low")}
                </button>
                <button
                  className={`text-primary1 hover:bg-primary3 py-1 px-3 ${
                    lang === "en" ? "" : "text-right"
                  } ${price_filter === "medium" ? "ring-2 ring-gray-400" : ""}`}
                  style={{ color: "var(--primary-1)" }}
                  onClick={() => filter_price("medium")}
                >
                  {t("icons.price.range_medium")}
                </button>
                <button
                  className={`text-primary1 hover:bg-primary3 mb-[1px] px-3 ${
                    lang === "en" ? "" : "text-right"
                  } ${price_filter === "high" ? "ring-2 ring-gray-400" : ""}`}
                  style={{ color: "var(--primary-1)" }}
                  onClick={() => filter_price("high")}
                >
                  {t("icons.price.range_high")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {filtered_cities.map((city) => {
        return (
          <Marker
            key={city.id}
            position={[city.latitude, city.longitude]}
            icon={shops_icon}
          >
            <Popup>
              <div className="flex flex-col gap-2 justify-center text-center text-2xl">
                <Image
                  width={250}
                  height={250}
                  src={"/imgs/shop-image.jpg"}
                  alt="shop image"
                  className="rounded"
                  style={{ height: "250px", width: "250px" }}
                />
                <h1 className="text-primary1 font-bold">
                  {lang === "en" ? city.name_en : city.name_ar}
                </h1>
                <div
                  className={`flex ${
                    lang === "en" ? "flex-row" : "flex-row-reverse"
                  } justify-evenly text-lg text-primary1`}
                >
                  <h2>{t("price.title")} </h2>
                  <h3 className="font-medium">{city.price_per_person}</h3>
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-4">
                  {city.toilets ? (
                    <Image
                      width={35}
                      height={35}
                      src="/imgs/toilet-icon.svg"
                      alt="toilet icon"
                    />
                  ) : null}
                  {city.wifi ? (
                    <Image
                      width={35}
                      height={35}
                      src="/imgs/wifi-icon.svg"
                      alt="wifi icon"
                    />
                  ) : null}
                  {city.wheelchair_accessible ? (
                    <Image
                      width={35}
                      height={35}
                      src="/imgs/wheelchair-icon.svg"
                      alt="wheelchair icon"
                    />
                  ) : null}
                  {city.accepts_reservations ? (
                    <Image
                      width={35}
                      height={35}
                      src="/imgs/reservations-icon.svg"
                      alt="reservations icon"
                    />
                  ) : null}
                  {city.family_friendly ? (
                    <Image
                      className="rounded-full"
                      width={35}
                      height={35}
                      src="/imgs/family-icon.svg"
                      alt="family icon"
                    />
                  ) : null}
                </div>
                <button className="bg-primary4 rounded-full hover:shadow-lg">
                  <a
                    className="!text-primary1"
                    href={city.map_url}
                    target="_blank"
                  >
                    {t("button.text")}
                  </a>
                </button>
              </div>
            </Popup>
          </Marker>
        );
      })}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
