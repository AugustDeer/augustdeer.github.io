const ANIMATING_CLASS = "animating";
const MONTHS = [
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

const fragment = new DocumentFragment();

MONTHS.forEach((m) => {
  const span = document.createElement("span");
  span.className = "slot-machine-slot";
  span.innerHTML = m;
  span.ariaHidden = "true";
  fragment.append(span);
});

if (!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
  document.addEventListener("DOMContentLoaded", () => {
    const slotMachine = document.getElementById("slot-machine");

    if (slotMachine) {
      slotMachine.prepend(fragment);

      // Start animation
      slotMachine.classList.add(ANIMATING_CLASS);

      // Cleanup on animation end
      slotMachine.addEventListener("animationend", () => {
        slotMachine.classList.remove(ANIMATING_CLASS);
        slotMachine.textContent = "August";
      });
    }
  });
}
