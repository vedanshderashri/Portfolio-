import { useState } from "react";
import w1 from "../assets/work.png";
import w2 from "../assets/work1.png";
import w3 from "../assets/work2.png";
import w4 from "../assets/work3.png";
import w5 from "../assets/work4.png";

const works = [
  { img: w1, href: "https://prourls.link/7JNYjP" },
  { img: w2, href: "https://prourls.link/lyXuT3" },
  { img: w3, href: "https://prourls.link/EaldXd" },
  { img: w4, href: "https://prourls.link/nfIzTr" },
  { img: w5, href: "https://prourls.link/AYamo0" }
];

export default function WorkGrid() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="work-grid">
      {works.map((work, i) => {
        const isHovered = hovered === i;
        const isDimmed = hovered !== null && hovered !== i;

        return (

          <a
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            className="work-link"
          >
            <div
              key={i}
              className="work-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                transform: isDimmed ? "scaleY(0.9)" : "scaleY(1)",
                filter: isDimmed ? "blur(6px)" : "blur(0px)"
              }}
            >
              <img
                src={work.img}
                alt=""
                className="work-image"
                style={{
                  transform: isHovered ? "scale(1.03)" : "scale(1)"
                }}
              />

              <span className="work-index">
                [{String(i + 1).padStart(2, "0")}]
              </span>

              {isHovered && (
                <span className="work-view">VIEW PROJECT →</span>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
}
