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
    <section id="father" className="section">
      {/* FIRST BLOCK */}
      <div className="section-container section-row">
        <div>
          <h2 className="section-title">George the Father</h2>
          <p className="section-text">
            Beyond the newsroom and the public eye, George Githii was a father
            of rare depth, warmth, and intentionality. He was loving, gentle,
            kind, quirky and funny. He shared with his children a love of books,
            curiosity, and learning. He moved to Ottawa, Ontario with his
            children Ngatho, Mwihaki, and Muchigi in 1987. He turned his life
            around and gave it to God and raised his children with faith,
            discipline, and compassion.
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
      <div
        className="section-container section-row reverse"
        style={{ marginTop: "3rem" }}
      >
        <div>
          <p className="section-text">
            He chose Ottawa because it was a safe place where his children could
            go to school, learn, grow, and create lives for themselves. He
            devoted his life to his children and the word of God. There was not
            a day that went by that he did not express his love and pride for
            each of his children.
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

      {/* FINAL PARAGRAPH + GALLERY */}
      <div className="section-container" style={{ marginTop: "3rem" }}>
        <p className="section-text">
          He was happiest and most proud of being a father to his three
          children. As a father he was patient, kind, loving, firm, stern,
          gentle and other regarding.
        </p>

        <div id="gallery" className="gallery">
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

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map((src) => ({ src }))}
        />
      </div>
    </section>
  );
}
