import Alpine from "alpinejs";

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
    const originalContent = el.innerHTML;
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
      el.innerHTML = jokeState ? jokeContent : originalContent;
      if (isLink)
        el.href = jokeState ? "https://www.youtube.com/watch?v=vZYMbSHRoas" : originalHref;
    });
  }
});

Alpine.start();

function setupReanimate() {
  const slotMachine = document.querySelector(".slot-machine");
  if (slotMachine) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.getAnimations({ subtree: true }).forEach((a) => a.play());
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(slotMachine);
  }
}

document.getElementById("jokeButton")?.addEventListener("click", setupReanimate, { once: true });
