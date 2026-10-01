// Mobile menu.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#nav-links");
const mobileScreen = window.matchMedia("(max-width: 640px)");

document.documentElement.classList.add("has-js");
menuButton.hidden = false;

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
  menuButton.querySelector("span").textContent = open ? "−" : "+";
}

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && mobileScreen.matches) {
    setMenu(false);
    menuButton.focus({ preventScroll: true });
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    setMenu(false);
    menuButton.focus();
  }
});

mobileScreen.addEventListener("change", () => {
  const focusWasInMenu = navigation.contains(document.activeElement);
  setMenu(false);
  if (mobileScreen.matches && focusWasInMenu) menuButton.focus();
  if (!mobileScreen.matches && document.activeElement === menuButton) {
    navigation.querySelector("a").focus();
  }
});

// Keyboard-accessible tabs.
const typeButtons = Array.from(document.querySelectorAll(".type-button"));
const typePanels = Array.from(document.querySelectorAll(".type-panel"));

function selectType(button, moveFocus = false) {
  typeButtons.forEach((item) => {
    const selected = item === button;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  typePanels.forEach((panel) => {
    panel.hidden = panel.id !== button.getAttribute("aria-controls");
  });
  if (moveFocus) button.focus();
}

typePanels.forEach((panel, index) => {
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("aria-labelledby", typeButtons[index].id);
  panel.tabIndex = 0;
});

typeButtons.forEach((button, index) => {
  button.addEventListener("click", () => selectType(button));
  button.addEventListener("keydown", (event) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % typeButtons.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + typeButtons.length) % typeButtons.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = typeButtons.length - 1;
    else return;
    event.preventDefault();
    selectType(typeButtons[next], true);
  });
});

selectType(typeButtons[0]);
document.querySelector("#type-tabs").hidden = false;

// Project the structure.
function setupModel(points) {
  const model = document.querySelector("#rna-model");
  const shapes = document.querySelector("#model-shapes");
  const rotation = document.querySelector("#rotation");
  const rotationValue = document.querySelector("#rotation-value");
  const highlightButton = document.querySelector("#highlight-button");
  const note = document.querySelector("#model-note");
  const modelDescription = document.querySelector("#model-desc");
  const initialNote = note.textContent;
  const radius = Math.max(
    ...points.map((point) => Math.hypot(...point.position)),
  );
  const scale = 190 / radius;
  let highlighted = false;

  function drawModel() {
    const degrees = Number(rotation.value);
    const radians = (degrees * Math.PI) / 180;
    const projected = points.map((point) => {
      const [x, y, z] = point.position;
      return {
        x: 320 + (x * Math.cos(radians) + z * Math.sin(radians)) * scale,
        y: 250 + y * scale,
        z: -x * Math.sin(radians) + z * Math.cos(radians),
        residue: point.residue,
      };
    });
    const pieces = [];

    projected.forEach((point, index) => {
      const isAnticodon =
        highlighted && point.residue >= 34 && point.residue <= 36;
      const color = isAnticodon ? "#eda77c" : "#dce7b8";
      if (index > 0) {
        const previous = projected[index - 1];
        pieces.push({
          depth: (point.z + previous.z) / 2,
          markup:
            '<line x1="' +
            previous.x +
            '" y1="' +
            previous.y +
            '" x2="' +
            point.x +
            '" y2="' +
            point.y +
            '" stroke="#a8bd82" stroke-width="7" stroke-linecap="round"/>',
        });
      }
      pieces.push({
        depth: point.z + 0.1,
        markup:
          '<circle cx="' +
          point.x +
          '" cy="' +
          point.y +
          '" r="' +
          (isAnticodon ? 8 : 5) +
          '" fill="' +
          color +
          '" stroke="#273e32" stroke-width="1.5" data-residue="' +
          point.residue +
          '"/>',
      });
    });

    // Draw from back to front.
    shapes.innerHTML = pieces
      .sort((a, b) => a.depth - b.depth)
      .map((piece) => piece.markup)
      .join("");
    rotationValue.textContent = degrees + "°";
    rotation.setAttribute("aria-valuetext", degrees + " grados");
    modelDescription.textContent =
      "76 points follow the tRNA strand. View rotated " +
      degrees +
      " degrees." +
      (highlighted
        ? " Anticodon highlighted in orange: positions 34, 35, and 36."
        : "");
  }

  rotation.addEventListener("input", drawModel);
  document.querySelector("#rotate-button").addEventListener("click", () => {
    const next = Number(rotation.value) + 30;
    rotation.value = next > 180 ? next - 360 : next;
    drawModel();
  });
  highlightButton.addEventListener("click", () => {
    highlighted = !highlighted;
    highlightButton.setAttribute("aria-pressed", String(highlighted));
    note.textContent = highlighted
      ? "The three orange points are the anticodon: positions 34, 35, and 36. This region recognizes the mRNA codon."
      : initialNote;
    drawModel();
  });
  document.querySelector("#reset-view").addEventListener("click", () => {
    rotation.value = 0;
    highlighted = false;
    highlightButton.setAttribute("aria-pressed", "false");
    note.textContent = "Initial view restored. " + initialNote;
    drawModel();
  });

  drawModel();
  model.removeAttribute("hidden");
  document.querySelector("#model-fallback").hidden = true;
  document.querySelector("#viewer-controls").hidden = false;
}

if (typeof rnaPoints !== "undefined" && rnaPoints.length === 76) {
  setupModel(rnaPoints);
}

