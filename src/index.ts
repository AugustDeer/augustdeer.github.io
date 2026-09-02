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
  "August",
];

const fragment = new DocumentFragment();
const childNode = document.createElement("span");
childNode.className = "slot-machine-inner";
fragment.append(childNode);

MONTHS.forEach((m) => {
  const span = document.createElement("span");
  span.className = "slot-machine-slot";
  span.innerHTML = m;
  childNode.append(span);
});

if (!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
  const slotMachine = document.getElementById("slot-machine");

  if (slotMachine) {
    slotMachine.replaceChildren(fragment);

    // Start animation
    slotMachine.classList.add(ANIMATING_CLASS);

    // Cleanup on animation end
    slotMachine.addEventListener("animationend", () => {
      slotMachine.classList.remove(ANIMATING_CLASS);
      slotMachine.innerHTML = "August";
    });
  }
}
