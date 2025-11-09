const handleCenterScroll = (e, id, route) => {
  e.preventDefault();
  const el = document.getElementById(id);

  if (!el) return;

  const header = document.querySelector("header");
  const headerH = header?.offsetHeight ?? 0;

  const y =
    el.getBoundingClientRect().top +
    window.scrollY -
    (window.innerHeight - el.offsetHeight) / 2 -
    headerH;

  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  history.replaceState(null, "", `${route && `/${route}`}#${id}`);
};
export default handleCenterScroll;
