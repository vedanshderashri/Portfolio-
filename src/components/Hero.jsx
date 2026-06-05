import SystemTime from "./SystemTime";

export default function Hero() {
  return (
    <>
      {/* NAME */}
      <div className="hero-name">
        <h1 data-scramble>
          RECENT
          <br />
          WORK
        </h1>
        <br />
        <br /><br /><br />

        <div class="Projects">
          <p>Bubble : Reduce Your Screen Time<br />
            <a href="https://play.google.com/store/apps/details?id=com.vedev.screentimer"><button id="action_buttons">Download My App</button></a>
          </p>
          <p>Multiplayer Shooting Game<br />
            <a href="https://shoot-win.onrender.com/"><button id="action_buttons">Play Now</button></a>
          </p>
        </div>
      </div>

      {/* ROLE
      <div className="hero-role">
        <p>
          DESIGNER &<br />DEVELOPER
        </p>
      </div> */}

      {/* LOCATION + TIME */}
      <div className="hero-time">
        <p>INDIA</p>
        <SystemTime />
      </div>


    </>
  );
}
