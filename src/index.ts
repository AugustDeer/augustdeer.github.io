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

const slotMachine = document.getElementById("slot-machine");

if (slotMachine) {
  // Save and Remove content
  slotMachine.innerHTML = `<span class="slot-machine-inner">${MONTHS.map((m) => `<span class="slot-machine-slot">${m}</span>`).join("")}</span>`;

  // Start animation
  slotMachine.classList.add(ANIMATING_CLASS);

  // Cleanup on animation end
  slotMachine.addEventListener("animationend", () => {
    slotMachine.classList.remove(ANIMATING_CLASS);
    slotMachine.outerHTML = "August";
  });
}
