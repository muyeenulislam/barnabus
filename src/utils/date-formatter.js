const ddmmmyyyy = (d, locale = "en-GB") =>
  new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);

export { ddmmmyyyy };
