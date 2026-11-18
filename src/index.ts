const JOKE =
  "Did you know I was an extra on America's Got Talent? Did you know I was an extra on America's Got Talent? I was an extra on America's Got Talent! Did you know that? Did you know I was an extra on America's Got Talent?";

let jokeState = false;

// Setup joke text toggles
const callbacks: Array<() => void> = [];
function setupJoke(el: HTMLElement) {
  const originalContent = el.innerHTML;
  const isLink = el instanceof HTMLAnchorElement;
  const originalHref = isLink ? el.href : "";
  if (el.dataset.joke === undefined) return;
  const jokeContent =
    el.dataset.joke === ""
      ? JOKE
      : el.dataset.joke === "short"
        ? "America's Got Talent"
        : el.dataset.joke;

  callbacks.push(() => {
    el.innerHTML = jokeState ? jokeContent : originalContent;
    if (isLink) el.href = jokeState ? "https://www.youtube.com/watch?v=vZYMbSHRoas" : originalHref;
  });
}

const jokeElements = Array.from(document.querySelectorAll("*[data-joke]")).filter(
  (el) => el instanceof HTMLElement,
);
jokeElements.forEach(setupJoke);

// Special slot machine toggle
const slotMachine = document.getElementById("slotMachine")!;
const originalSlots = slotMachine.dataset.slots;
const originalSlotFinal = slotMachine.dataset.slotFinal;
function toggleSlots() {
  slotMachine.dataset.slots = jokeState ? slotMachine.dataset.jokeSlots : originalSlots;
  slotMachine.dataset.slotFinal = jokeState ? slotMachine.dataset.jokeSlotFinal : originalSlotFinal;
}
callbacks.push(toggleSlots);

// Reanimate slot-machine after joke
function setupReanimate() {
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

// Attach callbacks to joke button
const jokeButton = document.getElementById("jokeButton")!;
jokeButton.addEventListener("click", () => {
  jokeState = !jokeState;
  callbacks.forEach((f) => f());
});
jokeButton.addEventListener("click", setupReanimate, { once: true });
