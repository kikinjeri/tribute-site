import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="section">
      <div className="section-container section-row">
        <div>
          <h1 className="section-title">George Githii</h1>
          <p className="section-text">
            Journalist. Thinker. Father. A voice that shaped Kenya’s political
            and intellectual landscape.
          </p>
        </div>

        <div className="imageColumn">
          <Image
            src="/gallery/dad5.jpg"
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
