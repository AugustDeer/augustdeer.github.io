import intersect from "@alpinejs/intersect";
import Alpine from "alpinejs";

Alpine.plugin(intersect);

Alpine.store("joke", false);

const JOKE =
  "Did you know I was an extra on America's Got Talent? Did you know I was an extra on America's Got Talent? I was an extra on America's Got Talent! Did you know that? Did you know I was an extra on America's Got Talent?";

Alpine.directive("joke", (el, { value, expression }, { effect }) => {
  if (value && value.startsWith("data-")) {
    const originalData = el.getAttribute(value);
    if (originalData !== null)
      effect(() => {
        const jokeState: boolean = Alpine.store("joke") as boolean;
        el.setAttribute(value, jokeState ? expression : originalData);
      });
  } else {
    const originalContent = el.textContent;
    const isLink = el instanceof HTMLAnchorElement;
    const originalHref = isLink ? el.href : "";
    let jokeContent: string;
    if (expression) jokeContent = expression;
    else if (value == "hide") jokeContent = "";
    else if (value == "short") jokeContent = "America's Got Talent";
    else if (value == "med") jokeContent = "Did you know I was an extra on America's Got Talent?";
    else jokeContent = JOKE;

    effect(() => {
      const jokeState: boolean = Alpine.store("joke") as boolean;
      el.textContent = jokeState ? jokeContent : originalContent;
      if (isLink)
        el.href = jokeState ? "https://www.youtube.com/watch?v=vZYMbSHRoas" : originalHref;
    });
  }
});

window.Alpine = Alpine;

Alpine.start();
