export default function MolecularLab() {
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
          In a flat drawing, tRNA often looks like a cloverleaf. In space, its
          arms organize into an L shape.
        </p>
      </div>
      <div className="explorer-grid">
        <figure className="molecule-viewer">
          <div className="viewer-topline">
            <span>
              <span className="small-dot" aria-hidden="true"></span> Strand A
            </span>
            <span>1EHZ / tRNA</span>
          </div>
          <img
            id="model-fallback"
            src="/assets/images/trna-backbone.svg"
            width="640"
            height="500"
            loading="lazy"
            alt="Three-dimensional path of the 76 nucleotides in tRNA, shown as connected points."
          />

          <div className="viewer-legend">
            <span>
              <i className="legend-dot chain-dot" aria-hidden="true"></i> RNA
              strand
            </span>
            <span>
              <i className="legend-dot anticodon-dot" aria-hidden="true"></i>
              Anticodon when highlighted
            </span>
          </div>
        </figure>
        <div className="explorer-notes">
          <span className="note-kicker">The piece we are looking at</span>
          <h3>A tiny adapter.</h3>
          <p>
            This tRNA helps add phenylalanine to a protein. One end carries the
            amino acid; the other recognizes a codon in messenger RNA.
          </p>
          <dl className="spec-list">
            <div>
              <dt>Length</dt>
              <dd>
                76 <span>nucleotides</span>
              </dd>
            </div>
            <div>
              <dt>Organism</dt>
              <dd>
                <i lang="la">S. cerevisiae</i>
              </dd>
            </div>
            <div>
              <dt>Experimental resolution</dt>
              <dd>
                1.93 <span>Å</span>
              </dd>
            </div>
          </dl>
          <div className="observation">
            <p className="eyebrow">Notice this</p>
            <p id="model-note" role="status">
              The anticodon occupies just three positions on the strand: 34, 35,
              and 36. Highlight it to find it.
            </p>
          </div>
          <a className="text-link" href="/assets/data/1EHZ.pdb" download>
            Download the original coordinates
            <span aria-hidden="true">↓</span>
          </a>
          <noscript>
            <p className="noscript-note">
              The image shows the complete structure. Enable JavaScript to
              rotate it and highlight the anticodon.
            </p>
          </noscript>
        </div>
      </div>
    </section>
  );
}
