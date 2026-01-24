import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* LEFT: IMAGE */}
        <div className="hero-imageWrapper">
          <Image
            src="/gallery/dad5.jpg"
            alt="George Githii"
            fill
            className="hero-image"
            priority
          />
        </div>

        {/* RIGHT: TEXT */}
        <div className="hero-text">
          <h1 className="hero-title">George Githii</h1>
          <p className="hero-tagline">
            Journalist. Father. Man of God.
          </p>
        </div>
      </div>
    </section>
  );
}
