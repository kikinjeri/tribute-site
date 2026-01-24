"use client";

import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

export default function Father() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    "/gallery/boxing.jpg",
    "/gallery/carletondad.jpg",
    "/gallery/atdesk.jpg",
    "/gallery/dad1.jpg",
    "/gallery/dad2.jpg",
    "/gallery/dad4.jpg",
    "/gallery/dad5.jpg",
    "/gallery/dad6.jpg",
    "/gallery/dad7.jpg",
    "/gallery/eating.jpg",
    "/gallery/grey-robe.jpg",
    "/gallery/mask.jpg",
    "/gallery/plaidshirt.jpg",
    "/gallery/redsox.jpg",
    "/gallery/silly-dad.jpg",
    "/gallery/dadme.jpg",
  ];

  return (
    <section id="father" className="section section--tint">
      <div className="section-container">
        {/* Title */}
        <h2 className="section-title fade-in">George the Father</h2>

        {/* Narrative transition */}
        <p className="section-subtitle fade-in">
          A man of warmth, faith, humor, and unwavering devotion.
        </p>

        {/* FIRST BLOCK */}
        <div className="section-row fade-in">
          <div>
            <p className="section-text">
              Beyond the newsroom and the public eye, George Githii was a father
              of rare depth, warmth, and intentionality. He was loving, gentle,
              kind, quirky and funny. He shared with his children a love of
              books, curiosity, and learning.
            </p>

            <p className="section-text">
              He moved to Ottawa, Ontario with his children Ngatho, Mwihaki, and
              Muchigi in 1987. He turned his life around and gave it to God,
              raising his children with faith, discipline, and compassion.
            </p>
          </div>

          <div className="imageColumn">
            <Image
              src="/gallery/silly-dad.jpg"
              alt="George Githii and his daughter Mwihaki"
              className="section-image"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* SECOND BLOCK (REVERSED) */}
        <div className="section-row reverse fade-in">
          <div>
            <p className="section-text">
              He chose Ottawa because it was a safe place where his children
              could go to school, learn, grow, and create lives for themselves.
              He devoted his life to his children and the word of God.
            </p>

            <p className="section-text">
              There was not a day that went by that he did not express his love
              and pride for each of his children.
            </p>
          </div>

          <div className="imageColumn">
            <Image
              src="/gallery/adidas.jpg"
              alt="George Githii with his children"
              className="section-image"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* FINAL PARAGRAPH */}
        <p className="section-text fade-in" style={{ marginTop: "3rem" }}>
          He was happiest and most proud of being a father to his three
          children. As a father he was patient, kind, loving, firm, stern,
          gentle, and deeply other‑regarding.
        </p>

        {/* GALLERY */}
        <div id="gallery" className="gallery fade-in">
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt=""
              className="section-image"
              width={400}
              height={400}
              loading="lazy"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        {/* LIGHTBOX */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map((src) => ({ src }))}
        />

        {/* Divider */}
        <div className="section-divider fade-in"></div>
      </div>
    </section>
  );
}
