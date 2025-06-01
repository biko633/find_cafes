import React from "react";

// this function checks if the items_to_filter contains items that are not valid
function checkItem(items, valid_items) {
  for (let i = 0; i < items.length; i++) {
    if (!valid_items.includes(items[i])) {
      console.log(`skipping this item -> ${items[i]} <- not valid`);
      return true;
    }
  }
  return false;
}

// this function converts the price range to a number "10-20" => 15
function convertPriceRange(p_range) {
  let price =
    p_range
      .split("–")
      .map((number) => Number(number))
      .reduce((result, current_num) => result + current_num) / 2;

  // console.log(price);
  return price;
}

// this function checks if the price range is valid
function checkPriceRange(p_range, filter) {
  const price = convertPriceRange(p_range) ?? "";
  if (filter === "low") {
    return price <= 15;
  } else if (filter === "medium") {
    return price > 15 && price <= 28;
  } else if (filter === "high") {
    return price > 28;
  } else {
    console.log("invalid price range filter check price range function");
    return true;
  }
}

// this function filters the database city_list based on the items_to_filter
const FilterFunc = (items_to_filter, city_list, price_range) => {
  // console.log(price_range);
  // console.log("filter function");
  const valid_items = [
    "toilets",
    "wifi",
    "wheelchair_accessible",
    "accepts_reservations",
    "family_friendly",
  ];
  // console.log(items_to_filter);

  // if there are no items to filter or somehow there is an item that is not valid in the items_to_filter
  if (items_to_filter == [] || checkItem(items_to_filter, valid_items)) {
    // console.log("no items to filter");
    return city_list;
  }

  //  first filter the database cities based on the price_range
  if (price_range !== "") {
    city_list = city_list.filter((city) => {
      return checkPriceRange(city.price_per_person, price_range);
    });
  }

  //filter the database cities based on the items_to_filter and price_range and return the filtered cities
  for (let i = 0; i < items_to_filter.length; i++) {
    city_list = city_list.filter((city) => {
      if (valid_items.includes(items_to_filter[i])) {
        // console.log("valid item");
        return city[items_to_filter[i]] === 1;
      } else {
        console.log(`skipping this item -> ${items_to_filter[i]} <- not valid`);
      }
    });
  }

  return city_list;
};

export default FilterFunc;
