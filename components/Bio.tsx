import Image from "next/image";

export default function Bio() {
  return (
    <section id="bio" className="section section--alt">
      <div className="section-container">
        {/* Title */}
        <h2 className="section-title fade-in">Biography</h2>

        {/* Narrative transition */}
        <p className="section-subtitle fade-in">
          The story of a sharp mind shaped by history, curiosity, and
          conviction.
        </p>

        <div className="section-row fade-in">
          {/* TEXT COLUMN */}
          <div>
            <p className="section-text">
              George Githii was a journalist, thinker, and public intellectual
              whose voice shaped Kenya’s political and cultural landscape. Known
              for his sharp wit and fearless commentary, he became one of the
              most influential editorial voices of his generation.
            </p>

            <p className="section-text">
              His work spanned decades of political transformation, and he
              remained committed to truth, integrity, and the power of ideas.
              Beyond the newsroom, he was a mentor, a storyteller, and a man
              deeply rooted in the history of his country.
            </p>
          </div>

          {/* IMAGE COLUMN */}
          <div className="imageColumn">
            <div className="section-imageWrapper">
              <Image
                src="/gallery/suit.jpg"
                alt="George Githii"
                fill
                className="section-image"
              />
            </div>
          </div>
        </div>

        {/* Optional divider for flow */}
        <div className="section-divider fade-in"></div>
      </div>
    </section>
  );
}
