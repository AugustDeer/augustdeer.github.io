const monthSlots = document.getElementById("month-slots");
const august = document.getElementById("august");
if (monthSlots && august) {
  const positionInfo = august.getBoundingClientRect();
  monthSlots.style.width = positionInfo.width + "px";
}
