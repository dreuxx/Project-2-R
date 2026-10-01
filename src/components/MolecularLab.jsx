import { useState } from "react";
import MoleculeViewer from "./MoleculeViewer";
import ViewerControls from "./ViewerControls";
import ModelNotes from "./ModelNotes";

export default function MolecularLab() {
  const [rotation, setRotation] = useState(0);
  const [highlighted, setHighlighted] = useState(false);

  function rotateStep() {
    setRotation((current) =>
      current + 30 > 180 ? current - 330 : current + 30,
    );
  }

  function resetView() {
    setRotation(0);
    setHighlighted(false);
  }

  return (
    <section
      className="section page-width"
      id="explorar"
      aria-labelledby="explorar-titulo"
    >
      <div className="section-heading">
        <p className="eyebrow">01 / Look closer</p>
        <h2 id="explorar-titulo">From strand to fold.</h2>
        <p>
          Turn the tRNA, find its anticodon, and look at how one strand folds
          into an L shape.
        </p>
      </div>
      <div className="explorer-grid">
        <MoleculeViewer rotation={rotation} highlighted={highlighted}>
          <ViewerControls
            rotation={rotation}
            highlighted={highlighted}
            onRotationChange={setRotation}
            onHighlightChange={setHighlighted}
            onRotateStep={rotateStep}
            onReset={resetView}
          />
        </MoleculeViewer>
        <ModelNotes rotation={rotation} highlighted={highlighted} />
      </div>
    </section>
  );
}
