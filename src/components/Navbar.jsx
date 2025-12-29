import ScrambleText from "./ScrambleText";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <>
      <div style={{
        gridColumn: "1 / 4",
        display: "flex",
        justifyContent: "flex-start"
      }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit", fontSize: "10px" }}>
          <ScrambleText text="VEDANSH DERASHRI" />
        </Link>
      </div>

      <div
        style={{
          gridColumn: "7 / 13",
          display: "flex",
          gap: 48,
          justifyContent: "flex-end",
        }}
      >
        <Link to="/" style={{ color: pathname === "/" ? "#9eff00" : "inherit", fontSize: "10px" }}>
          <ScrambleText text="[ WORK ]" />
        </Link>

        <Link
          to="/info"
          style={{ color: pathname === "/info" ? "#9eff00" : "inherit", fontSize: "10px" }}
        >
          <ScrambleText text="[ INFO ]" />
        </Link>

        <Link to="/archive"
          style={{ color: pathname === "/archive" ? "#9eff00" : "inherit", fontSize: "10px" }}>
          <ScrambleText text="[ ARCHIVE ]" />
        </Link>
      </div>
    </>
  );
}
