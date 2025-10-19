const emailValid = (v) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(String(v || "").trim());

export { emailValid };
