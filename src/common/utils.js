export const formatCurrency = (price, locales = "us-US", currency = "INR") => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency,
  }).format(price);
};

// export const translateString = (string, language, API_key) => {
//   if (!API_key) {
//     return string;
//   } else {
//     let traslatedString;
//     return translate("Hello world", {
//       to: language,
//       key: API_key,
//     })
//       .then((res) => (traslatedString = res))
//       .catch((err) => console.log(err));
//   }
// };

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
