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
  ];
  return (
    <section id="tributes" className="section section--tint">
      {" "}
      <div className="section-container">
        {" "}
        <h2 className="section-title">Tributes</h2>{" "}
        <p className="section-subtitle">
          {" "}
          Reflections from institutions, colleagues, and the public record.{" "}
        </p>{" "}
        <div className="tributes-grid">
          {" "}
          {tributes.map((t, i) => (
            <div key={i} className="tribute-card">
              {" "}
              <p className="tribute-quote">“{t.quote}”</p>{" "}
              <a
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tribute-source"
              >
                {" "}
                — {t.source}{" "}
              </a>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
