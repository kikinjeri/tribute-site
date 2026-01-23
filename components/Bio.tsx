import Image from "next/image";

export default function Bio() {
  return (
    <section id="bio" className="section">
      <div className="section-container section-row reverse">
        <div>
          <h2 className="section-title">Biography</h2>
          <p className="section-text">
            Born in Nairobi on December 12, 1936, George Githii studied law at
            the University of Dar es Salaam and later at Oxford. He returned to
            Kenya to take on influential roles in government and journalism,
            becoming one of the country’s most prominent editorial voices.
          </p>
        </div>

        <div className="imageColumn">
          <Image
            src="/gallery/bowtie.jpg"
            alt="George Githii"
            className="section-image"
            width={500}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
