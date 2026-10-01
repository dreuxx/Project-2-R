export default function RnaTypes() {
  return (
    <section
      className="section page-width"
      id="tipos"
      aria-labelledby="tipos-titulo"
    >
      <div className="section-heading">
        <p className="eyebrow">03 / Teamwork</p>
        <h2 id="tipos-titulo">Three ways to take part.</h2>
        <p>
          Making a protein takes a message, an adapter, and a meeting place.
          These three types of RNA play those roles.
        </p>
      </div>

      <article className="type-panel" id="panel-mrna">
        <div className="type-copy">
          <p className="eyebrow">Messenger RNA</p>
          <h3>
            Information travels
            <br />
            in a sequence.
          </h3>
          <p>
            mRNA carries a copy of the information in a gene. During
            translation, the ribosome reads its codons: groups of three
            nucleotides that specify amino acids or stop signals.
          </p>
          <p className="type-takeaway">
            <span>Remember it this way</span> It is the message being read.
          </p>
        </div>
        <figure className="type-figure">
          <img
            src="/assets/images/mrna.svg"
            width="500"
            height="280"
            loading="lazy"
            alt="Schematic fragment of messenger RNA with the codons AUG, GCU, and UAC grouped in threes."
          />
          <figcaption>Sequence diagram, not to molecular scale.</figcaption>
        </figure>
      </article>
      <article className="type-panel" id="panel-trna">
        <div className="type-copy">
          <p className="eyebrow">Transfer RNA</p>
          <h3>
            A bridge between
            <br />
            two languages.
          </h3>
          <p>
            tRNA connects a codon with its corresponding amino acid. Its
            anticodon pairs with mRNA, while its 3′ end carries the amino acid
            that will be added to the protein.
          </p>
          <p className="type-takeaway">
            <span>Remember it this way</span> It is the adapter that makes the
            delivery.
          </p>
        </div>
        <figure className="type-figure">
          <img
            src="/assets/images/trna.svg"
            width="500"
            height="280"
            loading="lazy"
            alt="Diagram of a tRNA with the amino acid at the 3′ end and the anticodon at the opposite end."
          />
          <figcaption>
            Functional diagram; the real model is in the explorer.
          </figcaption>
        </figure>
      </article>
      <article className="type-panel" id="panel-rrna">
        <div className="type-copy">
          <p className="eyebrow">Ribosomal RNA</p>
          <h3>
            Part of the machine
            <br />
            that joins the pieces.
          </h3>
          <p>
            rRNA forms the structural and catalytic core of the ribosome,
            together with proteins. It helps position tRNAs and form bonds
            between amino acids.
          </p>
          <p className="type-takeaway">
            <span>Remember it this way</span> It helps build the protein.
          </p>
        </div>
        <figure className="type-figure">
          <img
            src="/assets/images/rrna.svg"
            width="500"
            height="280"
            loading="lazy"
            alt="Diagram of a ribosome's two subunits, with messenger RNA passing between them and a chain of amino acids emerging."
          />
          <figcaption>
            The shapes summarize the ribosome, which contains RNA and proteins.
          </figcaption>
        </figure>
      </article>
      <p className="margin-note">
        And they are not the only ones: other RNAs, for example, help regulate
        gene expression.
      </p>
    </section>
  );
}
