class SlotMachine extends HTMLElement {
  static ANIMATING_CLASS = "animating";
  originalText!: string;

  connectedCallback() {
    // Save and Remove content
    this.originalText = this.textContent;
    this.textContent = "";

    // Generate animation content
    this.appendChild(this.inner());

    // Start animation
    this.classList.add(SlotMachine.ANIMATING_CLASS);

    // Cleanup on animation end
    this.addEventListener("animationend", () => {
      this.cleanup();
    });
  }

  /** Generate animation content */
  inner() {
    const slotTextRaw = this.dataset.slots;
    const slotText = slotTextRaw ? slotTextRaw.split(",") : [];
    slotText.push(this.originalText);
    const slots = slotText.map((slotText) => {
      const slot = document.createElement("span");
      slot.className = "slot-machine-slot";
      slot.textContent = slotText;
      return slot;
    });
    const childNode = document.createElement("span");
    childNode.className = "slot-machine-inner";
    childNode.replaceChildren(...slots);
    return childNode;
  }

  /** Cleanup animation content */
  cleanup() {
    this.classList.remove(SlotMachine.ANIMATING_CLASS);
    this.textContent = this.originalText;
  }
}

customElements.define("slot-machine", SlotMachine);
