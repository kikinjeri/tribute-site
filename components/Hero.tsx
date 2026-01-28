import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        {/* LEFT — IMAGE */}
        <div className="hero-imageWrapper">
          <Image
            src="/gallery/dad5.jpg"
            alt="George Githii"
            fill
            className="hero-image"
            priority
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="hero-text">
          <h2>George Githii</h2>
          <p>Academic. Journalist. Man of God. Father.</p>
        </div>
      </div>
    </section>
  );
}
