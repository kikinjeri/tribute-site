import Image from "next/image";

export default function Career() {
  return (
    <section id="career" className="section">
      <div className="section-container section-row">
        <div>
          <h2 className="section-title">Career & Journalism</h2>
          <p className="section-text">
            Throughout his distinguished career, George Githii served as editor
            of the Daily Nation and other key publications, using his platform
            to challenge power, provoke thought, and defend the public interest.
            His writing was sharp, principled, and unafraid.
          </p>
        </div>

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
    </section>
  );
}
