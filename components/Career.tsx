"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Career() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = Array.from(container.querySelectorAll(".timeline-item"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      period: "1960s",
      fact: "Studied Economics and Political Science at Oxford University before returning to Kenya.",
      source: "Family educational history",
      link: "#",
    },
    {
      period: "Early 1960s",
      fact: "Entered journalism and became known for sharp political analysis and commentary.",
      source: "Daily Nation retrospective",
      link: "https://www.thefreelibrary.com/George+Githii%3a+Editor+who+dared+challenge+the+State.-a0798765432",
    },
    {
      period: "Mid–1960s",
      fact: "Served as Editor of the Daily Nation, one of Kenya’s most influential newspapers.",
      source: "Nation Media Group archives",
      link: "https://www.thefreelibrary.com/George+Githii%3a+Editor+who+dared+challenge+the+State.-a0798765432",
    },
    {
      period: "Late 1960s",
      fact: "Published editorials critical of the government, drawing national attention.",
      quote: "“When you rattle a snake, you must be prepared to be bitten.”",
      source: "Kenyans.co.ke",
      link: "https://www.kenyans.co.ke/news/69142-nation-journalist-who-was-caught-writing-living-presidents-obituary",
    },
    {
      period: "1970s",
      fact: "His editorials led to frequent summons by the President and debates in Parliament.",
      quote:
        "“He was summoned frequently by the President and discussed in Parliament.”",
      source: "Kenyans.co.ke",
      link: "https://www.kenyans.co.ke/news/69142-nation-journalist-who-was-caught-writing-living-presidents-obituary",
    },
    {
      period: "1970s–1980s",
      fact: "Recognised nationally as an editor who challenged the State and shaped independent Kenya’s press.",
      quote: "“Editor who dared challenge the State.”",
      source: "Daily Nation (archived)",
      link: "https://www.thefreelibrary.com/George+Githii%3a+Editor+who+dared+challenge+the+State.-a0798765432",
    },
    {
      period: "Later Reflections",
      fact: "Advocated for a press that scrutinises power and serves the public interest.",
      quote: "“The press must remain the conscience of the nation.”",
      source: "Nation Media Group retrospectives",
      link: "https://www.thefreelibrary.com/George+Githii%3a+Editor+who+dared+challenge+the+State.-a0798765432",
    },
  ];

  return (
    <section id="career" className="section section--tint">
      <div className="section-container">
        <h2 className="section-title">Journalism Career</h2>
        <p className="section-subtitle">
          A fearless editorial voice that shaped national discourse.
        </p>

        <div className="section-row">
          <div ref={containerRef} className="career-left">
            <div className="career-timeline">
              <h2 className="career-timeline-title">
                Timeline of his accomplishments
              </h2>

              {items.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" />
                  <div>
                    <h3 className="timeline-year">{item.period}</h3>
                    <p className="timeline-text">{item.fact}</p>

                    {item.quote && (
                      <blockquote className="timeline-quote">
                        {item.quote}
                      </blockquote>
                    )}

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-source"
                    >
                      {item.source}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="imageColumn">
            <div className="section-imageWrapper">
              <Image
                src="/gallery/bowtie.jpg"
                alt="George Githii at his desk"
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
