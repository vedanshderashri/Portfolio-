import ScrambleText from "../components/ScrambleText";
import profile from "../assets/profile.png";

export default function Info() {
  return (
    <>
      {/* LEFT */}
      <div className="info-left">
        <h1 data-scramble className="info-title">
          
          <ScrambleText text="INFO"/>
          
          </h1>

        <div className="info-text">
          <p>
            I’m Vedansh Derashri, a UI/UX designer and front-end developer crafting
            clean, user-focused digital experiences that stand out and create
            real impact.
          </p>

          <p>
            Originally from India, I’m driven by a passion for transforming ideas
            into intuitive, visually compelling products and collaborating with
            communities and teams that aim higher than average.
          </p>

          <p>
            Currently, I serve as Creatives Lead at GDG AITR, where I shape visual
            identity and design direction for technical events and initiatives.
            I specialize in branding, user-centered design, and modern front-end
            development using Figma, React, HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="info-right">
        <img src={profile} alt="Portrait" className="info-image" />

        <div className="info-contact">
          <div>
            <ScrambleText text="Email ↗" />
            <div className="info-muted">
              <ScrambleText text="vedanshderashri8@gmail.com" />
            </div>
          </div>

          <div>
            <ScrambleText text="LinkedIn ↗" />
            <div className="info-muted">
              <ScrambleText text="linkedin.com/in/vedanssh/" />
            </div>
          </div>

          <div>
            <ScrambleText text="Behance ↗" />
            <div className="info-muted">
              <ScrambleText text="behance.net/vedansh" />
            </div>
          </div>

          <div>
            <ScrambleText text="Contra ↗" />
            <div className="info-muted">
              <ScrambleText text="contra.com/vedansh" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
