import Image from "next/image";

export default function Bio() {
  return (
    <section id="bio" className="section">
      <div className="section-container">
        <h2 className="section-title">Biography</h2>
        <p className="section-subtitle">
          The story of a sharp mind shaped by history, curiosity, and
          conviction.
        </p>

        <div className="section-row">
          {/* LEFT: BIO TEXT + QUOTES TOGETHER */}
          <div>
            <p className="section-text">
              George Githii was a journalist, thinker, and public intellectual
              whose voice shaped Kenya’s political and cultural landscape. Known
              for his sharp wit and fearless commentary, he became one of the
              most influential editorial voices of his generation.
            </p>

            <div className="bio-quotes-inline">
              <h3 className="career-quotes-title">Quotes from George Githii</h3>

              <p className="quote-line">
                “When you rattle a snake, you must be prepared to be bitten.”
              </p>
              <p className="quote-line">
                “The press must remain the conscience of the nation.”
              </p>
              <p className="quote-line">
                “Journalism is not for the faint-hearted.”
              </p>
              <p className="quote-line">
                “If the government says it is raining, check for yourself.”
              </p>
            </div>
          </div>

          {/* RIGHT: IMAGE STAYS WHERE IT IS */}
          <div className="imageColumn">
            <div className="bio-imageWrapper">
              <Image
                src="/gallery/suit.jpg"
                alt="George Githii"
                fill
                className="section-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

