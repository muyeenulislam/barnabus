const handleCenterScroll = (e, id, route) => {
  e?.preventDefault?.();

  if (typeof window === "undefined" || typeof document === "undefined") return;

  const el = document.getElementById(id);
  if (!el) return;

  const headerH = document.querySelector("header")?.offsetHeight ?? 0;

  const y =
    el.getBoundingClientRect().top +
    window.scrollY -
    (window.innerHeight - el.offsetHeight) / 2 -
    headerH;

  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });

  const url = new URL(window.location.href);
  if (typeof route === "string" && route.trim()) {
    url.pathname = route.startsWith("/") ? route : `/${route}`;
  }
  url.hash = id;
  history.replaceState(null, "", url.toString());
};

export default handleCenterScroll;
