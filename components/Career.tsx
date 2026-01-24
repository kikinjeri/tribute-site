import Image from "next/image";

export default function Career() {
  return (
    <section id="career" className="section">
      <div className="section-container">
        {/* Title */}
        <h2 className="section-title fade-in">Career & Journalism</h2>

        {/* Narrative transition */}
        <p className="section-subtitle fade-in">
          A fearless editorial voice that shaped national discourse.
        </p>

        <div className="section-row fade-in">
          {/* TEXT COLUMN */}
          <div>
            <p className="section-text">
              Throughout his distinguished career, George Githii served as
              editor of the Daily Nation and other key publications, using his
              platform to challenge power, provoke thought, and defend the
              public interest.
            </p>

            <p className="section-text">
              His writing was sharp, principled, and unafraid — a reflection of
              his unwavering belief in the role of journalism as a guardian of
              truth and democracy.
            </p>
          </div>

          {/* IMAGE COLUMN */}
          <div className="imageColumn">
            <Image
              src="/gallery/suit.jpg"
              alt="George Githii at his desk"
              className="section-image"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Divider for flow */}
        <div className="section-divider fade-in"></div>
      </div>
    </section>
  );
}
