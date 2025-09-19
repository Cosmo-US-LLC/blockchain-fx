export function setCanonical(url) {
  let link = document.querySelector("link[rel='canonical']");
  if (link) {
    link.setAttribute("href", url);
  } else {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", url);
    document.head.appendChild(link);
  }
}
