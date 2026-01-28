import Image from "next/image";

export default function Tributes() {
  const tributes = [
    {
      quote: "A titan of Kenyan journalism.",
      source: "Media Council of Kenya",
      link: "https://www.k24tv.co.ke/news/mck-mourns-veteran-journalist-george-githii-146123/",
    },
    {
      quote:
        "He revolutionised Kenyan journalism with bold editorials, confronting authority and defending truth.",
      source: "Media Council of Kenya",
      link: "https://www.k24tv.co.ke/news/mck-mourns-veteran-journalist-george-githii-146123/",
    },
    {
      quote:
        "He was always in the limelight because of the articles he did, and his bold covering of state ills.",
      source: "Kenyans.co.ke",
      link: "https://www.kenyans.co.ke/news/69142-nation-journalist-who-was-caught-writing-living-presidents-obituary",
    },
    {
      quote:
        "He was summoned frequently by the President and discussed in Parliament.",
      source: "Kenyans.co.ke",
      link: "https://www.kenyans.co.ke/news/69142-nation-journalist-who-was-caught-writing-living-presidents-obituary",
    },
    {
      quote:
        "A man who led Kenya’s top newspapers in the 1960s to the 1980s amid turmoil.",
      source: "MSN / Nation Media Group",
      link: "https://www.msn.com/en-xl/africa/other/glowing-tributes-for-former-editor-george-githii/ar-AA1kZq9N",
    },
    {
      quote: "Editor who dared challenge the State.",
      source: "Daily Nation (archived)",
      link: "https://www.thefreelibrary.com/George+Githii%3a+Editor+who+dared+challenge+the+State.-a0798765432",
    },
    {
      quote:
        "He passed away surrounded by family, closing a life defined by courage, intellect, and unwavering conviction.",
      source: "Tubman Funeral Homes Obituary",
      link: "https://www.tubmanfuneralhomes.com/obituaries/george-githii",
    },
    {
      quote:
        "An Oxford‑educated journalist, former Private Secretary to President Kenyatta, and Editor‑in‑Chief of both the Standard and Daily Nation, he shaped public discourse with fearless integrity.",
      source: "Tubman Funeral Homes Obituary",
      link: "https://www.tubmanfuneralhomes.com/obituaries/george-githii",
    },
    {
      quote:
        "A loving father and a man of deep faith, he raised his children through hardship with strength, tenderness, and unshakeable devotion.",
      source: "Tubman Funeral Homes Obituary",
      link: "https://www.tubmanfuneralhomes.com/obituaries/george-githii",
    },
    {
      quote:
        "He was proud to call Canada home, grateful for the safety and opportunity it provided as he built a life for his family.",
      source: "Tubman Funeral Homes Obituary",
      link: "https://www.tubmanfuneralhomes.com/obituaries/george-githii",
    },
    {
      quote:
        "A perpetual student, he found joy in learning — from political theory to economics and philosophy — always seeking truth with a sharp, curious mind.",
      source: "Tubman Funeral Homes Obituary",
      link: "https://www.tubmanfuneralhomes.com/obituaries/george-githii",
    },
  ];

  const firstTwo = tributes.slice(0, 2);
  const remaining = tributes.slice(2);

  return (
    <section id="tributes" className="section section--tint">
      <div className="section-container">
        {/* HEADER */}
        <h2 className="section-title">Tributes</h2>
        <p className="section-subtitle">
          Reflections from institutions, colleagues, and the public record.
        </p>

        {/* FIRST ROW: TWO TRIBUTES STACKED + PORTRAIT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 280px",
            gap: "2rem",
            alignItems: "start",
            marginTop: "-0.5rem",
            marginBottom: "2rem",
          }}
        >
          {/* TWO TRIBUTES STACKED (LEFT SIDE) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {firstTwo.map((t, i) => (
              <div
                key={i}
                className="tribute-card"
                style={{
                  borderRadius: "12px",
                  padding: "1rem",
                }}
              >
                <p className="tribute-quote">“{t.quote}”</p>
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tribute-source"
                >
                  — {t.source}
                </a>
              </div>
            ))}
          </div>

          {/* PORTRAIT (RIGHT SIDE) */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                position: "relative",
                width: "260px",
                height: "260px",
                borderRadius: "16px",
                overflow: "hidden",
                marginLeft: "auto",
              }}
            >
              <Image
                src="/gallery/george.jpg"
                alt="George Githii"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <p
              style={{
                marginTop: "0.75rem",
                fontSize: "1.05rem",
                color: "var(--color-text-soft)",
                fontWeight: 500,
              }}
            >
              1936 — 2025
            </p>
          </div>
        </div>

        {/* REMAINING TRIBUTES STACKED ONE PER ROW */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            marginTop: "-1rem",
          }}
        >
          {remaining.map((t, i) => (
            <div
              key={i}
              className="tribute-card"
              style={{
                borderRadius: "12px",
                padding: "1rem",
              }}
            >
              <p className="tribute-quote">“{t.quote}”</p>
              <a
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tribute-source"
              >
                — {t.source}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
