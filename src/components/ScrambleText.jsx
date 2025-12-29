import { useRef } from "react";

const A_CODE = "A".charCodeAt(0);
const Z_CODE = "Z".charCodeAt(0);

function nextChar(char, step) {
  if (char === " ") return " ";
  const code = char.charCodeAt(0);
  if (code < A_CODE || code > Z_CODE) return char;

  return String.fromCharCode(
    A_CODE + ((code - A_CODE + step) % 26)
  );
}

export default function AlphaScrambleText({
  text,
  frames = 8,
  speed = 30
}) {
  const ref = useRef(null);
  let frame = 0;
  let rafId;

  const animate = () => {
    frame++;

    const output = text
      .split("")
      .map((char) => nextChar(char, frame))
      .join("");

    ref.current.innerText = output;

    if (frame < frames) {
      rafId = setTimeout(animate, speed);
    } else {
      ref.current.innerText = text;
      frame = 0;
      clearTimeout(rafId);
    }
  };

  const start = () => {
    clearTimeout(rafId);
    frame = 0;
    animate();
  };

  return (
    <span
      ref={ref}
      onMouseEnter={start}
      style={{
        display: "inline-block",
        cursor: "pointer",
        whiteSpace: "pre"
      }}
    >
      {text}
    </span>
  );
}
