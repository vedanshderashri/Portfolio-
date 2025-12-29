import SystemTime from "./SystemTime";

export default function Hero() {
  return (
    <>
      {/* NAME */}
      <div className="hero-name">
        <h1 data-scramble>
          VEDANSH
          <br />
          DERASHRI
        </h1>
      </div>

      {/* ROLE */}
      <div className="hero-role">
        <p>
          DESIGNER &<br />DEVELOPER
        </p>
      </div>

      {/* LOCATION + TIME */}
      <div className="hero-time">
        <p>INDIA</p>
        <SystemTime />
      </div>
    </>
  );
}
